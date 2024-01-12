import { useCallback, useRef, useState } from 'react';
import axios from 'axios';

import { IResponse, IStarWarsUsersHookGen, IUser } from './StarWarsList.Interfaces';

const searchUrl = (pageNum: number, search: string): string =>
  `https://swapi.dev/api/people/?search=${search}&page=${pageNum}`;

const getUsersAxios = (url: string): Promise<IResponse> => axios.get(url);

const useDebounce = (callback: any, delay: number): ((...args: any[]) => void) => {
  const timer = useRef();

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      // @ts-ignore
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};

const loadUsersGenerator = async function* (origUrl: string): any {
  let url = origUrl;

  while (url) {
    // eslint-disable-next-line no-await-in-loop
    const { data } = await getUsersAxios(url);
    url = data.next!;
    yield data.results;
  }
};

const useStarWarsUsersGenerator = (): IStarWarsUsersHookGen => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([] as IUser[]);
  const inputValue = useRef('');
  const getUsersGenerator = useRef();

  // todo: useCallback?
  const loadUsersCallback = (): any => {
    setIsLoading(true);

    // @ts-ignore
    getUsersGenerator.current
      .next()
      .then(({ value, done }: { value: IUser[]; done: boolean }) =>
        done ? alert('All loaded!') : setUsers((curr) => [...curr, ...value]),
      )
      .finally(() => setIsLoading(false));
  };

  const loadMore = async (): Promise<any> => {
    if (inputValue.current === '') {
      getUsersGenerator.current = loadUsersGenerator(searchUrl(1, ''));
    }

    loadUsersCallback();
  };

  const searchUser = useDebounce((value: string): void => {
    if (value === inputValue.current) {
      return;
    }

    setUsers([]);
    inputValue.current = value;

    if (!value) {
      return;
    }

    getUsersGenerator.current = loadUsersGenerator(searchUrl(1, value));
    loadUsersCallback();
  }, 500);

  return {
    isLoading,
    users,
    loadUsers: loadMore,
    searchUser,
  };
};

export { useStarWarsUsersGenerator, useDebounce };

import { useCallback, useRef, useState } from 'react';
import axios from 'axios';

import { IResponse, IStarWarsUsersHook, IUser } from './StarWarsList.Interfaces';

const baseUrl = 'https://swapi.dev/api/people/?page=1';
const searchUrl = 'https://swapi.dev/api/people/?search=';

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

const useStarWarsUsers = (): IStarWarsUsersHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([] as IUser[]);
  const nextUrl = useRef(baseUrl as string | null);

  const handleResponse = (response: IResponse): void => {
    const res = response?.data?.results || [];

    setUsers((curr) => [...curr, ...res]);
    nextUrl.current = response?.data?.next;
  };

  const getUsersCallback = useCallback((url: string) => {
    setIsLoading(true);

    getUsersAxios(url)
      .then(handleResponse)
      .finally(() => setIsLoading(false));
  }, []);

  const loadMore = (): void => {
    if (!nextUrl.current) {
      alert('No next url');
      return;
    }

    getUsersCallback(nextUrl.current);
  };

  const searchUser = useDebounce((inputValue: string): void => {
    setIsLoading(true);
    setUsers([]);

    getUsersCallback(`${searchUrl}${inputValue}`);
  }, 500);

  return {
    isLoading,
    users,
    loadMore,
    searchUser,
  };
};

export { useStarWarsUsers, useDebounce };

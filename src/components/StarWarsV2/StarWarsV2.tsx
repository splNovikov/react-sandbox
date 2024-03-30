import { FC, useCallback, useEffect, useRef, useState } from "react";
import UserList from "./UserList";
import { useDebounce } from "./useDebounce.hook";
import { useSwapi } from "./useSwapi.hook";

import "./StarWarsV2.scss";

// const searchUrl = `https://swapi.dev/api/people/?search=sky&page=1`;
// return: {
//      next: string | null,                        // url
//      results: { name: string, url: string}[] }

type User = {
  name: string;
  url: string;
};

const StarWarsV2: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { isLoading, fetchData, getUrl } = useSwapi();
  const nextUrl = useRef(null);
  const inputRef = useRef();

  useEffect(() => {
    // @ts-ignore
    inputRef?.current?.focus();
  }, []);

  const handleInputChange = useCallback(
    async function (event: any) {
      const val = event?.target?.value?.trim();

      if (!val) {
        return setUsers([]);
      }

      const url = getUrl(val);

      const { users, next } = await fetchData(url);
      setUsers(users);
      nextUrl.current = next;
    },
    [fetchData, getUrl]
  );

  const handleLoadMoreClick = async () => {
    if (!nextUrl.current) {
      alert("next is not available to use");
      return;
    }

    const { users: loadedUsers, next } = await fetchData(nextUrl.current);
    setUsers((users) => [...users, ...loadedUsers]);
    nextUrl.current = next;
  };

  const debouncedHandleInputChange = useDebounce(handleInputChange, 1500);

  return (
    <div>
      <div>
        <input
          type="search"
          onChange={debouncedHandleInputChange}
          // @ts-ignore
          ref={inputRef}
        />
        <button type="button" onClick={handleLoadMoreClick}>
          More...
        </button>
      </div>
      <div style={{ height: "30px", display: "flex", alignItems: "center" }}>
        {isLoading && <span>Loading...</span>}
      </div>
      <div className="results">
        <UserList users={users} />
      </div>
    </div>
  );
};

export default StarWarsV2;

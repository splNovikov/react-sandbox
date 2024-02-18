import { FC } from 'react';

import { useStarWarsUsersGenerator } from './StarWarsListGenerator.hooks';

import './StarWarsList.scss';

const StarWarsList: FC = () => {
  const { isLoading, users, loadUsers, searchUser } = useStarWarsUsersGenerator();

  const btnText = users.length ? 'Load More' : 'Load Users';

  const changeInputValue = (e: any): void => {
    searchUser(e?.currentTarget?.value?.trim());
  };

  return (
    <div>
      <div>Star War List</div>
      <button type="button" disabled={isLoading} onClick={loadUsers}>
        {isLoading ? <span>Loading...</span> : btnText}
      </button>
      <div className="InputWrapper">
        <input type="text" onChange={changeInputValue} />
      </div>
      <ol className="UserList">
        {users.map((user) => (
          <li key={user.url}> {user.name} </li>
        ))}
      </ol>
    </div>
  );
};

export default StarWarsList;

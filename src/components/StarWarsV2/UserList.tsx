import { memo } from "react";

type User = {
  name: string;
  url: string;
};
type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.url}>{user.name}</li>
      ))}
    </ol>
  );
};

export default memo(UserList);

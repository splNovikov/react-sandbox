export interface IStarWarsUsersHook {
  isLoading: boolean;
  users: IUser[];
  loadMore: () => void;
  searchUser: (val: string) => void;
}

export interface IStarWarsUsersHookGen {
  isLoading: boolean;
  users: IUser[];
  loadUsers: () => void;
  searchUser: (val: string) => void;
}

export interface IUser {
  name: string;
  url: string;
}
export interface IResponse {
  data: {
    count: number;
    results: IUser[];
    next: string | null;
    previous: string | null;
  };
}

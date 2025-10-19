export interface User {
  id: string;
  name: string;
  username: string;
}

export interface UserContextType {
  user: User | undefined;
  createUser: (user: Omit<User, "id">) => Promise<void>;
  logout: () => void;
}

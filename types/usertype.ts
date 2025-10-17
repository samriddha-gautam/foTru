export interface User {
  id: string;
  name: string;
  username: string;
  createdAt: string;
}

export interface UserContextType {
  user: User | undefined;
  createUser: (user: Omit<User, "id" | "createdAt">) => void;
}

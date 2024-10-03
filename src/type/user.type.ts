export interface IUser {
  UserId: string;
  name: string;
  number: string;
  email: string;
  password?: string;
  level?: number;
  platform?: string;
}

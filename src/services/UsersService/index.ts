import { UsersService } from "./UsersService";
import { UsersInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const userLoader: { (token?: string): UsersInterface } = (token) => {
  return new UsersService(token);
};

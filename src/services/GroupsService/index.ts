import { GroupsLoaderService } from "./GroupsLoaderService";
import {  GroupsInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const groupsLoader: { (token?: string): GroupsInterface } = (token) => {
  return new GroupsLoaderService(token);
};

import { DepartmentsLoaderService } from "./DepartmentsLoaderService";
import { DepartmentsInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const departmentsLoader: { (token?: string): DepartmentsInterface } = (token) => {
  return new DepartmentsLoaderService(token);
};

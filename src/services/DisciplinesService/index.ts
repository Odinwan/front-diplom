import { DisciplinesLoaderService } from "./DisciplinesLoaderService";
import {  DisciplinesInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const disciplinesLoader: { (token?: string): DisciplinesInterface } = (token) => {
  return new DisciplinesLoaderService(token);
};

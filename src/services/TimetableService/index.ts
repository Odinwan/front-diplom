import { TimetableLoaderService } from "./TimetableLoaderService";
import {  TimetableInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const timetableLoader: { (token?: string): TimetableInterface } = (token) => {
  return new TimetableLoaderService(token);
};

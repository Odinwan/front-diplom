import { NewsLoaderService } from "./NewsLoaderService";
import {  NewsInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const newsLoader: { (token?: string): NewsInterface } = (token) => {
  return new NewsLoaderService(token);
};

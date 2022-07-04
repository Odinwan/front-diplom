import { SpecialtiesLoaderService } from "./SpecialtiesLoaderService";
import {  SpecialtiesInterface } from "./interfaces";

/**
 * Фабрика сервиса загрузки информации об аккаунтах пользователей
 *
 * @param token
 */
export const specialtiesLoader: { (token?: string): SpecialtiesInterface } = (token) => {
  return new SpecialtiesLoaderService(token);
};

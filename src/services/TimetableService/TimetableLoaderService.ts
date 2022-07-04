import { Client } from "../FetchClient/Client";
import { GET_SPECIALITIES, LIMIT, SERVER } from "../constants";
import { SpecialtiesInterface, Specialty } from "./interfaces";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class TimetableLoaderService implements SpecialtiesInterface {
  private readonly client: Client;

  /**
   * Конструктор сервиса
   *
   * @param token
   */
  constructor(token?: string) {
    this.client = new Client;
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadSpecialties(): Promise<Specialty[]> {
    try {
      let url = `${SERVER}${GET_SPECIALITIES}?limit=${LIMIT}`;
      let res = await this.client.Get<Specialty[]>(url, {});
      return res;
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadSpecialtiesByDepartmentId(id:string): Promise<Specialty[]> {
    try {
      let url = `${SERVER}${GET_SPECIALITIES}?limit=${LIMIT}&department=${id}`;
      let res = await this.client.Get<Specialty[]>(url, {});
      console.log('url',url);
      console.log('res',res);
      return res;
    } catch (err) {

      throw err;
    }
  }
}

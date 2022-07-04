import { Client } from "../FetchClient/Client";
import { GET_DISCIPLINES, GET_SPECIALITIES, LIMIT, SERVER } from "../constants";
import { Discipline, DisciplinesInterface } from "./interfaces";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class DisciplinesLoaderService implements DisciplinesInterface {
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
  async LoadDisciplines(): Promise<Discipline[]> {
    try {
      let url = `${SERVER}${GET_DISCIPLINES}?limit=${LIMIT}`;
      let res = await this.client.Get<Discipline[]>(url, {});
      return res;
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadDisciplinesByDepartmentId(id: string): Promise<Discipline[]> {
    try {
      let url = `${SERVER}${GET_DISCIPLINES}?limit=${LIMIT}&department=${id}`;
      let res = await this.client.Get<Discipline[]>(url, {});
      console.log('url',url);
      console.log('res',res);
      return res;
    } catch (err) {

      throw err;
    }
  }
}

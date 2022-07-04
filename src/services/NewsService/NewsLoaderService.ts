import { Client } from "../FetchClient/Client";
import { GET_GROUPS, GET_NEWS, LIMIT, SERVER } from "../constants";
import { New, NewsInterface } from "./interfaces";
import { Group } from "../GroupsService/interfaces";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class NewsLoaderService implements NewsInterface {
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
  async LoadNews(): Promise<New[]> {
    try {
      let url = `${SERVER}${GET_NEWS}?limit=${LIMIT}`;
      let res = await this.client.Get<New[]>(url, {});
      return res;
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadNewItemById(id:string): Promise<New> {
    try {
      let url = `${SERVER}${GET_NEWS}${id}/`
      return await this.client.Get<New>(url, {});
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadNewsByDepartmentId(id:string): Promise<New[]> {
    try {
      let url = `${SERVER}${GET_NEWS}?limit=${LIMIT}&department=${id}`;
      let res = await this.client.Get<New[]>(url, {});
      console.log('url',url);
      console.log('res',res);
      return res
    } catch (err) {

      throw err;
    }
  }
}

import { Client } from "../FetchClient/Client";
import { GET_GROUPS, LIMIT, SERVER } from "../constants";
import { Group, GroupsInterface } from "./interfaces";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class GroupsLoaderService implements GroupsInterface {
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
  async LoadGroups(): Promise<Group[]> {
    try {
      let url = `${SERVER}${GET_GROUPS}?limit=${LIMIT}`;
      return await this.client.Get<Group[]>(url, {})
    } catch (err) {

      throw err;
    }
  }

/**
   * Загрузка аккаунтов пользователей
   */
  async LoadGroupsByDepartmentId(id:string): Promise<Group[]> {
    try {
      let url = `${SERVER}${GET_GROUPS}?limit=${LIMIT}&department=${id}`;
      let res = await this.client.Get<Group[]>(url, {})
      console.log('url',url);
      console.log('res',res);
      return res
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadGroupById(id:string): Promise<Group> {
    try {
      let url = `${SERVER}${GET_GROUPS}${id}/`
      return await this.client.Get<Group>(url, {});
    } catch (err) {

      throw err;
    }
  }
}

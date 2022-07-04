import { Client } from "../FetchClient/Client";
import { GET_DEPARTMENTS, LIMIT, SERVER } from "../constants";
import { Department, DepartmentsInterface } from "./interfaces";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class DepartmentsLoaderService implements DepartmentsInterface {
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
  async LoadDepartments(): Promise<Department[]> {
    try {
      let url = `${SERVER}${GET_DEPARTMENTS}?limit=${LIMIT}`;
      let res = await this.client.Get<Department[]>(url, {});

      return res
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadDepartmentById(id:string): Promise<Department> {
    try {
      let url = `${SERVER}${GET_DEPARTMENTS}${id}/`
      return await this.client.Get<Department>(url, {});
    } catch (err) {

      throw err;
    }
  }
}

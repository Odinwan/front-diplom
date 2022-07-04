import { UsersInterface } from "./interfaces";
import { Client } from "../FetchClient/Client";
import { GET_STUDENTS, SERVER } from "../constants";
import { User } from "../AuthService/AccountInfoService";

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class UsersService implements UsersInterface {
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
  async LoadUsers(): Promise<User[]> {
    try {
      let url = `${SERVER}${GET_STUDENTS}`
      return await this.client.Get<User[]>(url, {});
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadUserById(id:string): Promise<User> {
    try {
      let url = `${SERVER}${GET_STUDENTS}${id}`

      return await this.client.Get<User>(url, {});
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async LoadUser(): Promise<User> {
    try {
      let url = `${SERVER}${GET_STUDENTS}`
      return await this.client.Get<User>(url, {});
    } catch (err) {

      throw err;
    }
  }
}

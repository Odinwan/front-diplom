import { AuthServiceInterface } from "./interfaces";
import { Client } from "../FetchClient/Client";
import { GET_PROFILE, GET_STUDENTS, LOGIN, SERVER } from "../constants";
import { Group } from "../GroupsService/interfaces";
import { Department } from "../DepartmentsService/interfaces";
import { AxiosResponse } from 'axios';

export type Gender = "male" | "female" | "none";
export type UserType = "student" | "teacher" | "none";
export type EducType = "full_time" | "part_time" | "none";

export const UserTemplate:User = {
  id: "",
  full_name: "",
  first_name: "",
  last_name: "",
  gender: "none",
  birth_date: "",
  phone_number: "",
  address: "",
  photo: "",
  email: "",
  group: undefined,
  department: undefined,
  is_active: false,
  user_type: "none",
  headman: false,
  is_superuser: false,
  group_number: "",
  course_number: 0,
  phone_number_parents: "",
  educ_type: "none",
  position: "",
  qualification: "",
};

export interface User {
  id: string,
  full_name: string,
  first_name: string,
  last_name: string,
  gender: Gender,
  birth_date: string,
  phone_number: string,
  group: Group | undefined
  address: string,
  photo: string,
  email: string,
  is_active: boolean,
  headman: boolean,
  department: Department | undefined
  user_type: UserType,
  is_superuser: boolean,
  group_number: string,
  course_number: number,
  phone_number_parents: string,
  educ_type: EducType,
  position: string,
  qualification: string,
}



export type VisitType =  "locale" | "remote"

export interface LogInResponse {
  token: string;
  id: string;
}

export interface LogInParams {
  password: string,
  username: string
}

/**
 * Сервис загрузки информации об аккаунтах пользователей
 */
export class AuthService implements AuthServiceInterface {
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
  async LogIn(data: LogInParams): Promise<LogInResponse> {
    try {
      let url = `${SERVER}${LOGIN}`;
      return await this.client.Post<LogInParams, LogInResponse>(url, data, {});
    } catch (err) {

      throw err;
    }
  }

  /**
   * Загрузка аккаунтов пользователей
   */
  async Profile(): Promise<User> {
    try {
      let url = `${SERVER}${GET_PROFILE}`;

      return await this.client.Get<User>(url, {})
    } catch (err) {

      throw err;
    }
  }
}

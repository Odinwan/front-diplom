import { User } from "../AuthService/AccountInfoService";

export type Account = {
    id: string
    name: string
    contactPerson: string
    contactEmail: string
    countryCode: string
    phoneNumber: string
    active: boolean
    reportBug: boolean
    type: "user" | "guest" | ""
};

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface UsersInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadUsers(): Promise<User[]>


    LoadUserById(id:string): Promise<User>

    LoadUser(): Promise<User>
}

import { Gender, User } from "../AuthService/AccountInfoService";

export type Department = {
    id: string,
    name: string,
    email: string,
    phone_number: string,
    address: string,
    count_groups: number,
    count_news: number,
    count_specialty:number,
    gallery:any
    description: string,
    teachers: SliderPeople[]
    photo:string,
    manager_department: User,
};

export interface SliderPeople {
    id:string,
    full_name:string,
    photo:string
    gender: Gender
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface DepartmentsInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadDepartments(): Promise<Department[]>


    LoadDepartmentById(id:string): Promise<Department>
}

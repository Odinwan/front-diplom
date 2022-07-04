import { Department } from "../DepartmentsService/interfaces";

export interface Specialty {
    department: Department
    id: string
    locale_education_time: string
    name: string
    remote_education_time: string
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface SpecialtiesInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadSpecialties(): Promise<Specialty[]>

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadSpecialtiesByDepartmentId(id:string): Promise<Specialty[]>
}

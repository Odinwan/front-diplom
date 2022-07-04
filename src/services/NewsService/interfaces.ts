import { Department } from "../DepartmentsService/interfaces";

export interface New {
    department: Department
    id: string
    photo: string
    name: string
    description: string
    date: string
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface NewsInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadNews(): Promise<New[]>

    LoadNewItemById(id: string): Promise<New>

    LoadNewsByDepartmentId(id: string): Promise<New[]>
}

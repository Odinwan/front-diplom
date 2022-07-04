import { Department } from "../DepartmentsService/interfaces";

export interface Discipline {
    department: Department
    id: string
    name: string
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface DisciplinesInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadDisciplines(): Promise<Discipline[]>

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadDisciplinesByDepartmentId(id: string): Promise<Discipline[]>
}

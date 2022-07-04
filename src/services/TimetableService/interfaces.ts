import { Department } from "../DepartmentsService/interfaces";

export interface Timetable {
    department: Department
    id: string
    locale_education_time: string
    name: string
    remote_education_time: string
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface TimetableInterface {
    commonTimetable(groupId: string): Timetable[]
    sessionTimetable(groupId: string): Timetable[]
    commonTimetable(groupId: string): Timetable[]
}

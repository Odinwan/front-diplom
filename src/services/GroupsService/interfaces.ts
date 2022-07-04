import { User, VisitType } from "../AuthService/AccountInfoService";
import { SliderPeople } from "../DepartmentsService/interfaces";

export interface Group {
    code: string
    curator: User
    email: string
    headman: User
    id: string
    is_session: boolean
    phone_number: string
    spec: Spec
    start_date: string
    students: SliderPeople[]
    visit_type: VisitType
}

interface Spec {
    department: string
    id: string
    locale_education_time: string
    name: string
    remote_education_time: string
}

/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
export interface GroupsInterface {

    /**
     * Загрузка данных аккаунтов пользователей
     */
    LoadGroups(): Promise<Group[]>


    LoadGroupsByDepartmentId(id:string): Promise<Group[]>


    LoadGroupById(id:string): Promise<Group>
}

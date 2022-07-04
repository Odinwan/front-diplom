/**
 * Интерфейс сервиса для работы с аккаунтами пользователями
 */
import { LogInParams, LogInResponse, User } from './AccountInfoService';
import { AxiosResponse } from 'axios';


export interface AuthServiceInterface {
  LogIn(data: LogInParams): Promise<LogInResponse>;

  Profile(): Promise<User>;
}

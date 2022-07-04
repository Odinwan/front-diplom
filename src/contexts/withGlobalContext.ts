import { BehaviorSubject } from "rxjs";
import withBehaviourSubject from "../hocs/withBehaviourSubject";
import { authService } from '@/services/AuthService';
import { LogInParams, User, UserTemplate, UserType } from '@/services/AuthService/AccountInfoService';

// Тип контекста
interface ContextInterface {
  globalContextState: CheckVisibilityTypeState;
}

interface CheckVisibilityTypeState {
  user: User;
  isAuth: boolean;
  role: UserType;
  isLoading: boolean;
  isOpenLeftMenu: boolean;
}

// Свойства контекста по умолчанию
class DefaultContext implements ContextInterface {
  globalContextState: CheckVisibilityTypeState = {
    user: UserTemplate,
    isAuth: false,
    role: "student",
    isLoading: true,
    isOpenLeftMenu: false,
  };
}

// События, происходящие с контекстом
type withGlobalContextActions = {
  logOut: () => void
  setIsLoading: (isLoading: boolean) => void
  checkToken: (isAuth: boolean, user: User) => void
  setOpenLeftMenu: (isOpenLeftMenu: boolean) => void
  setAuth: (isAuth: boolean, role: UserType) => void
  saveCurrentUser: (user: User) => void
};

// Создаем изначальный State
const context$ = new BehaviorSubject<ContextInterface>(new DefaultContext);

const checkToken = (isAuth: boolean, user: User) => {
  const context = context$.getValue();

  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      isAuth: isAuth,
      role: user.user_type,
      user: user,
      isLoading: false,
    },
  });
};

const setIsLoading = (isLoading: boolean) => {
  const context = context$.getValue();

  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      isLoading: isLoading,
    },
  });
};

const setOpenLeftMenu = (isOpenLeftMenu: boolean) => {
  const context = context$.getValue();
  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      isOpenLeftMenu,
    },
  });
};

const saveCurrentUser = (user: User) => {
  const context = context$.getValue();

  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      user,
    },
  });
};

const logOut = async () => {

  await localStorage.multiRemove(["token", "myid", "user"]);

  context$.next(new DefaultContext);
};

const setAuth = async (data: LogInParams) => {
  const context = context$.getValue();

  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      isLoading: true,
    },
  });

  let res = await authService().LogIn(data);
  console.log('res',res);
  if (res.token) {
    await localStorage.setItem("token", res.token);

    const user = await authService().Profile()
    console.log('user',user);
    await localStorage.setItem("user", JSON.stringify(user));

    context$.next({
      ...context,
      globalContextState: {
        ...context.globalContextState,
        user: user,
        isAuth: true,
        role: user.user_type,
        isLoading: false,
      },
    });

    return;
  }

  context$.next({
    ...context,
    globalContextState: {
      ...context.globalContextState,
      isLoading: false,
    },
  });
};

// Экспортируем результирующий тип, описывающий текущий контекст
export type WithGlobalContextContextData<T> =
  T
  & ContextInterface
  & withGlobalContextActions;

// Тип, описывающий текущий HOC компонент
type HocType = { <T>(Component: React.ComponentType<WithGlobalContextContextData<T>>): React.ComponentType<T> };
const withGlobalContext = withBehaviourSubject(
  context$,
  {
    setAuth,
    checkToken,
    setIsLoading,
    saveCurrentUser,
    setOpenLeftMenu,
    logOut,
  },
) as HocType;

// Экспортируем HOC
export default withGlobalContext;

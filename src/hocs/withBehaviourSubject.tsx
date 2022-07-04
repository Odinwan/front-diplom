import {BehaviorSubject} from "rxjs";
import React, {useEffect, useState} from "react";

/**
 * HOC компонент, реализующий функционал синхронизации свойств переданного компонента
 * с переданным подписчиком.
 *
 * Идеалогия подхода состоит в том, чтобы сделать возможность передавать свойства и
 * методы контекста через дерево компонентов минуя свойства. Проблематика в том, что
 * изначально не очень хорошо менять значение контекстов на лету, а значит необходим
 * другой подход.
 *
 * Данный подход использует глобальный контекст в виде BehaviorSubject, который по сути
 * уже хранит состояние, и преобразует его в доступный для React - State.
 *
 * Для реализации такого подхода применяется хук - useEffect, который по сути
 * генерирует подписку после рендеринга HOC, а также автоматически отписывается от
 * глобального подписчика после того, как компонент размонтируется.
 *
 * @param context$
 * @param actions
 */
const withBehaviourSubject = <Props, State, Actions extends { [T in string]: { (...args: any[]): any } }>(
    context$: BehaviorSubject<State>,
    actions: Actions,
): (Component: React.ComponentType<Props & State & Actions>) => React.ComponentType<Props> => {
    return Component => (props: Props) => {
        const [state, setState] = useState<State>(context$.getValue());
        let isMounted = {status: true};

        // Подписываемся на изменения
        useEffect(() => {
            const subscription = context$.subscribe({
                next: value => {
                    if (!isMounted.status) {
                        return
                    }

                    setState(value)
                },
            });

            return () => {
                isMounted.status = false;
                subscription.unsubscribe();
            }
        }, []);

        return <Component {...props} {...state} {...actions} />
    }
};

export default withBehaviourSubject

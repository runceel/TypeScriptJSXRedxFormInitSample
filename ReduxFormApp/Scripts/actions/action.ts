export interface Action<T> {
    type: string;
    payload: T;
}

export const SET_INPUT = 'SET_INPUT';
export const SET_ANSWER = 'SET_ANSWER';
export const INIT = 'INIT';
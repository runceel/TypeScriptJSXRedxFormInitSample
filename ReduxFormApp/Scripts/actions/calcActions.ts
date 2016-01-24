import * as action from './action';

export interface SetInputPayload {
    lhs: number;
    rhs: number;
}

export interface SetAnswerPayload {
    answer: number;
}

export interface InitPayload {
}


export function setInput(lhs: number, rhs: number): action.Action<SetInputPayload> {
    return {
        type: action.SET_INPUT,
        payload: { lhs: lhs, rhs: rhs }
    };
}

export function setAnswer(lhs: number, rhs: number): action.Action<SetAnswerPayload> {
    return {
        type: action.SET_ANSWER,
        payload: { answer: lhs + rhs }
    };
}

export function init(): action.Action<InitPayload> {
    return {
        type: action.INIT,
        payload: {}
    }
}

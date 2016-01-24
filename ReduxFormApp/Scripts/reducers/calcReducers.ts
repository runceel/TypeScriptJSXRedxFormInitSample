import Calc from '../models/Calc';
import * as action from '../actions/action';
import assign = require('object-assign');
import * as calcActions from '../actions/calcActions';

function setInput(state: Calc, p: calcActions.SetInputPayload): Calc {
    return assign({},
        state,
        {
            lhs: p.lhs,
            rhs: p.rhs
        } as Calc);
}

function setAnswer(state: Calc, p: calcActions.SetAnswerPayload): Calc {
    return assign({},
        state,
        {
            answer: p.answer
        } as Calc);
}

export function calc(state = new Calc(), a: action.Action<any>): Calc {
    switch (a.type) {
        case action.SET_INPUT:
            return setInput(state, a.payload as calcActions.SetInputPayload);
        case action.SET_ANSWER:
            return setAnswer(state, a.payload as calcActions.SetAnswerPayload);
        case action.INIT:
            return { lhs: 0, rhs: 0, answer: 0 };
        default:
            return state;
    }
}

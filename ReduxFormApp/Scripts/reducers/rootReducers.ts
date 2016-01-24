import * as Redux from 'redux';
import * as calcReducers from './calcReducers';
import Calc from '../models/Calc';
import * as ReduxForm from 'redux-form';

export interface AppState {
    calc: Calc;
}

export const rootReducer = Redux.combineReducers({
    calc: calcReducers.calc,
    form: ReduxForm.reducer
});

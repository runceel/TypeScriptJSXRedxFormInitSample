import * as React from 'react';
import * as ReduxForm from 'redux-form';
import * as Redux from 'redux';
import * as rootReducers from '../reducers/rootReducers';
import * as calcActions from '../actions/calcActions';
import * as action from '../actions/action';

interface FormData {
    lhsField: string;
    rhsField: string;
}

interface IndexPageProps extends ReduxForm.ReduxFormProps {
    lhs?: number;
    rhs?: number;
    answer?: number;
    initialValues?: FormData; // 自分ではやす
    init?: () => void;
}


class IndexPage extends React.Component<IndexPageProps, {}> {
    private validateContent(data: FormData, dispatch: Redux.Dispatch) {
        return new Promise((resolve, reject) => {
            var result = {} as FormData;
            if (!parseFloat(data.lhsField)) {
                result.lhsField = '数字で頼む'
                reject(result);
                return;
            }
            if (!parseFloat(data.rhsField)) {
                result.rhsField = '数字で頼む'
                reject(result);
                return;
            }

            var lhs = parseFloat(data.lhsField);
            var rhs = parseFloat(data.rhsField);
            dispatch(calcActions.setInput(lhs, rhs));
            dispatch(calcActions.setAnswer(lhs, rhs));
            resolve();
        });
    }

    render() {
        const {
            handleSubmit,
            fields: {lhsField, rhsField},
            lhs,
            rhs,
            answer,
            init
        } = this.props;
        return (
            <form onSubmit={handleSubmit(this.validateContent)}>
                <div>
                    <input type='text' {...lhsField} />{lhsField.error && <span>{lhsField.error}</span>}
                    <br/>
                    <input type='text' {...rhsField} />{rhsField.error && <span>{rhsField.error}</span>}
                    <br/>
                    <input type='submit' />
                </div>
                <div>
                    <span>{lhs} + {rhs} = {answer}</span>
                </div>
                <div>
                    <button onClick={e => {
                        e.preventDefault();
                        init();
                    }}>
                        Init
                    </button>
                </div>
            </form>
        );
    }
}

function select(state: rootReducers.AppState): IndexPageProps {
    return {
        lhs: state.calc.lhs,
        rhs: state.calc.rhs,
        answer: state.calc.answer,
        initialValues: {
            lhsField: state.calc.lhs && state.calc.lhs.toString(),
            rhsField: state.calc.rhs && state.calc.rhs.toString()
        }
    };
}

export default ReduxForm.reduxForm({
    form: 'IndexForm',
    fields: ['lhsField', 'rhsField']
}, select, {
    init: calcActions.init
})(IndexPage);
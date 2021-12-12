import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/fieldValidation';
import { Input, TextArea, Select } from '../../../utils/formFields';

import { connect } from 'react-redux';
import { createPlayerCardTC } from '../../../State/PlayersReducer';
import { updatePlayerCardTC } from '../../../State/PlayersReducer';

let CreatePlayerForm = (props) => {

    const submit = (values) => {
        
        if (props.action === 'create') {                // пока что по-другому ВООБЩЕ никак не работало. МОЖНО ДАЖЕ НЕ ПЫТАТЬСЯ ПЕРЕДАВАТЬ ФУНКЦИЮ submit ЧЕРЕЗ PROPS!!!! ВСЕ РАВНО НЕ ПОЛУЧИТСЯ
            props.createPlayerCardTC(values)
        } else if (props.action === 'update') {
            console.log(props)
            debugger;
            props.updatePlayerCardTC(props.id, values)
        }
        // props.submit(values);
    }


    return (

        <div>
            <form onSubmit={props.handleSubmit(submit)}>
                <div>
                    <Field name="briefInfo" label='Коротко о себе: ' component={TextArea} type="text"
                        validate={[required]} />
                </div>

                <div>
                    <Field name="fullInfo" label='Всё что вы хотите сказать в развернутом виде: ' component={TextArea} type="text"
                        validate={[required]} />
                </div>

                <div>
                    <Field name="rank" label='Ваш ранг: ' component={Input} type="text" // изменить тип
                        validate={[required]} />
                </div>

                <div>
                    <Field name="sex" label='Пол: ' component={Input} type="text"
                        validate={[required]} />
                </div>

                <div>

                    <Field name="mainRoles" label='Основные роли: ' component={Select}
                        validate={[required]} />

                </div>

                <div>
                    <Field name="offRoles" label='Второстепенные роли: ' component={Select}
                        validate={[required]} />
                </div>

                <div>
                    <Field name="categories" label='Категории: ' component={Input} type="text"
                        validate={[required]} />
                </div>

                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}


CreatePlayerForm = reduxForm({
    form: 'createPlayerCard'
})(CreatePlayerForm);


const mapStateToProps = (state) => {  // удалить
    return {

    }
}


export default connect(mapStateToProps, { createPlayerCardTC, updatePlayerCardTC })(CreatePlayerForm);


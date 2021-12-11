import React from 'react'
import { Field, reduxForm, submit } from 'redux-form';
import { email, maxLengthCreator, minLengthCreator, required } from '../../../utils/fieldValidation';
import { Input, TextArea, Select } from '../../../utils/formFields';
import { createPlayerCardTC } from '../../../State/PlayersReducer';
import {connect} from 'react-redux';

let CreatePlayerForm = (props) => {


    /*
     {
         profileUrl: 'url',          //нет в форме
         nickName: 'szh',            //нет в форме
         briefInfo: 'brief Info Here',
         fullInfo: 'full info here',
         rank: 'diamond24',
         sex: 'male',                //radio
         mainRoles: ['jungler'],     //onClick choose
         offRoles: ['mid'],          //onClick choose (not required)
         categories: ['cat1, cat2']  //onClick choose
     }
     */

     const submit = (values) => {
        console.log(values);
        props.createPlayerCardTC(values)
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
                    {/* <Field name="mainRoles" component="select">
                        <option></option>
                        <option value="Top">Top</option>
                        <option value="Jungle">Jungle</option>
                        <option value="Mid">Mid</option>
                        <option value="Bottom">Bottom</option>
                        <option value="Support">Support</option>
                    </Field> */}
                </div>

                <div>
                    <Field name="offRoles" label='Второстепенные роли: ' component={Input} type="text"
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

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {createPlayerCardTC})(CreatePlayerForm);


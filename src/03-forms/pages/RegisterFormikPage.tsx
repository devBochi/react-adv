import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                password2: '',
            }}
            onSubmit={ ( values ) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                                .min(2, 'Min of characters: 2')
                                .max(15, 'Must be less than 16 characters')
                                .required('Required!'),
                email: Yup.string()
                            .required('Required!')
                            .email('Must be an email valid adress'),
                password: Yup.string()
                            .min(6, 'Password is too short! Try with 6 or more characters')
                            .required('Required!'),
                password2: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Required!'),
            })}
        >
            {
                ({ handleReset }) => (
                <Form>

                    <MyTextInput 
                        label='' 
                        name='name'
                        placeholder='Name'
                    />
            
                    <MyTextInput 
                        label='' 
                        name='email'
                        placeholder='Email'
                        type='email'
                    />

                    <MyTextInput 
                        label='' 
                        name='password'
                        placeholder='Password'
                        type='password'
                    />

                    <MyTextInput 
                        label='' 
                        name='password2'
                        placeholder='Repeat password'
                        type='password'
                    />
   
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={handleReset}>Reset form</button>
        
                </Form> 
                )
            }
        </Formik>
        </div>
    )
}

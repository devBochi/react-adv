import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css'

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                jobType: '',
                terms: false,
            }}
            onSubmit={ ( values ) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                .max(15, 'Must be less than 16 characters')
                                .required('Required!'),
                lastName: Yup.string()
                                .max(10, 'Must be less than 11 characters')
                                .required('Required!'),
                email: Yup.string()
                            .required('Required!')
                            .email('Must be an email valid adress'),
                jobType: Yup.string()
                            .required('Required!')
                            .notOneOf(['IT-Junior'],'This option is not available'),
                terms: Yup.boolean()
                            .oneOf([true],'You have to accept terms and conditions')
            })}
        >
            {
                formik => (
                <Form>

                    <MyTextInput 
                        label='First Name' 
                        name='firstName'
                        placeholder='Nahuel'
                    />
                    
                    <MyTextInput 
                        label='Last Name' 
                        name='lastName'
                        placeholder='Montes de Oca'
                    />

                    <MyTextInput 
                        label='Email Adress' 
                        name='email'
                        placeholder='algo@example.com'
                        type='email'
                    />

                    <MySelect label='Job Type' name='jobType'>
                        <option value="">Pick something</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="IT-Senior">IT-Senior</option>
                        <option value="IT-Junior">IT-Junior</option>
                    </MySelect>
                    <br />

                    <MyCheckbox name='terms' label='Terms & Conditions'/>
                    
                    <button type='submit'>Submit</button>
        
                </Form> 
                )
            }
        </Formik>
    </div>
  )
}

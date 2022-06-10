import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>

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
                            .oneOf([true],'You have to accepts terms and conditions')
            })}
        >
            {
                formik => (
                <Form>
            
                    <label htmlFor="firstName">First Name</label>
                    <Field name='firstName' type='text'/>
                    <ErrorMessage name='firstName' component='span'/>
                    
                    <label htmlFor="lastName">Last Name</label>
                    <Field name='lastName' type='text'/>
                    <ErrorMessage name='lastName' component='span'/>
                    
                    <label htmlFor="email">Email</label>
                    <Field name='email' type='text'/>
                    <ErrorMessage name='email' component='span'/>

                    <label htmlFor="jobType">Job Type</label>
                    <Field name='jobType' as='select'>
                        <option value="">Pick something</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="IT-Senior">IT-Senior</option>
                        <option value="IT-Junior">IT-Junior</option>
                    </Field>
                    <ErrorMessage name='jobType' component='span'/>

                    <label>
                        <Field name='terms' type='checkbox'/>
                        Terms and Conditions
                    </label>
                    <ErrorMessage name='terms' component='span'/>
                    
                    <button type='submit'>Submit</button>
        
                </Form> 
                )
            }
        </Formik>
    </div>
  )
}

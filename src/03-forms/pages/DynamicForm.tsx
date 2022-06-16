import { Formik, Form } from "formik"
import { MySelect, MyTextInput } from '../components';
import formJson from "../data/custom-form.json"
import * as Yup from 'yup';

const initialValues: { [key:string]: any } = {};
const validationRequiredFields: { [key:string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('This field is required!')
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2,`Min of characters: ${((rule as any).value || 2)}`)
        }

        if (rule.type === 'email') {
            schema = schema.email('Must be a valid email address!')
        }

        // other rules
    }

    validationRequiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...validationRequiredFields});

export const DynamicForm = () => {
  
  
    return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialValues}
            onSubmit={(values)=> {
                console.log(values)
            }}
            validationSchema={validationSchema} 
        >
            {
                (formik) => (

                    <Form noValidate>
                        {formJson.map( ({ type, name, placeholder, label, options }) => {
                            
                            if ( type === 'input' || type === 'email' || type === 'password' ) {   
                                return <MyTextInput
                                            placeholder={placeholder}
                                            key={name}
                                            name={name} 
                                            label={label} 
                                            type={(type as any)} 
                                        />
                            } else if (type === 'select')  {
                                return <MySelect
                                            key={name}
                                            name={name} 
                                            label={label} 
                                        >
                                            <option>Select an option</option>
                                            {
                                                options?.map( ( {id, label} ) =>(
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                        </MySelect>
                            }
                        })}

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

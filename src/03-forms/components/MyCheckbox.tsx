import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x:string]: any;
}

export const MyCheckbox = ( { label, ...props } : Props ) => {
  
    const [field] = useField(props);

    return (
    <>
        <label>
            <input className="terms-checkbox" type='checkbox' {...field} {...props}/>
            {label}
        </label>
        <ErrorMessage name={props.name} component='span' className="custom-span-error"/>
    </>
  )
}

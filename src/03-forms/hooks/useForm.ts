import { ChangeEvent, useState } from "react"

export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData( prevData => (
            {
                ...prevData,
                [e.target.name] : e.target.value
            }
        ))
    }

    return {
        // properties
        ...formData,
        formData,
        // methods
        onChange
    }
}
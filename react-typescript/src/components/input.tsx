import React from "react"

type inputProps = {
    value: string
}

export const Input = (props: inputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event);
    

    return <input type='text' value={props.value} onChange={handleInputChange}/>
}
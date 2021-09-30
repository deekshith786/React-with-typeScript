import React from "react"

type inputProps = {
    value: string
}

// Destructuring the props: we can also directly use the properties inside the props without using the keyword props
export const Input = ({value}: inputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event);
    

    return <input type='text' value={value} onChange={handleInputChange}/>
}
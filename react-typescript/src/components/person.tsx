type personprops = {
    name: {
        firstName: string
        lastName: string
    }
}

export const Person = (props: personprops) => {
    return <div>
        <h1>
            {`Your firstName is ${props.name.firstName} and lastName is ${props.name.lastName}`}
        </h1>
    </div>
}
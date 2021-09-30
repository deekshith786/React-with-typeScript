import {Name} from './person.types';

// reuse the same type properties from other 

type personlist = {
    names: Name[]
}

export const PersonList = (props: personlist) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h1 key={name.firstName}>{`${name.firstName}  ${name.lastName}`}</h1>
                )
            })}
        </div>
    )
}
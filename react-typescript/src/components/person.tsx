// we can import and export the props from others files instead of declaring it always top of the file
import { personprops } from "./person.types"

export const Person = (props: personprops) => {
    return <div>
        <h1>
            {`Your firstName is ${props.name.firstName} and lastName is ${props.name.lastName}`}
        </h1>
    </div>
}

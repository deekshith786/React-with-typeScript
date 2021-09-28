type greetProps = {
    name: string
}
export const Greet = (props:greetProps) => {
    return (
        <div>
            <h1>welcome {props.name}</h1>
        </div>
    )
}

type oscarProps = {
    children: React.ReactNode
}

export const Oscar = (props:oscarProps) => {
    return <h1>{props.children}</h1>
}
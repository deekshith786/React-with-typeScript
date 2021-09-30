type buttonProps = {
    onClickButton: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: buttonProps) => {
    return <button onClick={(event) => props.onClickButton(event, 1)}>click me</button>
}

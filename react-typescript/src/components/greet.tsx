type greetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: greetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `welcome ${props.name}! Congrats, you have been rewarded with ${messageCount} points`
                        : `welcome guest user`
                }
            </h1>
        </div>
    )
}

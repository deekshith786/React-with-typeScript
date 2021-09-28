type greetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
export const Greet = (props: greetProps) => {
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `welcome ${props.name}! Congrats, you have been rewarded with ${props.messageCount} points`
                        : `welcome guest user`
                }
            </h1>
        </div>
    )
}

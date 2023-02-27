

type GreetProps ={
    name:string
    messagCount?:number
    isLoggedIn:Boolean
}
export const Greet = (props:GreetProps) => {
  const {messagCount = 0} = props
    return (
    <div>
        <h2>
     { props.isLoggedIn ? `Welcome Greet ${props.name} you have ${props.messagCount}` : 'Welcome Guest' }
        </h2>
        </div>
  )
}

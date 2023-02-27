
type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,Id:number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event,1)}>
        Click</button></div>
  )
}
import { isNamedExportBindings } from "typescript"
import { Name } from "./Person.types"

type ListProps = {
    names:Name[]
}

export const PersonList = (props: ListProps) => {
  return (
    <div>
        {props.names.map(name =>{
            return(
                
                <h2 key={name.first}>{name.first}{name.last}</h2>
            
            )
        })}

    </div>
  )
}
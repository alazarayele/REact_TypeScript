import React from 'react'

type InputProps = React.ComponentProps<'input'>

const input = (props: InputProps) => {
  return (
    <input {...props}/>
  )
}
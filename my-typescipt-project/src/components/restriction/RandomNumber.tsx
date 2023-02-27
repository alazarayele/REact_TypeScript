import React from 'react'


type randomNumberType ={
value:number
}
type PositiveNumber = randomNumberType & {
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber = randomNumberType & {
    isNegative:boolean
    isPositive?:never
    isZero?:never
}
type zero = randomNumberType & {
    isZero:boolean
    isNegative?:never
    isPositive?:never
}
type RandomNumberProps = PositiveNumber | NegativeNumber |zero
export const RandomNumber = (
    {
        value,isPositive,isNegative,isZero,
    }:RandomNumberProps
) => {
  return (
    <div>

       Value is {value} {isPositive && 'positive'} {isNegative && 'negative'} {''}
        {isZero && 'zero'}
    </div>
  )
}
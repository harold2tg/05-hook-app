import { memo } from "react"
export const Small = memo( ({value}) => {
    console.log('Me volvi dibujar :(')
  return (
    <small>{value}</small>
    
  )
})

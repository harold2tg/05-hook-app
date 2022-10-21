import React from "react"
export const Small = React.memo( ({value}) => {
    console.log('Me volvi dibujar :(')
  return (
    <small>{value}</small>
    
  )
})

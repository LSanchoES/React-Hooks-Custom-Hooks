import React, { memo } from 'react'

//Solo se renderizar√° si la properties cambian \\ React.memo funciona igual 

export const Small = memo (({value}) => {

    console.log('me volvi a llamar :(')

    return (

        
        <small>{value}</small>
    )
})

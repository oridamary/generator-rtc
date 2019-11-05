import React from 'react'
import { <%= component %>Types } from './types'
import useStyles from './styles'

export const <%= component %>: React.FC<<%= component %>Types> = props => {
    const classes = useStyles()
    return (
        <div>My new component</div>
    )
}


export default <%= component %>
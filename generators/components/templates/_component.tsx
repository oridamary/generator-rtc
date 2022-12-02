import React from 'react'
import { <%= component %>Types } from './types'
import useStyles from './styles'

// To include Prime React components / blocks:
// https://primefaces.org/primereact/setup/
//import { ComponentName } from 'primereact/ComponentName';

export const <%= component %>: React.FC<<%= component %>Types> = props => {
    const classes = useStyles()
    return (
        <div>My new component</div>
    )
}


export default <%= component %>
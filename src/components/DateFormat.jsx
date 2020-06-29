import React from 'react'
import moment from 'moment';

export const DateFormat = ({date}) => {
    const dateFormat = moment(date, "DD/MM/YYYY", true).locale("es")
    const resta = moment().locale("es")
    return <>Publicado hace {resta.from(dateFormat, true)}</>
}
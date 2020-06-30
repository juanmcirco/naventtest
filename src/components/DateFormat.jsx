import React from 'react'
import moment from 'moment'
import { css } from 'emotion'

export const DateFormat = ({date}) => {
    const dateFormat = moment(date, "DD/MM/YYYY", true).locale("es")
    const remainingDays = moment().locale("es")
    return <div className={dateStyle}><i className="icon-g icon-g-fecha-publicado"></i> Publicado hace {remainingDays.from(dateFormat, true)}</div>
}

const dateStyle = css({
    fontSize: '13px',
    paddingTop:'8px',
    color:'#333'
})
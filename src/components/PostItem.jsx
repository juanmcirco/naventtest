import React from 'react'
import {Pricebox} from './PriceBox'
import { Link } from 'react-router-dom'
import { DateFormat } from './DateFormat'


export const PostItem = (item) => {
    return <div>
        <Link to={item.posting_slug}>Contactar</Link>
        <img  src={item.posting_picture}/>
        <h1>{item.title}</h1>
        //componente
        <h3>{item.posting_location.address}, {item.posting_location.zone}, {item.posting_location.city}</h3>
        <h3>{item.publication_plan}</h3>
        <DateFormat date={item.publish_date}/>
        <p>{item.posting_description}</p>
        //componente
        <div>{item.operation_type.operation_type_id}</div>
        <div>{item.operation_type.operation_type_name}</div>
        <Pricebox prices={item.posting_prices}/>
    </div>
}

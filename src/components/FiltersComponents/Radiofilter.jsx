import React, { useContext } from 'react'
import Context from '../../context/StaticContext'

export const Radiofilter = () => {
    const { OriginalContext, setContextData} = useContext(Context)
    
    const filteredPost = (search) => {
        const filtrados = OriginalContext.filter(function(type) {
            return type.operation_type.operation_type_id === parseInt(search)
        })
        if(filtrados.length == 0 || !search){
            return OriginalContext
        }else{
            return filtrados
        }
    }
    
    const handleChange = (evt) => {
        setContextData(filteredPost(evt.target.value))
    }
    
    return <form >
        <div>{OriginalContext.map((radio, i) => 
            <div key={i}>
                <input
                    type="radio"
                    name="radioFilter"
                    onChange={handleChange}
                    value={radio.operation_type.operation_type_id}
                />
                <label htmlFor="radioFilter">{radio.operation_type.operation_type_name}</label>
            </div>)}
            <input
                    type="radio"
                    name="radioFilter"
                    onChange={handleChange}
                    value={null}
                />
                <label htmlFor="radioFilter">Todos</label>

        </div>
    </form> 
}
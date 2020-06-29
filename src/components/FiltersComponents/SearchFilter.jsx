import React, { useContext, useState } from 'react'
import Context from '../../context/StaticContext'

export const SearchFilter = () => {
    const { OriginalContext, setContextData} = useContext(Context)
    const [keyword, setKeyword] = useState("")
    
    const filteredPost = (search) => {
        const filtrados = OriginalContext.filter(function(adresses) {
            return adresses.posting_location.address.toLowerCase().includes(search.toLowerCase())
        })
        if(filtrados.length == 0 || !search){
            return OriginalContext
        }else{
            return filtrados
        }
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        setContextData(filteredPost(keyword))
    }
    
    const handleChange = (evt) => {
        setKeyword( evt.target.value )
        if(evt.target.value === ""){
            setContextData(OriginalContext)
        }
    }
    
    return <form onSubmit={handleSubmit}>
        <input
            placeholder="buscar por direccion.."
            type="text"
            onChange={handleChange}
            value={keyword}
        />
        <input type="button" onClick={handleSubmit} value="buscar"/>
    </form> 
}


import React, { useContext, useState } from 'react'
import Context from '../../context/StaticContext'
import { css } from 'emotion'
export const SearchFilter = () => {
    const { OriginalContext, setContextData} = useContext(Context)
    const [keyword, setKeyword] = useState("")
    const [hideFilter, setHide ] = useState(false)
    
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

    const handleClickHideFilter = ()=> {
        setHide(hideFilter?false:true)
    }
    
    return <div className={filterContainerStyle}>
        <div className={titleStyle} onClick={handleClickHideFilter}>
            <span>Dirección</span>
            <span><i class="material-icons">{!hideFilter ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i></span>
        </div>
        {!hideFilter &&
        <form onSubmit={handleSubmit} className={filterContainerStyleForm}>
            <input
                placeholder="buscar por direccion.."
                type="text"
                onChange={handleChange}
                value={keyword}
                className={searchBoxInput}
            />
            <button onClick={handleSubmit}><i className="material-icons">search</i></button>
        </form> }
    </div>
}

const titleStyle = css({
    fontWeight: 700,
    fontSize:'12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
})

const filterContainerStyle = css({
    'button':{ 
        height:'30px',
        verticalAlign: 'middle',
        background:'white',
        borderRadius:'4px',
        border:'1px solid #ccc',
        borderRadius:'4px',
        boxShadow:"0px 0px 4px -1px #ccc",
        margin: 5,
        ' & > i ': {
            color:'#4A96C2',
            fontSize: '16px',
            fontWeight:900
            
        }
    }
})

const filterContainerStyleForm = css({
    display:'flex',
    flexDirection:'row'
})

const searchBoxInput = css({
    flexGrow: 1,
    height: '26px',
    margin: '5px 0',
    fontSize: '12px',
    verticalAlign: 'middle',
    border:'1px solid #ccc',
    borderRadius:'4px',
    boxShadow:" 0px 0px 4px -1px #ccc",
    '::-webkit-input-placeholder':{
        fontSize: '12px'
    },
    
})
import React, { useContext, useState } from 'react'
import Context from '../../context/StaticContext'
import { css } from 'emotion' 

export const Radiofilter = () => {
    const { OriginalContext, CurrentContext, setContextData } = useContext(Context)
    const [hideFilter, setHide ] = useState(false)

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
    
    // const validateChecked = (pos) => {
    //     const validateCheckedPosition = CurrentContext.filter(function(type) {
    //         return type.operation_type.operation_type_id === parseInt(pos)
    //     })

    //     return validateCheckedPosition[0] ? validateCheckedPosition[0].operation_type.operation_type_id : false
    // }

    const handleChange = (evt) => {
        setContextData(filteredPost(evt.target.value))
    }

    const handleClickHideFilter = () => {
        setHide(hideFilter?false:true)
    }

    return <div className={filterContainerStyle}>
                <div className={titleStyle} onClick={handleClickHideFilter}>
                    <span>Tipo de operación</span>
                    <span><i class="material-icons">{!hideFilter ? "keyboard_arrow_up" : "keyboard_arrow_down"}</i></span>
                </div>
                {!hideFilter &&
                <form >
                    <div>{OriginalContext.map((radio, i) => 
                        <div key={i}>
                            <input
                                type="radio"
                                name="radioFilter"
                                onChange={handleChange}
                                value={radio.operation_type.operation_type_id}
                                //checked={validateChecked(radio.operation_type.operation_type_id)}
                            />
                            <label htmlFor="radioFilter">{radio.operation_type.operation_type_name}</label>
                        </div>)}
                        <input
                                type="radio"
                                name="radioFilter"
                                onChange={handleChange}
                                value={""}
                                checked={OriginalContext === CurrentContext}
                            />
                            <label htmlFor="radioFilter">Todos</label>

                    </div>
                    </form>}
        </div>
}

const titleStyle = css({
    fontWeight: 700,
    fontSize:'13px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
})

const filterContainerStyle = css({
    'input':{verticalAlign: 'middle'}, 
    'label':{ 
        fontSize: '12px',
        lineHeight: '24px',
        verticalAlign: 'middle'
    }
})
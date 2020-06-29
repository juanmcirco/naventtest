import React, {useState, useEffect} from 'react'
import {Pricebox} from './PriceBox'
import { DateFormat } from './DateFormat'
import { css } from 'emotion'
import Subscribe from './Subscribe'

export const PostItem = (item) => {
    const [fav, setFavs] = useState(JSON.parse(localStorage.getItem('favoriteItems'))||[])
    const handleHightlight = (value) =>{
        let destacado = ""
        switch (value) {
            case "SUPERHIGHLIGHTED":
                destacado="Super destacado"
                break;
            case "HIGHLIGHTED":
                destacado="Destacado"
                break;
            default:
                break;
        }
        return destacado
    }

    const handleFavorites = (posting_id) =>{
        const localFavorites = JSON.parse(localStorage.getItem('favoriteItems'))
        const favorites = posting_id
        if(!fav.includes(favorites)){
            setFavs(localFavorites.concat(favorites))
        }else{
            const posToDelete= localFavorites.findIndex(val => val === posting_id)
            const formatedFavorites = [...localFavorites]
            formatedFavorites.splice(posToDelete,1)
            setFavs(formatedFavorites)
        }
    }
    
    const validateFavorites = (posting_id) =>{
        if(!fav.includes(posting_id)){
            return true
        }else{
            return false
        }
    }

    useEffect(() => {
        localStorage.setItem('favoriteItems', JSON.stringify(fav))
      });

    return <div className={postContainerStyle(item.publication_plan)}>
        <div className={firstColumnStyle}>
            <div className={highlightedStyle}>
                <span>{handleHightlight(item.publication_plan)}</span>
                <div className={favoriteStyle} onClick={()=>handleFavorites(item.posting_id)}>
                    {validateFavorites(item.posting_id) ? <i className="material-icons">favorite_border</i> : <i className={`material-icons ${favoriteSelectedStyle}`}>favorite</i>}
                </div>
            </div>
            <div className={galleryStyle}><img src={item.posting_picture}/></div>
            <Pricebox prices={item.posting_prices}/>
        </div>
        <div className={detailContainerStyle}>
            <h4 className={titleStyle}>{item.title}</h4>
            <h4 className={subtitleStyle}>{item.posting_location.address}, {item.posting_location.zone}, {item.posting_location.city}</h4>
            <p>{item.posting_description}</p>
            <div className={miniFooterStyle}>
                <DateFormat date={item.publish_date}/>
                <Subscribe url="item.posting_slug"/>
            </div>
        </div>
    </div>
}

const firstColumnStyle = css({
    display:'block',
    position: 'relative',
    display:'flex',
    flexDirection:'column'
})

const galleryStyle =css({
    height:'180px',
    overflow: 'hidden'
})

const highlightedStyle = css({
    position: 'absolute',
    top: 0,
    width: '-webkit-fill-available',
    padding: '10px',
    fontSize: '13px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textShadow: '0 2px 4px rgba(0,0,0,.7)'
})

const favoriteStyle = css({
    cursor: 'pointer'
})

const postContainerStyle =(value)=> {
    let highlight= "#ccc"
    switch (value) {
        case "SUPERHIGHLIGHTED":
            highlight="#9371e0"
            break;
        case "HIGHLIGHTED":
            highlight="#31d1a1"
            break;
        default:
            break;
    }
    return css({
        border:'1px solid #ccc',
        borderTop: `4px solid ${highlight}`,
        borderRadius:'4px',
        boxShadow:" 0px 0px 4px -1px #ccc",
        background:"white",
        marginBottom: '10px',
        display: 'flex',
        flexDirection:'row',
    })
}

const detailContainerStyle = css({
    display:'flex',
    flexDirection:'column',
    margin: '4px 24px',
    'p':{
        flexGrow: 1,
        margin:0,
        fontSize:'14px',
        color:'#858585'
    }
}) 
const miniFooterStyle = css({
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    height: '40px',
    marginBottom:10,
    alignItems: 'center'
})

const titleStyle = css({
    color:'#58A0BF',
    margin:'10px 0',
    marginBottom:0
})
const subtitleStyle = css({
    margin:'10px 0',
    marginBottom:'30px',
    fontWeight:500,
    fontSize:'14px'
})

const favoriteSelectedStyle = css({
    color:"red"
})
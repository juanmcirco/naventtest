import React from 'react'
import { Posts } from './Posts'
import { FiltersContainer } from './FiltersComponents/FiltersContainer'
import { css } from 'emotion'

const Home = () => {
    return <>
        <h2 className={title}>Examen técnico para Navent</h2>
        <div className={homeStyle}>
            <FiltersContainer/>
            <Posts />
        </div>
    </>
}

const title = css({
    fontFamily: "'Roboto', sans-serif",
    margin: 'auto',
    textAlign: 'center',
    display:'block',
    paddingTop: '20px'
})

const homeStyle = css({
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '80vw',
    margin: 'auto',
    paddingTop: '20px',
    fontFamily: "'Roboto', sans-serif",
    '@media (max-width: 460px)' :{
        flexDirection: 'column',
        maxWidth: '100vw',
        paddingTop: '10px',
    }
})


export default Home
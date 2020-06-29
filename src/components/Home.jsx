import React from 'react'
import { Posts } from './Posts'
import { FiltersContainer } from './FiltersComponents/FiltersContainer'
import { css } from 'emotion'

function Home() {
    return <div className={homeStyle}>
        <FiltersContainer/>
        <Posts />
    </div>
}

const homeStyle = css({
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '80vw',
    margin: 'auto',
    paddingTop: '50px',
    fontFamily: "'Roboto', sans-serif"
})


export default Home
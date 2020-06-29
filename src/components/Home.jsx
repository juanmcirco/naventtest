import React from 'react'
import { Posts } from './Posts'
import { FiltersContainer } from './FiltersComponents/FiltersContainer'


function Home() {
    return <>
        <FiltersContainer/>
        <Posts />
    </>
}

export default Home
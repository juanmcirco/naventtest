import React, { useContext } from 'react'
import {PostItem} from './PostItem'
import Context from '../context/StaticContext'

export const Posts = ({}) => {
    const { CurrentContext } = useContext(Context)
    const Postings = CurrentContext

    return <>
        {Postings && Postings.map((post,i)=><PostItem {...post} key={i}/>)}
    </>
}

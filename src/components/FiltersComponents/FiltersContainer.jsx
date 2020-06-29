import React from 'react'
import { SearchFilter } from './SearchFilter'
import { Radiofilter } from './Radiofilter'
import { css } from 'emotion'
export const FiltersContainer = () => {
    return <div className={filtersContainerStyle}>
        <h4>Filtrado actual</h4>
        <SearchFilter />
        <Radiofilter />
    </div>
}

const filtersContainerStyle = css({
    background: 'white',
    border: '1px solid #E7E7E7',
    height:'max-content',
    minWidth: "230px",
    padding:'16px 24px',
    marginRight:'20px',
    '& > div, h4': {
        margin:'15px 0',
        paddingBottom:'10px',
        borderBottom: '1px solid #E7E7E7',
        ':last-child':{borderBottom: '0px solid #E7E7E7'}
    }
})
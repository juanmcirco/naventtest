import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { css } from 'emotion';

export const Pricebox = ({prices}) => {
    
    const currencyFormatter = (currency) =>{
        return currency === "ARS" ? "$": "U$S"
    }

    const translateCurrency = (total) =>{
        const formattedPrices = new Intl.NumberFormat("de-DE", {minimumFractionDigits:0}).format(parseInt(total.amount))
        return `${currencyFormatter(total.currency)} ${formattedPrices}`
    }

    return(
        <div className={priceboxContainerStyle}>
            {prices.map((price, i)=> 
                <div key={i} className={priceBoxStyle}>
                    <div className={principalPrice}>
                        {translateCurrency(price.price)}
                    </div>
                    <div className={extraCostPrice}>
                        {price.expenses && `+ ${translateCurrency(price.expenses)} expensas`} 
                    </div>
                </div>
            )}
        </div>
    )
} 

const priceboxContainerStyle = css({
    margin:'10px 0',
    borderRight: '1px solid #ccc',
    flexGrow: 1
})

const priceBoxStyle = css({
    margin:'0px 10px'
})

const principalPrice = css({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '23px',
    fontWeight:600,
    color: '#333'
})

const extraCostPrice = css({
    fontSize: '14px',
    fontWeight: 400,
    color:' #4d4d4d',
    marginTop: '4px',
    marginLeft: '2px'
})

import React from 'react';
import CurrencyFormat from 'react-currency-format';

export const Pricebox = ({prices}) => {
    
    const currencyFormatter = (currency) =>{
        return currency === "ARS" ? "$": "U$S"
    }

    const translateCurrency = (total) =>{
        const formattedPrices = new Intl.NumberFormat("de-DE", {minimumFractionDigits:0}).format(parseInt(total.amount))
        return `${currencyFormatter(total.currency)} ${formattedPrices}`
    }

    return(
        <div>
            {prices.map((price, i)=> 
                <div key={i}>
                    <div >{price.operation_type}</div>
                    {translateCurrency(price.price)}
                    {price.expenses &&
                        translateCurrency(price.expenses)
                    }
                </div>
            )}
        </div>
    )
} 

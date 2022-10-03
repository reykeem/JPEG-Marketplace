import React, { useState } from 'react'
import "../styles/exchange.css"

function Exchange() {
  const [priceOfEth, setPriceOfEth] = useState(0);
  const [amtUSD, setAmtUSD] = useState(0);

  let amtEth = 0;
    
  // fetch from crypto api to get price of eth
  const fetchAndConvert = (usd) => {
      fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eth.json")
        .then((res) => res.json())
        .then(data => {
            setPriceOfEth(Number(data.eth.usd))
            return Number(usd / ethPrice);
        })
  }

  const handleOnChange = (e) => {
    setAmtUSD(e.target.value)
    fetchAndConvert(amtUSD);
  }

  const handleExchange = () => {
    console.log(amtEth);
    // patch req to the backend
    // fetch("/api/", {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       nft_id: nft_id,
    //       // user_id: user_id,     dont need unless caught in cookies
    //     }),
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8"
    //     }
    //   })
    //   .then(res => res.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch(err => console.log(err))
  }

  // Assigned within component to have access in render
  amtEth = amtUSD / priceOfEth;


  return (
    <div className='exchange'>
      <h1>Add Funds to Wallet</h1>
      <div className='conversion'>
        <span>Amount</span>
        <label htmlFor='usd'>USD</label>
        <input id="usd" type="text" value={amtUSD} onChange={handleOnChange}/>
        <label htmlFor='ethereum'>ETH</label>
        <input id="ethereum" type="text" value={amtEth || 0}/>
        <button onClick={handleExchange}>Convert</button>
      </div>
    </div>
  )
}

export default Exchange;
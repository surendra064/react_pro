import React from 'react'

function InputBox({label,
    amount,amountdisabled,
    onamountchange,currencyoptions,selectedcurrency,
    oncurrencychange}
) {
    // console.log(currencyoptions);
    
  return (
   <div className='bg-white p-3 rounded-lg text-sm flex'>
    <div className='w-1-2'>
    <label className='text-black/40 mb-2 inline-block'>{label}</label>
    <input type="number" className='outline-none w-full bg-transparent
py-1.5'
placeholder='0'
disabled={amountdisabled}
value={amount}
onChange={(e)=>(onamountchange && onamountchange(Number(e.target.value)))} 
/>
</div>
<div className='w-1/2 flex flex-wrap justify-end text-right'>
<p className="text-black/40 mb-2 w-full">Currency Type</p>
<select className='rounded-lg px-1 py-1 Ibg-gray-100 cursor-pointer outline-none' value={selectedcurrency}
onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}>
    {currencyoptions.map((currency)=>(
        <option value={currency}>{currency}</option>
    ))}
</select>
</div>
   </div>
  )
}

export default InputBox
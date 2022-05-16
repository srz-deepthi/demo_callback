import React from 'react'

const minusButton = (props) => {
  const getFun= () =>{
    props.counter(props.count-1)
  }
  return (
    <div>
      <button onClick={getFun}>-</button>Minus
    </div>
  )
}

export default minusButton
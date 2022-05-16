import React from 'react'

const plusButton = (props) => {

  const getFun= () =>{
    props.counter(props.count+1)
  }
  return (
    <div>
        <button onClick={getFun}>+</button>
        plus
    </div>
  )
}

export default plusButton
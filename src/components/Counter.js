import React from 'react'

function Counter({title,...obj}) {
  return (
    <h2>{title}: {obj.count}</h2>
  )
}

export default Counter
import React from 'react'

function FancyButton({ callback, text }) {
  return (
    <div className="p-4">
      <div className="btn btn-one" onClick={callback}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default FancyButton

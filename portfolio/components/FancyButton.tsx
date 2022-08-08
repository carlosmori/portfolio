import React from 'react'

function FancyButton({ callback, text }) {
  return (
    <div className="p-4">
      <button
        type="button"
        name="Hover"
        onClick={callback}
        className={'text-lg font-thin hover:font-light'}
      >
        {text}
      </button>
    </div>
  )
}

export default FancyButton

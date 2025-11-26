import React from 'react'

const AdPlaceholder = ({ slotId, width = 300, height = 250 }) => {
  return (
    <div 
      className="border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 text-sm"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <div>Ad Unit: {slotId}</div>
        <div>{width} × {height}</div>
      </div>
    </div>
  )
}

export default AdPlaceholder
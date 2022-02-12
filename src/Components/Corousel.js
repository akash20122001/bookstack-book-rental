import React from 'react'

function Corousel() {
  return (
    <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <img src="https://source.unsplash.com/1600x400/?book" className="w-full" />
        </div>
        <div id="item2" className="w-full  carousel-item">
          <img src="https://source.unsplash.com/1600x400/?study" className="w-full" />
        </div>
        <div id="item3" className="w-full carousel-item">
          <img src="https://source.unsplash.com/1600x400/?book" className="w-full" />
        </div>
        <div id="item4" className="w-full carousel-item">
          <img src="https://source.unsplash.com/1600x400/?student" className="w-full" />
        </div>
      </div>
  )
}

export default Corousel
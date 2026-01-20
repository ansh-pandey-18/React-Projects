import React from 'react'

function Card({username="AP", designation="human"}) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden border m-5">
      
      <img 
        src="https://images.jdmagicbox.com/quickquotes/images_main/greeting-cards-size-14-x-11-cm-2221301676-yqph0ewt.jpg" 
        alt="Card Photo"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          A Card for Photos
        </h1>

        <p className="text-sm text-gray-600">
          Hello! Here is your card by {username}, who is a {designation}.
        </p>
      </div>

    </div>
  )
}


export default Card 
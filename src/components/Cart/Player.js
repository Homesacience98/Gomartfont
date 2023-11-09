import React from 'react'
import { useSelector } from 'react-redux'

function Player() {

    const playerObj= useSelector(store=>store.playerReducer)
  return (
    <div>
      
      <h1>  the player is {playerObj.name} {playerObj.age} </h1>
    </div>
  )
}

export default Player

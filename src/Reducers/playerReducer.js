// import React from 'react'
 const initialData ={
    name: 'Ronaldo',
    age: 25

 }

function playerReducer(state= initialData , action) {

    switch(action.type) {

        case 'PLAYER': return{
            ...state,

            name: state.name= action.payload
        }
        default:{
            return state
        }

}
}

export default playerReducer

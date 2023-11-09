import { combineReducers } from 'redux'

import countReducer from './countReducer'
import playerReducer from './playerReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
 countReducer : countReducer,
 playerReducer : playerReducer,
 cartReducer : cartReducer

})

export default rootReducer

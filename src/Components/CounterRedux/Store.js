import {legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import CountReducer from './CounterReducer'

const Store = createStore(CountReducer,composeWithDevTools())

export default Store
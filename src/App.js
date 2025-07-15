import React from 'react'
import CountContainer from './Components/Counters/CountContainer'
import {Provider} from 'react-redux'
import Store from './Components/CounterRedux/Store'

const App = () => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center' >
      
      <Provider store={Store} >
          <CountContainer/>
      </Provider>
    </div>
  )
}

export default App

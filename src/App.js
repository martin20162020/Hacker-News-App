
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/app.css'
import Header from './components/Header'
import Routes from './components/Routes'

const dotenv = require('dotenv').config()


function App() {
return (
    <Provider store={store}>
      <div>
        <Header/>
        <Routes/>
      <main className="main">
      </main>
      </div>
    </Provider>
    );
}

export default App;

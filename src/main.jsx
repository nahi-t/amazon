import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Dataprovider} from './Component/Dataprovider/Dataprovider.jsx'
import {initialstate,reducer} from './Utility/reducer.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider reducer={reducer} initialstate={initialstate}>
    <App />
    </Dataprovider>
   
  </StrictMode>,
)

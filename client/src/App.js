import './App.css'
import GatosDetails from './pages/GatosDetails.js/GatosDetails';
import GatosPage from './pages/GatosPage/GatosPage';
import IndexPage from './pages/IndexPage/IndexPage';
import {Routes,Route} from 'react-router-dom'



function App() {
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/galeria" element={<GatosPage/>}/>
          <Route path="/detalles/:_id" element={<GatosDetails/>}/>
      </Routes>
   
    </div>
  )
}

export default App;
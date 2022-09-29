import { useState } from "react"
import { Link } from "react-router-dom"
import  './GatosPage.css'

const GatosPage = () => {

    const [gatos,setGatos]=useState([])
    const loadGatos =()=>{
        fetch('http://localhost:5000/api/gatos')
        .then(res=>res.json())
        .then(todosGatos=>setGatos(todosGatos))
    }
    loadGatos()

    return (
        <main>
        <h1>Listado de Razas de Gatos</h1>
        <hr />
        {gatos.map(eachGatos => {
            return (
                 <Link to={`/detalles/${eachGatos._id}`}>
                    <article className='gatos-card'>
                        <img src={eachGatos.imageUrl}></img>
                        <h3>{eachGatos.title}</h3>
                    </article>
                </Link>    
            )
        })}
        <Link to="/">Ir al inicio</Link>
    </main>
    )
}

export default GatosPage
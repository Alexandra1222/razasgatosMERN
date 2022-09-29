import { useParams } from "react-router-dom"
import { useState } from "react"
const GatosDetails = () => {
    const {_id}=useParams()
    const[gatos,setGatos]=useState([])

    const cargaDetalleDeGatos=()=>{
        fetch(`http://localhost:5000/api/details/${_id}`)
        .then(response=>response.json())
        .then(gatos=>setGatos(gatos))
    }
    cargaDetalleDeGatos()
    return (
        <main >
            <h1>Este es el detalle del {gatos.title}</h1>
            <hr />
            <img src={gatos.imageUrl}/>
            <h2>Caracteristicas</h2>
            <p>{gatos.caracteristicas}</p>
            
        </main>
    )
}

export default GatosDetails
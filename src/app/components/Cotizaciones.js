"use client";


import Transportista from "./Tranportista";
import Envio from "./Envio";
import Pago from "./Pago"
import ejemplo from "../data/ejemplo.json";
import { useEffect, useState } from "react";
export default function Cotizaciones() {
    const [datos, setDatos] = useState([]);
    useEffect(()=>{
        setDatos(ejemplo);
    },[])

    return (
        <div className="flex flex-col w-3/4 rounded-lg  border border-pink-400  justify-between     items-center gap-5">
            <Transportista nombre={datos[0]?.nombre} calificacion={datos[0]?.calificacion} />

            <div className="flex border border-pink-400  rounded-lg h-60 justify-center items-center w-3/4 gap-2 ">
                
                <p className="text-pink-600 text-7xl font-bold">$ {datos[0]?.importe}</p>
            </div>
            
            <Envio fecha_retiro={datos[0]?.fecha_retiro} fecha_entrega={datos[0]?.fecha_entrega}/>

        
            <Pago/>

        </div>
    );
}

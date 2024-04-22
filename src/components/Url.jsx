import { useState } from "react";
import QRCode from "qrcode";
import CodigoQR from "./CodigoQR";
import logoFondo from "../app/resource/bg-illustration.svg";
import logoQrCode from "../app/resource/logo-qr-generator.svg";

export default function Url(props){

    const [ texto, setTexto ] = useState("");
    const [ src, setSrc ] = useState("");
    const [ mostrar, setMostrar ] = useState(false);
    const [ error, setError ] = useState(false);
    
    const generarQR = ()=>{
      if(texto.length > 4){
         QRCode.toDataURL(`${texto}`).then(setSrc);
         mostrar ? setMostrar(false) : setMostrar(true);
         setError(false);
      } else{
        setError(true);
      }
    }

    const mostrarCodigo = ()=>{
        mostrar ? setMostrar(false) : setMostrar(true);
      }

    return(
        <div>
            {
                !mostrar ?
            <div className="z-50">
            <div className="bg-black p-2 py-2 rounded-2xl border-2 azulMedioBorder z-10 flex">
            <input 
            type="text"
            className="p-1 md:p-2 rounded-md md:w-96 bg-black text-white outline-none"
            placeholder="Escribe tu url"
            onChange={(e)=> setTexto(e.target.value)}/>
          <button className="ml-0 md:ml-4 text-white rounded-md azulMedioBg px-2 md:px-6 py-2 md:py-3 cursor-pointer" onClick={generarQR}>Generar</button>
          </div>
          {
            error && <p className="text-white text-center mt-4">El campo no puede estar vacío</p>
          }    
        </div>
        :
        <CodigoQR src={src} mostrarCodigo={mostrarCodigo}/>

            }
        </div>
    )
}
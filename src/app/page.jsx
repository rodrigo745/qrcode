"use client"
import Image from "next/image";
import { useState } from "react";
import QRCode from "qrcode";
import logoFondo from "./resource/bg-illustration.svg";
import logoQrCode from "./resource/logo-qr-generator.svg";

export default function Home() {

  const [ texto, setTexto ] = useState();
  const [ src, setSrc ] = useState("");
  const [ mostrar, setMostrar ] = useState(false);

  const generarQR = ()=>{
    QRCode.toDataURL(`${texto}`).then(setSrc);
    mostrar ? setMostrar(false) : setMostrar(true);
  }
  const mostrarCodigo = ()=>{
    mostrar ? setMostrar(false) : setMostrar(true);
  }

  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center">
      <Image alt="Logo de fondo" src={logoFondo} width={500} height={500} className="z-0 absolute md:top-30 min-w-96 right-0 md:right-40 scale-75 md:scale-125" />
      <Image alt="Logo de QR" src={logoQrCode} width={200} height={200} className="z-50 mb-10 scale-100 md:scale-125" />
      {
        mostrar ?
        <div className="z-50 rounded-3xl">
          <div className="z-50 azulClaroBg p-10 rounded-full scale-75 md:scale-100">
            <Image alt="code" width={300} height={300} src={src} className="z-50 rounded-3xl"/>
          </div>
          <div className="z-50 flex justify-between text-lg text-white mt-2 md:mt-10 mx-8 md:mx-0">
            <button className="z-50 azulMedioBg w-28 md:w-32 py-2 rounded-lg">Compartir</button>
            <button onClick={mostrarCodigo} className="z-50 azulMedioBg w-28 md:w-32 py-2 rounded-lg">Volver</button>
          </div>
        </div>
        :
        <div className="z-50">
          <div className="bg-black p-2 py-2 rounded-2xl border-2 azulMedioBorder z-10 flex">
            <input 
            type="text"
            className="p-1 md:p-2 rounded-md md:w-96 bg-black text-white outline-none"
            placeholder="Escribe tu url"
            onChange={(e)=> setTexto(e.target.value)}/>
          <button className="ml-0 md:ml-4 text-white rounded-md azulMedioBg px-2 md:px-6 py-2 md:py-3 cursor-pointer" onClick={generarQR}>Generar</button>
          </div>
        </div>
        
      }
      
    </main>
  );
}
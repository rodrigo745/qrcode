"use client"
import Image from "next/image";
import logoFondo from "./resource/bg-illustration.svg";
import logoQrCode from "./resource/logo-qr-generator.svg";
import { useState } from "react";

// Componentes
import Url from "../components/Url";

export default function Home() {

  const btnActiveStyle =  "bg-blue-600 rounded-md w-full";
  const [ btnActive1, setBtnActive1 ] = useState();
  const [ btnActive2, setBtnActive2 ] = useState();
  const [ btnActive3, setBtnActive3 ] = useState();


  const showBtnActive = (e)=>{
    let bandera = "";
    switch(e.target.id){
      case "1": 
        setBtnActive1(btnActiveStyle); 
        setBtnActive2("w-full");
        setBtnActive3("w-full");
        break;
      case "2": 
        setBtnActive1("w-full"); 
        setBtnActive2(btnActiveStyle);
        setBtnActive3("w-full");
        break;
      case "3": 
        setBtnActive1("w-full"); 
        setBtnActive2("w-full");
        setBtnActive3(btnActiveStyle);
        break;
    }
    // if(e.target.id != bandera){
    //   setBtnActive("");
    // }
  }

  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center">
      <Image alt="Logo de fondo" src={logoFondo} width={500} height={500} className="z-0 absolute md:top-30 min-w-96 right-0 md:right-40 scale-75 md:scale-125" />
      <Image alt="Logo de QR" src={logoQrCode} width={200} height={200} className="z-50 mb-10 scale-100 md:scale-125" />
      <div className="z-50 ">
        <div className="grid border border-blue-600 rounded-lg p-1 grid-cols-3 divide-x divide-blue-600 text-center text-white mb-6">
          <div className="px-2"><button onClick={showBtnActive} id="1" className={btnActive1}>Url</button></div>
          <div className="px-2"><button onClick={showBtnActive} id="2" className={btnActive2}>Contacto</button></div>
          <div className="px-2"><button onClick={showBtnActive} id="3" className={btnActive3}>Ubicación</button></div>

        </div>        

        <Url/>
      
      </div>
      
    </main>
  );
}
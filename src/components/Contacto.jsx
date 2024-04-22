import { useState } from "react";
import QRCode from "qrcode";
import CodigoQR from "./CodigoQR";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [src, setSrc] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const generarQR = (e) => {
    const contacto = `BEGIN:VCARD\nVERSION:3.0\nFN:${nombre}\nTEL;TYPE=WORK,VOICE:${telefono}\nEMAIL:${correo}\nEND:VCARD`;

    if (nombre.length >= 2 && telefono.length > 7) {
      QRCode.toDataURL(`${contacto}`).then(setSrc);
      mostrar ? setMostrar(false) : setMostrar(true);
      setError(false);
      if(e){
  
          setNombre("");
          setTelefono("");
          setCorreo("");
      }
    } else {
      setError(true);
    }
  };

  const mostrarCodigo = () => {
    mostrar ? setMostrar(false) : setMostrar(true);
  };

  return (
    <div>
      {!mostrar ? (
        <div>
          <div className=" z-10 flex flex-col">
            <input
              type="text"
              className={inputStyle}
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              className={inputStyle}
              placeholder="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              type="text"
              className={inputStyle}
              placeholder="Correo (Opcional)"
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <button
            className="text-white w-full rounded-md azulMedioBg mt-2 py-2 md:py-3 cursor-pointer"
            onClick={generarQR}
          >
            Generar
          </button>
          {
            error && <p className="text-white text-center mt-4">El campo no puede estar vacío</p>
          } 
        </div>
      ) : (
        <CodigoQR src={src} mostrarCodigo={mostrarCodigo} />
      )}
    </div>
  );
}

const inputStyle =
  "py-3 px-4 border-2 azulMedioBorder p-1 md:p-2 rounded-md md:w-96 bg-black text-white outline-none mb-4";

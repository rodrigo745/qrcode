import Image from "next/image";

export default function CodigoQR(props) {

  return (
    <div>
      <div className="z-50 rounded-3xl">
        <div className="z-50 azulClaroBg p-10 rounded-full scale-75 md:scale-100">
          <Image
            alt="code"
            width={300}
            height={300}
            src={props.src}
            className="z-50 rounded-3xl"
          />
        </div>
        <div className="z-50 flex justify-between text-lg text-white mt-2 md:mt-10 mx-8 md:mx-0">
          <button className="z-50 azulMedioBg w-28 md:w-32 py-2 rounded-lg">
            Guardar
          </button>
          <button
            onClick={props.mostrarCodigo}
            className="z-50 azulMedioBg w-28 md:w-32 py-2 rounded-lg"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

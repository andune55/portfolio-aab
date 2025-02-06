import { CVItem } from "../types"

type CardProps = {
    item: CVItem
}

export default function Card({item}: CardProps){

    return(
        
        <div className="mx-auto border-l-6 border-l-neutral-200 mb-6 mr-9 rounded-lg bg-white shadow-lg shadow-black/20 justify-center">
          <p className="p-2 text-amber-600"><strong>{item.titulo}</strong></p>
          <div className="card overflow-visible p-2 shadow-4-strong">
            <div className="card-body">
              <img className="radius-shape-aab w-[95%]" src={`./img/${item.foto}`} alt="Imagen libélula dragón" />
            </div>
          </div>         
          {(item.textoBoton)? 
          <button className="mt-2.5 mb-6.25 bg-amber-900 rotate-1 opacity-75 hover:rotate-3 transition duration-250 hover:scale-110 text-white py-1.5 px-2 block cursor-pointer rounded-md">{item.textoBoton}</button>  
          : ''}     
          

        {/*<p className="p-1.5">{item.descripcion}</p>*/
        }

      </div>
        
    )
}
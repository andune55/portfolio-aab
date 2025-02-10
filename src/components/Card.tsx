import { CVItem } from "../types"

type CardProps = {
  item: CVItem,
  openModal: (item: CVItem) => void,
  closeModal: () => void
}

export default function Card({item,openModal}:CardProps){
    
    return(
        <>
        <div className="w-[70%] mx-auto border-l-6 border-l-neutral-200 rounded-lg bg-white shadow-lg shadow-black/20 place-self-auto">
          <p className="p-2 text-amber-600"><strong>{item.titulo}</strong></p>
          <div className="card overflow-visible p-2 shadow-4-strong">
            <div className="card-body">
              <img className="radius-shape-aab w-[95%]" src={`./img/${item.foto}`} alt={`${item.altFoto}`} />
            </div>
          </div>         
          {(item.textoBoton)? 
          <button 
            className="mx-auto mt-2.5 mb-6.25 bg-amber-900 rotate-1 opacity-75 hover:rotate-3 transition duration-250 hover:scale-110 text-white py-1.5 px-2 block cursor-pointer rounded-md"
            onClick={() => openModal(item)}
            >
              {item.textoBoton}</button>  
          : ''}          
      </div>  

      
      
    </>

      
    )
}
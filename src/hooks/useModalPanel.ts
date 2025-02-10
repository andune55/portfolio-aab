import { CVItem } from "../types"

export const useModalPanel = () => {

  const fotos = ['photo01.jpg','photo02.jpg','photo03.jpg','photo04.jpg','photo05.jpg','photo06.jpg','photo07.jpg','photo08.jpg','photo09.jpg','photo10.jpg','photo33.jpg','photo_11.jpg','photo_12.jpg','photo_13.jpg','photo_14.jpg','photo_15.jpg','photo_16.jpg','photo_17.jpg','photo_18.jpg','photo_19.jpg','photo_20.jpg','photo_21.jpg','photo_22.jpg','photo_23.jpg','photo_24.jpg','photo_25.jpg','photo_26.jpg','photo_27.jpg','photo_28.jpg','photo_29.jpg','photo_30.jpg','photo_31.jpg','photo_32.jpg']

  const fotosCompleta = fotos.map(foto=>(             
    `<div class="img-gallery-item md:mx-1.5">
      <figure class="rounded-sm">
        <img class="max-w-3xs" src="./img/fotografias/${foto}" alt="${foto}" loading="lazy" />        
      </figure>
      <figcaption class="mb-1 text-center text-gray-500">Recopilando Info</figcaption>
    </div>`     
  ))

  const openModal = (item: CVItem) => {
    console.log(item)
    document.querySelector('#ModalPanel')?.classList.add('open')
    document.querySelector('#ModalPanel-overlay')?.classList.add('open')
    document.querySelector('.modal-content')!.innerHTML = `
      <p class="font-bold">${item.titulo}</p>     
      <p class="mb-1.5">${item.descripcion}</p>  
      
      ${
        (!item.masFotos) ? 
          `<img class="rounded-sm w-[98%]" src="./img/${item.foto}" alt="${item.altFoto}" loading="lazy"/>`
        :          
          `<div class="img-gallery">              
                ${fotosCompleta.join('')}   
          </div>`
          //`<div class="flex flex-wrap">`
          // + fotos.map(foto=>( 
          //    `<img class="w-[auto] max-w-3xs shrink-0 height-[fit-content] mx-1.25 my-1.25" src="./img/fotografias/${foto}" />`          
          //   ))
          // +
          //`</div>`  
          
      }      
    `
  }
  const closeModal = () =>{
    document.querySelector('#ModalPanel')?.classList.remove('open')
    document.querySelector('#ModalPanel-overlay')?.classList.remove('open')
    document.querySelector('.modal-content')!.innerHTML = ""
  }

  return{
    openModal,
    closeModal
  }
}




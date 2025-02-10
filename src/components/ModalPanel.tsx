type CardProps = {
  closeModal: () => void
}

export default function ModalPanel({closeModal}:CardProps) {    

  return (
    <>
    <div id="ModalPanel" className="modal-object">
        <div className="flex justify-between items-start">
            <div id="ModalPanel-component" className="modal-content"> 
            </div>        
            <button 
                className="bg-gray-400 h-8 w-8 rounded-full text-white cursor-pointer text-[16px] shrink-0"
                onClick={() => closeModal()}
            >X</button>       
        </div>
    </div>   
    <div id="ModalPanel-overlay" className="modal-overlay" onClick={() => closeModal()}></div>
    </>
  )
}

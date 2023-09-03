type Props = {
    open: any,
    onClose: any,
    children: any,
  

  };
const Modalc = ({ open, onClose, children, }: Props) => {
   
    return(
        <div 
        onClick={(e)=> e.stopPropagation()}
        className={`fixed inset-0 justify-center items-center  
                ${open ? "visible bg-black/50" : "invisible"}`}>

                     <div className={ `ml-5 mr-5 md:mx-auto md:w-[35%] md:mt-[10%] w-[90%] mt-[20%] text-black bg-white  shadow p-6 transition-all ${open ? "scale-100" : "scale-125 opacity-0"}`}>
                        <button 
                        onClick={onClose}
                        className="absolute top-2 right-2 p-1 rounded-lg text-red bg-white hover::bg-green hover:text-darker-gray">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                           </svg>
                       
                        </button>
                          {children}
                   </div>
                
                    </div>
    )
}

export default Modalc 
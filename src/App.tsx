import { cvitem } from './data/cv'
import { trabajos } from './data/trabajos'

import Card from './components/Card'
import InfoPersonal from './components/InfoPersonal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './components/Accordion'

/*import { Fotografias } from './components/Fotografias'*/

 

function App() {

  //const [visor, setVisor] = useState([])

  function changeIcon( item: {}){
    console.log(item)
  }
 
 
  return (
    <>

      {/* <header className="bg-blue-400 py-[50px]"> */}
      <header className="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 py-[50px]">
        <h1 className="text-center text-4xl font-[Dancing_Script] text-amber-50 lg">Portfolio Agustín Aguilera Beltrán</h1>

      </header>



      <div className="container mx-auto my-5 px-4 max-w-screen-xl">
        <InfoPersonal />
      </div>
      


{//Algunos trabajos realizados
}   
      <h3 className="container mx-auto flex items-center font-[Livvic] text-xl/12 text-red-900 bg-linear-45 from-white via-red-100 to-red-200 rounded-tr-xl">
        <svg className="animate-pulse w-7 h-7 mr-2.5 text-red-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={(e) => changeIcon(e)}>
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
        </svg>
        Algunos trabajos realizados         
      </h3>

      <div className="container mx-auto mb-10 md:pt-4.5 md:pr-4 md:shrink-0 pl-0 pb-3 border-b-2 border-b-slate-300 border-r-1 border-r-red-200 rounded-b-xl" > 
        <Accordion>
            {
              trabajos.map( item => (
                
                <AccordionItem 
                  key = {item.id}
                  id = {item.id}
                  >
                  <AccordionTrigger>                      
                        {item.title}                
                  </AccordionTrigger>
                  <AccordionContent>
                    <div id="bloque1" className="bloque-desplegable">
                      {(item.description)?<p className="font-bold mb-3.75">{item.description}</p>:''}

                      {(item.id==="1")? 

                        <>
                        <ul className="mx-5 my-4">                            
                            <li className="list-disc">Creación íntegra de los distintos módulos a emplear y testeo en más de 100 clientes de correo para asegurar la correcta renderización tanto en light como en dark mode. Usando las recomendaciones actuales de accesibilidad y anti-spam, procurando estar al día en cuanto a novedades, técnicas y recomendaciones.</li>
                            <li className="list-disc">Construcción de plantillas velocity .vm para envíos masivos a clientes mediante centro de notificaciones propio.</li>
                            <li className="list-disc">Construcción de plantillas .html para para envíos masivos a clientes madiante gestor de campañas Adobe Campaign.</li>
                        </ul>                 

                        <img className="shadow-xl" src="./img/plantilla-email.webp" alt="imagen plantilla email" loading='lazy' />
                        {/* <img className="ml-6 rotate-x-14 rotate-z-359 transform-3d shadow-xl" src="./public/img/plantilla-email.webp" alt="" loading='lazy'/> */}

                        <ul className="mx-5 my-4">
                            <li className="list-disc"><strong>En los siguientes ejemplos</strong> se usa la plantilla modular para construir, con html y código velocity con variables, distintas campañas de envío masivo a clientes para su lanzamiento a través de Adobe Campaign y/o centro de notificaciones propio de la empresa.</li>
                        </ul>        
                        <div className="grid grid-cols-4 gap-4 mt-2"> 
                            <div className="perspective-distant">
                            <article>
                                <div className="overflow-y-auto scrollbar w-full max-h-100 text-center">
                                <strong>Email01</strong>
                                <img src="./img/email01.webp" alt="imagen email" loading='lazy'/>                                
                                </div>
                            </article>
                            </div>
                            
                            <div className="perspective-distant">
                            <article>
                            <div className="overflow-y-auto scrollbar w-full max-h-100 text-center">
                                <strong>Email02</strong>
                                <img src="./img/email02.webp" alt="imagen email" loading='lazy'/>
                            </div>  
                            </article>
                            </div>
        
                            <div className="perspective-distant">
                            <article>
                                <div className="overflow-y-auto scrollbar w-full max-h-100 text-center">
                                <strong>Email03</strong>
                                <img src="./img/email03.webp" alt="imagen email" loading='lazy'/>            
                                </div>
                            </article>
                            </div>

                            <div className="perspective-distant">
                            <article>
                                <div className="overflow-y-auto scrollbar w-full max-h-100 text-center">
                                <strong>Email04</strong>
                                <img src="./img/email05.webp" alt="imagen email" loading='lazy'/>            
                                </div>
                            </article>
                            </div>
                        </div>                        
                        </>:
                      ''} 

                      {(item.id==="2")?                                             
                        <>
                          <img className="shadow-xl" src="./img/cotizadores-sitios-web-aseguradora.webp" alt="imagen cotizadores" loading='lazy'/>
                          <img className="shadow-xl" src="./img/colaboradores-externos.webp" alt="imagen colaboradores" loading='lazy'/>
                        </>:
                      ''} 

                      {(item.id==="3")?                                             
                        <>
                          <p className="mb-3 text-center">Creación y documentación de <strong>componentes personalizados para cotizadores y área de clientes</strong> de aseguradora nacional, trabajando con varios departamentos como Arquitectura negocio, Transformación digital, Desarrollo Internet, haciendo uso de metodologías agile.</p>
                          <img className="shadow-xl" src="./img/componentes.webp" alt="imagen componentes" loading='lazy'/>
                        </>:
                      ''} 

                      {(item.id==="4")?                                             
                        <>
                          <p className="mb-3 text-center"><strong>Participación en el desarrollo y maquetación de la App Live Chat para clientes:</strong> maquetación junto al equipo de desarrollo y distintos departamentos, de las jsp con COMPONENTES JSF, CSS y JS de las distintas aplicaciones de la Intranet y páginas de colaboradores externos de empresa de seguros y sus marcas; <strong>apertura de partes, gestión de siniestros, lesionados, contabilidad, comunicación, marketing, partners,...</strong>:</p>
                          <img className="shadow-xl" src="./img/web-intranet.webp" alt="imagen intranet" loading='lazy'/>

                          <p className="font-bold mb-3 text-center">Participación en el desarrollo y maquetación de la App Live Chat para clientes.</p>
                          <img className="shadow-xl" src="./img/web-chat.webp" alt="imagen livechat" loading='lazy'/>
                        </>:
                      ''} 

                      {(item.id==="5")?                                             
                        <>
                        <ul className="mx-5 my-4">
                          <li className="list-disc">Continua comunicación con responsable de economía parroquial y persona de contacto de la entidad bancaria</li>
                          <li className="list-disc">Diseño de la interfaz de donaciones (HTML responsive, CSS, PHP, JS)</li>
                          <li className="list-disc">Estudio e Integración con PHP de la pasarela de pagos con la web parroquial</li>
                          <li className="list-disc">Testeo y puesta en producción</li>
                        </ul>
                        <img className="shadow-xl" src="./img/integracion-tpv.webp" alt="" loading='lazy'/>
                        </>:
                      ''} 

                      {(item.id==="6")?                                             
                        <>
                        <p className="mb-3 text-center">Desde 2002 elaboración íntegra de más de 50 webs para pymes de Madrid, Barcelona y Valencia, <strong>acompañando en el proceso comercial de venta y asesoramiento</strong>. Además de la construcción con HTML, CSS, JS y Flash, contacto <strong>continuo con los clientes para mantenimiento periódico de las webs</strong>.</p>
                        <div className="flex mb-3.75">                       
                         <div>
                           <p className="font-bold mb-3">Elaboración íntegra de web para gabinete de psicología:</p>
                           <img className="shadow-xl" src="./img/web-edac.webp" alt="web gabinete psicología" loading='lazy'/>
                         </div>
                         <div>
                           <p className="mb-3 "><strong>Elaboración íntegra de web parroquial:</strong> Responsive HTML, mobile first, CSS, PHP, JS, SEO. Buscador propio usando fuse, galerías de imágenes con php, páginas internas, documentación y mantenimientos, calendario litúrgico perpetuo, lecturas diarias perpetuas,...</p>
                           <img className="shadow-xl" src="./img/web-parroquial.webp" alt="web gabinete psicología" loading='lazy'/>
                         </div>
                        </div>
                        </>:
                      ''} 

                      {(item.id==="7")?                                             
                        <>
                         <img className="shadow-xl" src="./img/elaboracion-manuales.webp" alt="imagen tutoriales" loading='lazy'/>
                        </>:
                      ''} 
                      
                      {(item.id==="8")?                                             
                        <>  
                         <p className="font-bold mb-3">Creatividad para promoción de adestramiento canino en redes:</p>
                         <img className="w-[500px] shadow-xl" src="./img/adiestramiento-canino-madrid.webp" alt="imagen adiestramiento canino" loading='lazy'/>

                        <p className="font-bold mb-3">Interfaz panel temporal 'Back to the future' maquetado con HTML+CSS+JS:</p>
                        <iframe src="https://andune55.github.io/bttf/" className="w-full xl:h-250 md: h-200" loading='lazy'></iframe>
                        </>:
                      ''} 
                     
                                            
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))
            }
        </Accordion>
      </div>

{//Tiempo libre y aficiones 
}       
      <div className="container mx-auto mb-10 py-0 pr-4 border-r-12 border-r-amber-200 rounded-r-xl shadow-xl">  
      <h3 className="container mx-auto flex items-center justify-end font-[Livvic] text-xl/12 mb-2 text-amber-900 text-right bg-linear-225 from-white via-amber-100 to-amber-200 rounded-tl-xl">
        Tiempo libre y aficiones        
        <svg className="animate-pulse w-7 h-7 ml-2.5 text-red-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
        </svg>
      </h3>  
      <div className={`flex max-md:block max-md:my-0 max-md:mx-auto justify-start max-md:max-w-[70%] grid-cols-${cvitem.length} gap-4`}>
        {cvitem.map(item => (
          <Card
            key = {item.id}
            item = {item} 
          />
        ))}
        </div>
      </div>
   


      
    </>
  )
}

export default App
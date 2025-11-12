import { cvitem } from './data/cv'
import { trabajos } from './data/trabajos'

import InfoPersonal from './components/InfoPersonal'
import Card from './components/Card'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/accordion.tsx'
import ModalPanel from './components/ModalPanel'
import { useModalPanel } from './hooks/useModalPanel' 


function App() {
  //extraigo del hook
  const {openModal, closeModal} = useModalPanel()


  return (
    <>

      {/* <header className="bg-blue-400 py-[50px]"> */}
      <header className="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500 py-[50px]">
        <h1 className="text-center text-4xl font-[Dancing_Script] text-amber-50 lg">CV / Portfolio Agustín Aguilera Beltrán</h1>
        <p className="text-center mt-1 text-[12px] text-neutral-300">realizado con React/Typescript</p>
      </header>

      <div className="container mx-auto my-5 px-4 max-w-screen-xl">
        <InfoPersonal />
      </div>


{//Formación
}   
      <h3 className="container mx-auto flex items-center font-[Livvic] text-xl/12 text-blue-900 bg-linear-45 from-white via-blue-100 to-blue-200 rounded-tr-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-pulse size-6 mr-2.5 max-md:ml-1.5 max-md:mr-1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
        </svg>
        Formación académica y cursos       
      </h3>
      <div className="container mx-auto mb-10 pt-0 md:pr-4 md:shrink-0 pl-0 pb-3 border-b-2 border-b-slate-300 border-l-12 border-l-blue-200 rounded-b-xl" > 
        
        <p className="ml-2.5 mb-2">
          <span className="inline-flex items-baseline">
            <strong>Universidad Autónoma de Madrid</strong> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 self-center mx-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </span>
          <span className="text-blue-400">(1993-1998)</span> - <span>Licenciatura de Bioquimica</span>
        </p>

        <p className="ml-2.5 mb-2"><strong>Academia CICE Madrid</strong> <span className="text-blue-400">(2001-2002)</span> - <span>Máster Diseño Web y Desarrollo de aplicaciones para internet</span></p>            
        
        <p className="ml-2.5 mb-2"><strong>Udemy</strong> <span className="text-blue-400">(2025)</span> - <span>Curso de 57h de React Creando-mas-de-10-aplicaciones</span></p>
        <p className="ml-2.5 mb-2"><strong>Udemy</strong> <span className="text-blue-400">(03/2024)</span> - <span>Curso de Angular 17</span></p>
        <p className="ml-2.5 mb-2"><strong>Udemy</strong> <span className="text-blue-400">(2023)</span> - <span>HTML Email Mastery - Build Responsive HTML Email Templates</span></p>
        <p className="ml-2.5 mb-2"><strong>Udemy</strong> <span className="text-blue-400">(2022)</span> - <span>Curso de Angular 13</span></p>
        <p className="ml-2.5 mb-2"><strong>Imagina Formación</strong> <span className="text-blue-400">(2015)</span> - <span>Curso de Angular JS </span></p>
        <p className="ml-2.5 mb-2"><strong>Imagina Formación</strong> <span className="text-blue-400">(2012)</span> - <span>Curso de Desarrollo Web en HTML5 y CSS3</span></p>
        <p className="ml-2.5 mb-2"><strong>Formación de empresa</strong> <span className="text-blue-400">(2010)</span> - <span>Cursos de richfaces y JQuery</span></p>
      </div>

{//Experiencia Laboral
}   
      <h3 className="container mx-auto flex items-center font-[Livvic] text-xl/12 text-purple-900 bg-linear-45 from-white via-purple-100 to-purple-200 rounded-tr-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-pulse size-6 mr-2.5 max-md:ml-1.5 max-md:mr-1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
        Experiencia Laboral  
      </h3>
      <div className="container mx-auto mb-10 pt-0 md:pr-4 md:shrink-0 pl-0 pb-3 border-b-2 border-b-slate-300 border-l-12 border-l-purple-200 rounded-b-xl" > 
        <p className="ml-2.5 mb-2"><strong>Diseñador Front-end para Aseguradora nacional.</strong> <span className="text-purple-400 ">(05/2009-actualmente)</span> - <span className="inline-flex items-baseline"> <img src="./img/km.png" className="mr-1.25" alt="logo km" loading="lazy" />Knowmad Mood</span></p>
        <p className="ml-2.5 mb-2">
          <strong>Diseñador/Maquetador web. </strong>
          <span className="text-purple-400">(10/2005 – 05/2009)</span> - <span>Cálculo, consultora de soluciones tecnológicas</span></p>
        <p className="ml-2.5 mb-2"><strong>Responsable de desarrollo web</strong> <span className="text-purple-400">(05/2002 – 10/2005)</span> - <span>Vivaphone, consultora de Telefónica</span></p>      
      </div>


{//Algunos trabajos realizados
}   
      <h3 className="container mx-auto flex items-center font-[Livvic] text-xl/12 text-red-900 bg-linear-45 from-white via-red-100 to-red-200 rounded-tr-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-pulse size-6 mr-2.5 max-md:ml-1.5 max-md:mr-1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        Algunos de mis trabajos realizados  
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
                            <li className="list-disc">Construcción de plantillas .html para para envíos masivos a clientes mediante gestor de campañas Adobe Campaign.</li>
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
      <div className="container mx-auto mb-10 py-0 pr-4 pb-4 max-md:pr-0 border-r-12 border-r-amber-200 rounded-r-xl shadow-xl">  
      <h3 className="container mx-auto flex items-center justify-end font-[Livvic] text-xl/12 mb-2 text-amber-900 text-right bg-linear-225 from-white via-amber-100 to-amber-200 rounded-tl-xl">
        Tiempo libre y aficiones        
        <svg className="animate-pulse w-7 h-7 ml-2.5 max-md:mr-1.5 max-md:ml-1.5 text-red-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
        </svg>
      </h3>  
      <div className={`flex max-md:flex-wrap max-md:my-0 grid-cols-${cvitem.length} gap-4 mx-auto`}>
        {cvitem.map(item => (
          <Card
            key = {item.id}
            item = {item} 
            openModal = {openModal}
            closeModal = {closeModal}
          />
        ))}
        </div>
      </div>


      <ModalPanel 
        closeModal = {closeModal}/>


   


      
    </>
  )
}

export default App
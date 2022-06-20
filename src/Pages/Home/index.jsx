import { useEffect, useState } from "react"
import { GetUsers, deletartech} from "../../Components/Api"
import Madicionar from "../../Components/Madicionar"
import Meditar from "../../Components/Meditar"
import "./index.css"

function Home({history}){
     const token = localStorage.getItem("token")
     const userid = localStorage.getItem("userid")
     const [ismodalvisible, setmodalvisible]= useState(false)
     const [ismodalvisible2, setmodalvisible2]= useState(false)
     const [techs,settechs] = useState([])
     const [dadoseditar, setdadoseditar] = useState({})

     function voltar(){
        history.push("/")
        localStorage.removeItem("token")
     }
     const [dados,setdados]=useState({})

     function pegareditar(elem){
        setdadoseditar(elem)
        setmodalvisible2(true)

     }
     
     useEffect( ()=>{
       GetUsers(userid,setdados,settechs)
       
     },[techs])
     
     
     
     
    return(
     
        <div id="contenthome">
        <header id="headerhome">
            <h1 id="titulo">Kenzie Hub</h1>
            <button id="sairhome" onClick={()=>voltar()}>Sair</button>
        </header>
        <div id="nomemodulo">
              <h1 id="nome">Olá {dados.data?.name}</h1>
              <p id="nomem">Módulo {dados.data?.course_module}</p>
        </div>
        <div id="tecnologias">
            <div id="tadicionar">
                <h2 id="titulotec">Tecnologias</h2>
                <button onClick={()=>setmodalvisible(true)} id="btnadicionar">+</button>
            </div>
            <div id="contenttechs">
                 
                { techs?.map((elem)=>(
                        <div className="cardtech" key={elem.id}>
                            <h1 className="cardtitle">{elem.title}</h1>
                            <h2 className="cardstatus">{elem.status}</h2>
                            <button id={elem.id} className="btnexcluircard" onClick={()=>{
                                pegareditar(elem)
                            }
                            }>📝</button>
                            <button id={elem.id} className="btnexcluircard" onClick={()=>{
                                deletartech(elem.id,token) 
                            }}>🗑️</button>
                        </div>
                ))    
                }
               
            </div>
        </div>

        {ismodalvisible?<Madicionar setmodalvisible={setmodalvisible}/>:null}
        {ismodalvisible2?<Meditar setmodalvisible2={setmodalvisible2} dados={dadoseditar} token={token} setdados={setdados}/>:null}
      
        </div>

    )

}
export default Home
import "./index.css"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { criartech } from "../Api";
function Madicionar({setmodalvisible}){

    const token= localStorage.getItem("token")
    function submittec(data){
        setmodalvisible(false)
        console.log(data)
        criartech(token,data)
    }

    const formschema = yup.object().shape({
        title: yup.string().required("Nome obrigatório"),
        status: yup.string().required("Status obrigatório")
    })
    
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formschema),
      });
    return(
        <div className="modal">
            <div id="Mcontainer">

        
            <div className="Mheader">
                <p className="Mtitulo">Cadastrar Tecnologia</p>
                <button onClick={()=>setmodalvisible(false)} className="Mfechar">X</button>
            </div>
            <div>

                <form onSubmit={handleSubmit(submittec)} id="formMtec">

                   <p className="Topcoes">Nome</p> 
                   <input id="MInome" type="text" placeholder="Nome da técnologia" {...register("title")}/>
                   <p className="Topcoes">Selecionar status</p>
                   <select id="Sstatus" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                   </select>

                   <button type="submit" className="btnmodal">Cadastrar Tecnologia</button>
                  
                </form>
                

            </div>

            </div>


        </div>
    )
}
export default Madicionar
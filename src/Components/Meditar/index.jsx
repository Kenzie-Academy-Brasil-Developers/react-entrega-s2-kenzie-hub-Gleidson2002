import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { alterartech } from "../Api";

function Meditar ({setmodalvisible2,dados,token,setdados}){
    let status=dados.status
    
    function submittec(data){
        console.log("hi")
        alterartech(dados.id,token,data,setmodalvisible2)
    }

    const formschema = yup.object().shape({
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
                <button onClick={()=>setmodalvisible2(false)} className="Mfechar">X</button>
            </div>
            <div>
                <form onSubmit={handleSubmit(submittec)} id="formMtec">
                   <p className="Topcoes">Selecionar status</p>
                   <select id="Sstatus" defaultValue={status}{...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                   </select>
                   <button type="submit" className="btnmodal">Atualizar técnologia</button>
                </form>
                

            </div>

            </div>


        </div>
    )
}
export default Meditar
import "./index.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loginapi } from "../../Components/Api";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({history}) {
  
  const [alert,setalert]= useState("")
   const formschema = yup.object().shape(
    {
      email: yup.string().required("E-mail obrigatório").email("Formato de E-mail invalido"),
      senha: yup.string().required("Senha obrigatória")
    }
   )
   const {register,handleSubmit,formState:{errors}}= useForm({resolver:yupResolver(formschema)})
   function verificardados(data){
    
    Loginapi(data,history,setalert)
   }
  return (
    <div id="content">
      <ToastContainer/>
      <header id="headertitulo">
        <h1 id="titulo">Kenzie Hub</h1>
      </header>
      <div id="content2">
        <h2 id="titulologin">Login</h2>

        <form onSubmit={
          handleSubmit(verificardados)
          
          }>
          <div className="campo">
            <label className="label">Email</label>
            <input  className="inputs" type="text" placeholder="Digite seu E-mail" {...register("email")} />
            <span>{errors.email?.message}</span>
            
            
          </div>
          <div className="campo">
            <label className="label">Senha</label>
            <input className="inputs" type="password" placeholder="Digite sua senha" {...register("senha")}/>
            <span>{errors.senha?.message}</span>
          </div>
          <button id="buttonentrar" type="submit">Entrar</button>
        </form>
      
      <div>
        {alert?<span>{alert}</span>:""}
        <p id="pdeconta">Ainda não possui uma conta?</p>
        <button onClick={()=>{history.push("/cadastro")}} id="btncadastrese">Cadastre-se</button>
      </div>
      </div>
    </div>
  );
}
export default Login;

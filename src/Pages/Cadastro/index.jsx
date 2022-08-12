import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./index.css";
import { Registerapi } from "../../Components/Api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cadastro({ history }) {
  const formschema = yup.object().shape({
    nome:yup.string().required("Nome obrigatório"),
    email:yup.string().email("Formato de email inválido").required("Email obrigatório"),
    senha:yup.string().required("Senha obrigatória").matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'A senha deve conter pelo menos um simbulo e um numero e uma letra em maiusculo e outra em minusculo, támbem deve conter 8 ou mais caracteres'),
    senha2:yup.string().oneOf([yup.ref("senha")],"as senhas não combinam"),
    bio:yup.string().required("Bio obrigatória"),
    contato:yup.string().required("Contato obrigatório"),
    modulo:yup.string().required("Módulo obrigatório")

  });
  function verificardados(data) {

    Registerapi(data,history)
  }

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formschema),
  });

  return (
    <div id="content">
      <ToastContainer/>
      <header id="header">
        <h1 id="titulo">Kenzie Hub</h1>{" "}
        <button onClick={() => history.push("/")} id="btnvoltar">
          Voltar
        </button>
      </header>
      <div id="content3">
        <h1 id="tituloR">Crie sua conta</h1>
        <p id="paragrafoR">Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(verificardados)}>
          <div className="entrada">
            <label className="labelinput">Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              className="inputs"
              {...register("nome")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">E-mail</label>
            <input
              type="text"
              placeholder="Digite aqui seu E-mail"
              className="inputs"
              {...register("email")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              className="inputs"
              {...register("senha")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              className="inputs"
              {...register("senha2")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              className="inputs"
              {...register("bio")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              className="inputs"
              {...register("contato")}
            />
          </div>
          <div className="entrada">
            <label className="labelinput">Selecionar módulo</label>
            <input
              className="inputs"
              placeholder="Selecione o módulo"
              list="modulos"
              {...register("modulo")}
            />
            <datalist id="modulos">
              <option value="M1">M1</option>
              <option value="M2">M2</option>
              <option value="M3">M3</option>
              <option value="M4">M4</option>
              <option value="M5">M5</option>
              <option value="M6">M6</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
            </datalist>
            <button id="submitregistrar" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Cadastro;

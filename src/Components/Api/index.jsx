import axios from "axios";
import { toast } from "react-toastify";




const Loginapi = (data,history,setalert) => {

  axios
    .post(" https://kenziehub.herokuapp.com/sessions", {
        email:data.email,
        password:data.senha
    })
    .then((res) =>{ 
      localStorage.setItem("userid",res.data.user.id)
      localStorage.setItem("token",res.data.token)

      if(res.status===200){
        toast.success("Sucesso")
        
        history.push("/home")}
      
  })
  .catch((err)=>{setalert("Verifique seus dados ou cadastre-se") 
  toast.error("Algo deu errado")})
    
}

const GetUsers = (userid,setdados,settechs)=>{
  axios.get(`https://kenziehub.herokuapp.com/users/${userid}`)
  .then((res)=> {
    setdados(res)
    settechs(res.data.techs)
  })
}
const Registerapi = (data,history) => {
  axios
    .post("https://kenziehub.herokuapp.com/users", {
      email: data.email,
      password: data.senha,
      name: data.nome,
      bio: data.bio,
      contact: data.contato,
      course_module: data.modulo,
    })
    .then((res)=> res.status===201?history.push("/"):'')
}
const criartech = (token,data)=>{
 
  axios.post("https://kenziehub.herokuapp.com/users/techs",data,
  {headers:{
    Authorization:`Bearer ${token}`
  }}).then((res)=>toast.success("Tech criada")).catch((err)=>console.log(err))
}

const deletartech = (techid,token)=>{
  axios.delete(`https://kenziehub.herokuapp.com/users/techs/${techid}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }}).then((res)=>toast.success("Tech deletada")).catch((err)=>console.log(err))

}
const alterartech = (techid,token,data,setmodalvisible2)=>{
  axios.put(`https://kenziehub.herokuapp.com/users/techs/${techid}`,data,{
    headers:{
      Authorization:`Bearer ${token}`
    }}).then((res)=>{
      if(res.status===201){
        toast.success("Tech alterada com sucesso")
        setmodalvisible2(false)


      }
    })
       .catch((err)=>console.log(err))

}

export { Loginapi, Registerapi,GetUsers ,criartech,deletartech, alterartech};


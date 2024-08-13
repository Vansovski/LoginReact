import {FaUser, FaLock} from "react-icons/fa"

import { useState } from "react"

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
        console.log("Envio");
    }

  return (
    <div className="container">
        <div>
            <h1>Inicie com
                <br/>Free Trial
            </h1>
            <div className="text-free-trial">
                Teste todos os recursos sem cartão de crédito!
            </div>
           
        </div>

        <div>
         <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input 
                type="e-mail" 
                placeholder='E-mail'
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
                <input 
                type="password" 
                name="password" 
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Concordo com os <a href="#">Termos</a> de uso e <a href="#">Privacidade</a>
                </label>
                
            </div>
            <div className="form-button">
                <button>Entrar</button>
            </div>
        
        <div className="signup-link">
            <p>Já tem uma conta? <a href="#">Login</a></p>
        </div>
         </form>
        </div>
    </div>
  )
}

export default Login

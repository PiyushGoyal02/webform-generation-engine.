import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigator = useNavigate();

    function ClickHandler (){
        navigator('/submitjson')
    }

    return (
        <div className="LoginDiv">
            <div className="wrapper">

                <div className="container">
           

                    <div className="hading2">
                        <h3>sign in</h3>
                    </div>

                    <div className="hading3">
                        <p> signin with username and password </p>
                    </div>

                    <div className="usepas">

                        <label htmlFor="use" className="us"> Your username </label>
                        <br/> <br/>
                        <input required type="text" id="use" name="username" placeholder=" Enter Username "/>
                        <br/> <br/>
                        <label htmlFor="pas" className="pa"> Your password </label>
                        <br/> <br/>
                        <input required type="password" id="pas" name="password" placeholder="Enter Password"/>

                    </div>

                    <br/>
                    <div className="remen">
                        <input type="checkbox" name="remender" id="rem"/>
                        <label for="rem"> Remender me</label>

                        <a href="#" className="for"> Forgot Password? </a>
                    </div>

                    <br/>
                    <button onClick={ClickHandler} className="log"> Login </button>

            
                    <div className="notreg">
                        <br/>
                        <span className="not"> Not a member? </span>
                        <a href="#" className="reg"> Register here!</a>
                    </div>
            
                </div>
        
            </div>
        </div>
    )
}

export default Login;
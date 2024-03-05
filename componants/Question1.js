import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Question1({jsonData}){

    const {ChangeHandler, formData} = useContext(AppContext);

    const navigator = useNavigate();
    function clickHandler(){
        navigator('/que2')
    }

    const ReactQuestion1 = () => {
        return jsonData.questions.map((que1)=>{
            if(que1.type === 'number'){
                return(
                    <div className="que1" key={que1.id}>
                        <h3 className="question-hading">{que1.q}</h3>
                        <input value={formData.Question1} name='Question1' onChange={ChangeHandler} className="number-input" type="number"/>
                        <button onClick={clickHandler}>Next</button>
                    </div>
                )
            }
        })
    }


    return (
        <div>
            {ReactQuestion1()}
        </div>
    )
}

export default Question1;
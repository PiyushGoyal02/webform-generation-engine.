import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Question2({jsonData}){



    const navigator = useNavigate();

    function clickHandler (){
        navigator('/que3')
    }

    const {ChangeHandler, formData, setFormData} = useContext(AppContext);

    const ReactQuestion2 = () => {
        return jsonData.questions.map((que2)=>{
            if(que2.type === 'singlechoice'){
                return(
                    <div className="que2" key={que2.id}>
                        <h3 className="question-hading">{que2.q}</h3>
                        {que2.choices.map((value)=>{
                            return (
                                <p>{value.text} <input id="Question2" name="Question2" value={formData.Question2} onChange={ChangeHandler} type="radio"></input> </p>
                            )
                        })}
                        <button onClick={clickHandler}>Next</button>
                    </div>
                )
            }
        })
    }

    return (
        <div>
            {ReactQuestion2()}
        </div>
    )
}

export default Question2;
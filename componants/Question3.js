import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Question3 ({jsonData}){

    const navigator = useNavigate();

    function clickHandler(){
        navigator('/que4')
    }

    const{ChangeHandler, formData} = useContext(AppContext);

    const questhird = () => {
        return jsonData.questions.map((third)=>{
            if(third.type === 'date'){
                return (
                    <div className="que3" key={third.id}>
                        <h1>{third.q}</h1>
                        <input onChange={ChangeHandler} name='Question3' value={formData.Question3} className="date-input" type="date"/>
                        <button onClick={clickHandler}> Next </button>
                    </div>
                )
            }
        })
    }


    return (
        <div>
            {questhird()}
        </div>
    )
}

export default Question3;
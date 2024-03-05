import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Question4 ({jsonData}){

    // function backhandler(){
    //     ('/que3')
    // }

    const {ChangeHandler, formData} = useContext(AppContext);

    const quesforth = () => {
        return jsonData.questions.map((four)=>{
            if(four.type === "dropdown"){
                return (
                    <div className="que4" key={four.id}>
                        <h1>{four.q}</h1>
                        <select name="Question4" onChange={ChangeHandler} value={formData.Question4} className="selecttag">
                            <option>choices Karo</option>
                            {four.choices.map((choco)=>{
                                return <option>{choco.Choco}</option>
                            })}
                        </select>
                        <button>Next</button>
                    </div>
                )
            }
        })
    }
    return (
        <div>
            {quesforth()}
        </div>
    )
}

export default Question4;
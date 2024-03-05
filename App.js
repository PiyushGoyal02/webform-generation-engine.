import './App.css';
import jsonData from './data.json';
import Question1 from './componant/Question1';
import Question2 from './componant/Question2';
import Question3 from './componant/Question3';
import Question4 from './componant/Question4';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Submit from './componant/Submit';
import Login from './componant/Login';
import SubmitJSON from './componant/SubmitJSON';


function App() {

  // function getData(data){
  //   console.log(data);
  // }

  return (
    <div>
      <Link to="/">
        <h1 className='Top-Hading'>{jsonData.formName}</h1>
      </Link>


      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/submitjson' element={<SubmitJSON/>}></Route>
        <Route path='/que1' element={<Question1 jsonData={jsonData}/>}></Route>
        <Route path='/que2' element={<Question2 jsonData={jsonData}/>}></Route>
        <Route path='/que3' element={ <Question3 jsonData={jsonData}/>}></Route>
        <Route path='/que4' element={ <Question4 jsonData={jsonData}/>}></Route>
        <Route path='/submit' element={ <Submit jsonData={jsonData}/> }></Route>
      </Routes>

    </div>
  );
}

export default App;

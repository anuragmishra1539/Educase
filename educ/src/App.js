import Home from "./Component/Home";
import Login from "./Component/Login";
import { Routes,Route } from "react-router-dom";
import Register from "./Component/Register";
import User from "./Component/User";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home/> }/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/User' element={<User/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

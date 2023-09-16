
import Navbar from "./Components/Navbar";
import axios from "axios";
import {useState,useEffect} from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Card from "./Components/cards";
import Context from "./context";
import "./App.css";



function App() {
   const [state,setState] = useState([]);
    //for pagination
    let pageno=10;
   let getdata= async()=>{
       const {data} = await axios.get("https://webcode-2re.vercel.app/products");
       console.log(data);
       setState(data);
   }
   
   useEffect(()=>{
     getdata();
   },[])

  return (
    <>
    <Context.Provider 
    value ={{
      state,
      setState,
      pageno
    }}
    >
   <BrowserRouter>
   <Navbar />
   <Routes>
     <Route exact path="/" component={Card}></Route>
     <Route path="/:id" component={Card}></Route>
   </Routes>
   </BrowserRouter>
   </Context.Provider>
  
    </>
  );
}

export default App;
import './App.css';
import Profilepic from "./components/profilepic";
import Aboutme from "./components/Aboutme";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import {useState,useEffect} from "react" ;


function App() {

  const themes=["white","blue","tomato"];
  const[themeId,setThemeId]=useState(0);
  const switchTheme= () =>{
    setThemeId((id) => (id+1)%3);
  }

  const handleKeydown=(event)=>{
    switch(event.key)
   {case "0":
   case"1":
   case"2":
   setThemeId(parseInt(event.key));
   break;
  }
  }

  useEffect(
    () =>{
      window.addEventListener("keydown",handleKeydown);
    }
  );
 
  return (

    <div style={{backgroundColor:themes[themeId]}}>
  
    
      <center>
<h1>
<u>RESUME</u>

<div> <button onClick ={switchTheme}> </button> </div>
</h1>
</center>
      <main>
        <BrowserRouter>
        <Switch>
        <Route path={["/profilepic/" , "/profilepic"]}>
        <Profilepic/>
        </Route>
        <Route path={["/Aboutme/","/Aboutme"]}>
    
        <Aboutme/>
        
        </Route>
        </Switch>
        </BrowserRouter>

      </main>
    </div>
  );
}


export default App;

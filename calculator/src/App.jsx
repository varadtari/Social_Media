import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  
  const [calVal,setcalVal]=useState("");
  const onButtonClick=(buttonText)=>{
if(buttonText==='c'){
setcalVal("");
}else if(buttonText==='='){
let result=eval(calVal);
setcalVal(result);
}
else{
let newButtonText=calVal+buttonText;
setcalVal(newButtonText);
}
  }
  return (
    <>
     <div className={styles.calculator}>
   <Display displayValue={calVal}></Display>
    <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>

     </div>
    </>
  )
}

export default App

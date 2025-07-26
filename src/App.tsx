import { useState } from "react";
import Button from "./components/Button";
import Output from "./components/Output";

function App() {

  
  const [firstNum, setFirstNum] = useState("");
  const [output, setOutput] = useState("");
  const [operand, setOperand] = useState("");
  
  const performCalculations = () => {
    let secondNum = parseFloat(output);

    let final = 0;
    switch(operand) {
      default:
      case '+':
        final = parseFloat(firstNum) + secondNum;
        break;
      case '-':
        final = parseFloat(firstNum) - secondNum;
        break;
      case '*':
        final = parseFloat(firstNum) * secondNum;
        break;
      case '/':
        final = parseFloat(firstNum) / secondNum;
        break;
    }
    setOperand("");
    setOutput(final.toString());
  }

  const operandClicked = (op: string) => {
    setOperand(op);
    setFirstNum(output);
    setOutput("");
  }

  const buttonClicked = (num: number) => {

    if(num >= 0)
      setOutput(output + num);
    else {
      switch(num) {
        default:
        case -1:
          if(operand !== "")
            performCalculations();
          operandClicked("+");
          break;
        case -2:
          if(operand !== "")
            performCalculations();
          operandClicked("-");
          break;
        case -3:
          if(operand !== "")
            performCalculations();
          operandClicked("*");
          break;
        case -4:
          if(!output.includes("."))
            setOutput(output + ".");
          break;
        case -5:
          if(operand !== "")
            performCalculations();
          performCalculations();
          break;
        case -6:
          operandClicked("/");
          break;
        case -7:
          setOperand("");
          setFirstNum("");
          setOutput("");
          break;
      }
    }
  }

  return (
    <>
      <div className="calc-box border-style" style={{"width": "95%", "marginTop": "2.5%"}}>
        <Output activeOperand={operand}>{output}</Output>
        <div className="calc-box border-style calc-inner" style={{"width": "100%", "marginTop": "5%"}}>
          <Button num={7} onClick={buttonClicked} />
          <Button num={8} onClick={buttonClicked} />
          <Button num={9} onClick={buttonClicked} />
          <Button num={-1} onClick={buttonClicked} />
          <br />
          <Button num={4} onClick={buttonClicked} />
          <Button num={5} onClick={buttonClicked} />
          <Button num={6} onClick={buttonClicked} />
          <Button num={-2} onClick={buttonClicked} />
          <br />
          <Button num={1} onClick={buttonClicked} />
          <Button num={2} onClick={buttonClicked} />
          <Button num={3} onClick={buttonClicked} />
          <Button num={-3} onClick={buttonClicked} />
          <br />
          <Button num={0} onClick={buttonClicked} />
          <Button num={-4} onClick={buttonClicked} />
          <Button num={-5} onClick={buttonClicked} />
          <Button num={-6} onClick={buttonClicked} />
          <br />
          <Button num={-7} onClick={buttonClicked} />
        </div>
      </div>
    </>
  )
}

export default App

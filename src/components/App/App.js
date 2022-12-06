import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import InfoNav from '../InfoNav/InfoNav';


function App() {
  const [ratioCalc, setRatioCalc] = useState('');
  const [isCalcShow, setIsCalcShow] = useState(true);

  const handleRatioCalculated = (ratio) => {
    // console.log('Получили значение коэфф:', ratio);
    setRatioCalc(ratio);
  };  

  const handleIsCalcShow = (correctionType) => {
    if (correctionType === 'Общая площадь (коэффициент торможения)') {
      setIsCalcShow(true);
    } else {
      setIsCalcShow(false);
    }    
  }

  // useEffect(() => {

  // });

  return (
    <>
    <div className="App">
      <Filters onSendResult={handleRatioCalculated} resutToShow={handleIsCalcShow}/>
      <div>
        {/* <About /> */}
        {isCalcShow && <Calc calculated={ratioCalc}/>}
        
      </div>      
    </div>
    <InfoNav />        
    </>
  );
}

export default App;

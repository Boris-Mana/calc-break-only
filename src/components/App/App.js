import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";


function App() {
  const [ratioCalc, setRatioCalc] = useState('');
  // const [isCalcShow, setIsCalcShow] = useState(true);

  const handleRatioCalculated = (ratio) => {
    // console.log('Получили значение коэфф:', ratio);
    setRatioCalc(ratio);
  };  

  // const handleIsCalcShow = (correctionType) => {
  //   if (correctionType === 'Общая площадь (коэффициент торможения)') {
  //     setIsCalcShow(true);
  //   } else {
  //     setIsCalcShow(false);
  //   }    
  // }

  // useEffect(() => {

  // });

  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <Filters onSendResult={handleRatioCalculated} />
        <div className="App__container-right">
          <About />
          <Calc calculated={ratioCalc} />
          <AdditionalInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

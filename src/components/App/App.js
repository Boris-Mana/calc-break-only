import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

import { YEARS_BREAK, REGIONS_BREAK } from "../../utils/Constants/ConstantsBreak";


function App() {
  const [ratioCalc, setRatioCalc] = useState('');
  const [year, setYear] = useState(YEARS_BREAK[0].value);
  const [region, setRegion] = useState(REGIONS_BREAK[0].value);
  const [realtyType, setRealtyType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [minMaxMid, setMinMaxMid] = useState('');
  const [intervalType, setIntervalType] = useState('');

  const [yearComment, setYearComment] = useState(YEARS_BREAK[0].comment);

  // const [isCalcShow, setIsCalcShow] = useState(true);

  const handleRatioCalculated = (ratio) => {
    console.log('Получили значение коэфф:', ratio);
    setRatioCalc(ratio);
  };

  const handleYearChange = (category) => {
    const year_index = YEARS_BREAK.findIndex(item => item.value === category);
    setYear(category);
    setYearComment(YEARS_BREAK[year_index].comment)
    // console.log('Сработал селектор года', category);
  };

  const handleRegionChange = (category) => {
    setRegion(category);
    // console.log('Сработал селектор области', category);
  };


  const handleRealTypeChange = (e) => {
    // e.preventDefault();
    setRealtyType(e.target.value);
    // console.log('Селектор типа недв', e.target.value);
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
    // console.log('Селектор назначения', e.target.value);
  };

  const handleInterval = (e) => {
    // console.log('Селектор интервала', e.target.value);
    setIntervalType(e.target.value);
  };

  const handleSetMinMaxMidl = (e) => {
    // console.log('Селектор мин-макс', e.target.value);
    setMinMaxMid(e.target.value);
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
      <div className="App__main-box">
        <Header />
        <div className="App__container">
          <Filters
            year={year}
            yearComment={yearComment}
            region={region}
            realtyType={realtyType}
            purpose={purpose}
            intervalType={intervalType}
            minMaxMid={minMaxMid}
            onSendResult={handleRatioCalculated}
            onSetYear={handleYearChange}
            onSetRegion={handleRegionChange}
            onSetRealtyType={handleRealTypeChange}
            onSetPupose={handlePurposeChange}
            onSetInterval={handleInterval}
            onSetMinMax={handleSetMinMaxMidl}
          />
          <div className="App__container-right">
            <About />
            <Calc calculated={ratioCalc} />
            <AdditionalInfo
              year={year}
              region={region}
              realtyType={realtyType}
              purpose={purpose}
              intervalType={intervalType}
              minMaxMid={minMaxMid}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

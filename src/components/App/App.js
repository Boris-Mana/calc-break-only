import { useEffect, useState } from "react";

import Calc from "../Calc/Calc";
import About from '../About/About';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

import backgroundImg from '../../images/map1900rgb.png'

import { YEARS_BREAK, REGIONS_BREAK } from "../../utils/Constants/ConstantsBreak";
import calculateBreakRatio from "../../utils/calculateBreakRatio";


function App() {
  const [ratioCalc, setRatioCalc] = useState('');  
  const [year, setYear] = useState(YEARS_BREAK[0].value);
  const [region, setRegion] = useState(REGIONS_BREAK[0].value);
  const [realtyType, setRealtyType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [minMaxMid, setMinMaxMid] = useState('');
  const [intervalType, setIntervalType] = useState('');
  const [isResultActive, setIsResultActive] = useState(false);
  const [isResultToShow, setIsResultToShow] = useState(false);
  const [isResultSend, setIsResultSend] = useState(false);

  const [yearComment, setYearComment] = useState(YEARS_BREAK[0].comment);

  // const [isCalcShow, setIsCalcShow] = useState(true);

  const handleRatioCalculated = () => {
    // console.log('Подставляем значение', ratioCalc);
    setIsResultToShow(true);        
  };

  const handleRatioSend = () => {
    // console.log('Отсылаем в калькулятор значение', ratioCalc);
    setIsResultSend(true);
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

  const resetAllFilds = () => {
    window.location.reload();
    // setYear(YEARS_BREAK[0].value);
    // setRegion(REGIONS_BREAK[0].value);
    // setRealtyType('');
    // setPurpose('');
    // setMinMaxMid('');
    // setIntervalType('');
    // setRatioCalc('');
    // setIsResultActive(false);
    // setIsResultToShow(false);
    // setIsResultSend(false);
  };

  const calcBreakRatio = () => {
    const breakRatio = calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid)
    // console.log('Получили значение коэфф:', breakRatio);
    // setRatioBreakResult(breakRatio);
    setRatioCalc(breakRatio);
    // handleSendResultButton();
};

useEffect(() => {
    if (year !== '' && region !== '' && realtyType !== '' && purpose !== '' && minMaxMid !== '' && intervalType !== '') {
      setIsResultActive(true);
      // console.log('Активируем кнопку');      
    } else {
      setIsResultActive(false);
      // console.log('Отключаем кнопку');
    };    
}, [year, region, realtyType, purpose, minMaxMid, intervalType]);

  // const handleIsCalcShow = (correctionType) => {
  //   if (correctionType === 'Общая площадь (коэффициент торможения)') {
  //     setIsCalcShow(true);
  //   } else {
  //     setIsCalcShow(false);
  //   }    
  // }

  useEffect(() => {
    setRatioCalc(calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid))
    // console.log('Слушаем, вычисляем: Коэфф вычислен ', ratioCalc)
    // handleRatioCalculated();
  }, [year, region, realtyType, purpose, minMaxMid, intervalType]);


  return (
    <div className='App'>
      <img className="App__background" src={backgroundImg} alt=''/>
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
            isResultActive={isResultActive}
            isResultToShow={isResultToShow}
            resutToShow={ratioCalc}
            onGetResult={handleRatioCalculated}            
            onSetYear={handleYearChange}
            onSetRegion={handleRegionChange}
            onSetRealtyType={handleRealTypeChange}
            onSetPupose={handlePurposeChange}
            onSetInterval={handleInterval}
            onSetMinMax={handleSetMinMaxMidl}
            onReset={resetAllFilds}
            onSend={handleRatioSend}
          />
          <div className="App__container-right">
            <About />
            <Calc calculatedRatio={ratioCalc} isSend={isResultSend}/>
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

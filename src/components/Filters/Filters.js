import { useEffect, useState } from "react";
import FilterElement from "./FitlerElement/FitlerElement";
// import {
//     chooseYear,
//     chooseDistrict,
//     chooseRealtyType,
//     choosePurpose,
//     chooseDealType,
//     chooseMarketType

// } from "./Children/Children";

import ChildrenForDropMenu from './Children/ChildrenForDropMenu';
import ChildrenDropMenuIn from "./Children/ChildrenDropMenuIn";
import ChildrenRadioInItem from "./Children/ChildrenRadioInItem";

import calculateBreakRatio from "../../utils/calculateBreakRatio";
import calculateTorgRatio from "../../utils/calculateTorgRatio";


import {
    CORRECTIONTYPES,    
    REGIONS,    
    YEARSELECTED,
    REGIONSELECTED,
    CORRECTIONSELECTED,    
} from '../../utils/Constants/ConstantsCommon'

import { YEARS_BREAK, PURPOSE_BREAK_LAND, PURPOSE_BREAK_BUILD, REGIONS_BREAK } from "../../utils/Constants/ConstantsBreak";
import { YEARS_TORG, PURPOSE_TORG_LAND, PURPOSE_TORG_BUILD, REGIONS_TORG } from "../../utils/Constants/ConstantsTorg";

// import {
//     chooseSquereLandIndustry,
//     chooseSquereLandOther,
//     chooseSquereBuildingIndustry,
//     chooseSquereBuildingOther
// } from './SquareRanges/SquareRanges'

export default function Calc({onSendResult, resutToShow}) {
    const [isLandCommOn, setIsLandCommOn] = useState(false);
    const [isLandIndustOn, setIsLandIndustOn] = useState(false);
    const [isBuildCommOn, setIsBuildCommOn] = useState(false);
    const [isBuildIndustOn, setIsBuildIndustOn] = useState(false);
    const [isNotActive, setIsNotActive] = useState(true);
    const [isSendResultActive, setIsSendResultActive] = useState(false);    
    const [isShowInterval, setIsShowInterval] = useState(false);
    const [isShowMarketType, setIsShowMarketType] = useState(false);    
    const [isShowBreakResult, setIsShowBreakResult] = useState(false);
    const [isShowTorgResult, setIsShowTorgResult] = useState(false);

    const [correctionType, setCorrectionType] = useState(CORRECTIONSELECTED);
    const [year, setYear] = useState(YEARSELECTED);
    const [region, setRegion] = useState(REGIONSELECTED);
    const [realtyType , setRealtyType] = useState('');
    const [purpose , setPurpose] = useState('');
    // const [dealType , setDealType] = useState('');
    const [marketType, setMarketType] = useState('');
    const [minMaxMid, setMinMaxMid] = useState('');
    // const [squere, setSquere] = useState('');
    const [ratioBreakResult, setRatioBreakResult] = useState('');
    const [ratioTorgResult, setRatioTorgResult] = useState('t');
    const [intervalType, setIntervalType] = useState('');
    const [yearsArr, setYearsArr] = useState([]);
    const [regionsArr, setRegionsArr] = useState([]);
    const [purposesLand, setPurposesLand] = useState([]);
    const [purposesBuild, setPurposesBuild] = useState([]);

    const handleCorrectTypeChange = (category) => {        
        setCorrectionType(category);
        resutToShow(category);
        // setRealtyType('');
        // setPurpose('');
        // setMarketType('');
        // setMinMaxMid('');
        // setRatioBreakResult('');
        // setIntervalType('');
        // console.log('Сработал селектор', category);
    };
    
    const handleYearChange = (category) => {        
        setYear(category);        
        // console.log('Сработал селектор', category);
    };

    const handleRegionChange = (category) => {        
        setRegion(category);
        // console.log('Сработал селектор', category);
    };
    
    const handleSendResultButton = () => {
        if (ratioBreakResult === 'н/д') {
            setIsSendResultActive(false);
        } else {
            setIsSendResultActive(true);
        }
    };

    const handleRealTypeChange = (e) => { 
        // e.preventDefault();
        setRealtyType(e.target.value);
        // console.log('Селектор типа недв', e.target.value);
    };

    const handlePurposeChange = (e) => {        
        // e.preventDefault();
        setPurpose(e.target.value)
        // console.log('Селектор назначения', e.target.value);
    };

    // const handleDealTypeChange = (e) => {        
    //     // e.preventDefault();
    //     setDealType(e.target.value);
    //     // console.log('Селектор типа сделки', e.target.value);
    // };

    const handleMarketTypeChange = (e) => {        
        // e.preventDefault();
        setMarketType(e.target.value);
        // console.log('Селектор типа рынка', e.target.value);
    };

    const handleInterval = (e) => {
        // console.log('Селектор интервала', e.target.value);
        setIntervalType(e.target.value);
    };

    const handleSetMinMaxMidl = (e) => {
        // console.log('Селектор мин-макс', e.target.value);
        setMinMaxMid(e.target.value);
    };
    
    // const handlesetSquereChange = (e) => {        
    //     // e.preventDefault();
    //     setSquere(e.target.value);
    //     // console.log('Селектор площади', e.target.value);
    // };

    const calcBreakRatio = () => {                
        const breakRatio = calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid)
        setRatioBreakResult(breakRatio);
        handleSendResultButton();
    };

    const calcTorgRatio = () => {                
        const torgRatio = calculateTorgRatio(year, region, realtyType, purpose, marketType, intervalType, minMaxMid)
        setRatioTorgResult(torgRatio);        
    };

    const getRatio = (e) => {
        e.preventDefault();
        onSendResult(ratioBreakResult); 
        setRatioBreakResult('');
    };

    useEffect(() => {
        // console.log('Сработал эфф на подсчет тормоза');
        // console.log('Значения радиокнопок:', year, region, realtyType, purpose, marketType, minMaxMid);
        calcBreakRatio();
        calcTorgRatio();
    }, [ correctionType, year, region, realtyType, purpose, minMaxMid, marketType, intervalType, ratioBreakResult, isSendResultActive ]);

    const fillRadioBox = (dataArray, handler) => {
        return (
            <>
                {dataArray.map((item, i) => {
                    return (<ChildrenRadioInItem name={item.name} value={item.value} text={item.text} isDisable={!item.isOn} handlerOnChange={handler} />)
                })}
            </>
        )
    };

    const chooseCorrectionType = <ChildrenForDropMenu name="year" value={correctionType}/>
    const chooseYear = <ChildrenForDropMenu name="year" value={year}/>
    const chooseDistrict = <ChildrenForDropMenu name="region" value={region}/>    
    const chooseRealtyType = (
        <>
            <ChildrenRadioInItem name='type' value='земля' text='Земельные участки' handlerOnChange={handleRealTypeChange}/>
            <ChildrenRadioInItem name='type' value='помещения' text='Здания, нежилые помещения' handlerOnChange={handleRealTypeChange}/>
        </>
    );
    
    const chooseBreakPurposeLand = fillRadioBox( PURPOSE_BREAK_LAND, handlePurposeChange)
    const chooseBreakPurposeBuild = fillRadioBox( PURPOSE_BREAK_BUILD, handlePurposeChange)

    // const chooseBreakPurposeBuild = (
    //     <>
    //         <ChildrenRadioInItem name='purpose' value='торг-офис' text='торгово-офисное' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='производство' text='производственно-складское' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='прочее' text='прочее коммерческое' handlerOnChange={handlePurposeChange}/>            
    //     </>
    // );

    const chooseTorgPurposeLand = fillRadioBox( PURPOSE_TORG_LAND, handlePurposeChange)
    const chooseTorgPurposeBuild = fillRadioBox( PURPOSE_TORG_BUILD, handlePurposeChange)

    // const chooseTorgPurposeLand = (
    //     <>
    //         <ChildrenRadioInItem name='purpose' value='ижс' text='индивидуальное жилищное строительство, в т.ч. ЛПХ, ДНП, СНТ' isDisable={true} handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='многоэт-жил' text='многоэтажное жилищное строительство;' isDisable={true} handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='торг-офис-застрой' text='торгово-офисная застройка' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='произв-застрой' text='производственно-складская застройка' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='придорож' text='под объекты придорожного сервиса' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='отдых' text='под объекты рекреации' isDisable={true} handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='сельхоз' text='сельскохозяйственное назначение' isDisable={true} handlerOnChange={handlePurposeChange}/>
    //     </>
    // );

    // const chooseTorgPurposeBuild = (
    //     <>
    //         <ChildrenRadioInItem name='purpose' value='торг-офис' text='торгово-офисное' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='производство' text='производственно-складское' handlerOnChange={handlePurposeChange}/>
    //         <ChildrenRadioInItem name='purpose' value='прочее' text='прочее коммерческое' handlerOnChange={handlePurposeChange}/>            
    //     </>
    // );
    
    // Два варианта нижнего фильтра. Пока нет полных данных. Потом - прибить
    // =====
    const paramsMinMaxChooseDoverInterval = [    
        {name: 'use', value: 'min', text: 'минимальное', isOn: true},
        {name: 'use', value: 'mid', text: 'среднее', isOn: true},
        {name: 'use', value: 'max', text: 'максимальное', isOn: true},
    ];

    const paramsChooseIntervalTypeBreak = (
        <>
            <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval}/>
            <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval}/>            
        </>
    );

    const paramsMinMaxChooseExtInterval = [    
        {name: 'use', value: 'min', text: 'минимальное', isOn: false},
        {name: 'use', value: 'mid', text: 'среднее', isOn: true},
        {name: 'use', value: 'max', text: 'максимальное', isOn: false},
    ];

    const paramsChooseIntervalTypeTorg = (
        <>
            <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval}/>
            <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} isDisable={true}/>            
        </>
    );

    const chooseMinMaxMidTypeDov = fillRadioBox( paramsMinMaxChooseDoverInterval, handleSetMinMaxMidl);
    const chooseMinMaxMidTypeExt = fillRadioBox( paramsMinMaxChooseExtInterval, handleSetMinMaxMidl);
    // =====

    const chooseMinMaxMidType = (
        <>
            <ChildrenRadioInItem name='use' value='min' text='минимальное' handlerOnChange={handleSetMinMaxMidl}/>
            <ChildrenRadioInItem name='use' value='mid' text='среднее' handlerOnChange={handleSetMinMaxMidl}/>
            <ChildrenRadioInItem name='use' value='max' text='максимальное' handlerOnChange={handleSetMinMaxMidl}/>            
        </>
    );

    const chooseIntervalType = (
        <>
            <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval}/>
            <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} isDisable={true}/>            
        </>
    );

    const chooseMarketType = (
        <>
            <ChildrenRadioInItem name='market' value='активный' text='активный' handlerOnChange={handleMarketTypeChange}/>
            <ChildrenRadioInItem name='market' value='неактивный' text='неактивный' handlerOnChange={handleMarketTypeChange} isDisable={true}/>
        </>
    );

    // const chooseDealType = (
    //     <>
    //         <label className="filters__lable">
    //             <input
    //                 name="deal"
    //                 className="filters__input-radio"
    //                 type="radio"
    //                 value='продажа'
    //                 onChange={handleDealTypeChange}
    //             />
    //             продажа
    //         </label>

    //         <label className="filters__lable">
    //             <input
    //                 name="deal"
    //                 className="filters__input-radio"
    //                 type="radio"
    //                 value='аренда'
    //                 onChange={handleDealTypeChange}
    //             />
    //             аренда
    //         </label>
    //     </>
    // );    

    const childrenCorrectionTypeDrop = <ChildrenDropMenuIn value={correctionType} handlerChange={handleCorrectTypeChange} dataArray={CORRECTIONTYPES}/>;
    const childrenYearDrop = <ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={yearsArr}/>;
    const childrenRegionDrop = <ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={regionsArr}/>;

    const childrenTorgYearDrop = <ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={YEARS_TORG}/>;
    const childrenBreakYearDrop = <ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={YEARS_BREAK}/>;
    const childrenTorgRegionDrop = <ChildrenDropMenuIn value={region} handlerChange={handleRegionChange} dataArray={REGIONS}/>;
    const childrenBreakRegionDrop = <ChildrenDropMenuIn value={region} handlerChange={handleRegionChange} dataArray={REGIONS_BREAK}/>;

    


    const breakResultBox = (
        <div className="filters__submit-res-box">
            <button type="submit" className={`filters__submit-btn ${isSendResultActive ? 'filters__submit-btn_active' : ''}`}>
                Подставить в расчет
            </button>
            <div className={`filters__result ${isSendResultActive ? 'filters__result_active' : ''}`}>
                {ratioBreakResult}
            </div>
        </div>
    )

    const torgResultBox = (
        <div className="filters__submit-res-box">
            <button type="submit" className='filters__submit-not-btn'>
            Значение корректировки
            </button>
            <div className='filters__result-not-btn'>
                {ratioTorgResult}
            </div>
        </div>
    )

    const handlerChildrens = () => {        
        switch (correctionType) {
            case "Скидка на торг (%)":
                setRegionsArr(REGIONS_TORG);
                setYearsArr(YEARS_TORG);
                setPurposesLand(PURPOSE_TORG_LAND);
                setPurposesBuild(PURPOSE_TORG_BUILD);
                setIsShowInterval(true); 
                setIsShowMarketType(true);
                setIsShowBreakResult(false);
                setIsShowTorgResult(true);
                break;
            case "Общая площадь (коэффициент торможения)":
                setRegionsArr(REGIONS_BREAK);
                setYearsArr(YEARS_BREAK);
                setPurposesLand(PURPOSE_BREAK_LAND);
                setPurposesBuild(PURPOSE_BREAK_BUILD);
                setIsShowInterval(true); 
                setIsShowMarketType(false);
                setIsShowBreakResult(true);
                setIsShowTorgResult(false);
                break;
            default:
                setRegionsArr([]);
                setYearsArr([]);
                setPurposesLand([]);
                setPurposesBuild([]);
                setIsShowInterval(false); 
                setIsShowMarketType(false);
                setIsShowBreakResult(false);
                setIsShowTorgResult(false);
        }
    };

    // const childrenYearDrop = () => {
    //     switch (correctionType) {
    //         case "Скидка на торг (%)":
    //             return (<ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={YEARS_TORG}/>);
    //         case "Общая площадь (коэффициент торможения)":
    //             return (<ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={YEARS_BREAK}/>);
    //         default:
    //             return (<></>);
    //     }
    // };

    useEffect(() => {
        handlerChildrens();    
    }, [correctionType, purpose]);

    return (
        <form className="filters" onSubmit={getRatio}>
            <h2 className="filters__title">Выбор корректировки</h2>
            {/* <p className="filters__subtitle">Выберите параметры:</p> */}
            {/* <select className="filters__drop-menu" name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                {YEARS.map((year) => {
                    return (<option value={year} selected={year === YEARSELECTED}>{year}</option>)
                })}                
            </select> */}
            <fieldset className="filters__form">                
                <FilterElement title="Рыночный показатель/корректировка" children={chooseCorrectionType} childrenDrop={childrenCorrectionTypeDrop} />
                <FilterElement title="Область (регион)" children={chooseDistrict} childrenDrop={childrenRegionDrop} />
                <FilterElement title="Период (год)" children={chooseYear} childrenDrop={childrenYearDrop} />                
                <FilterElement title="Тип недвижимости" children={chooseRealtyType}/>
                <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'земля' ?
                        fillRadioBox(purposesLand, handlePurposeChange) :
                        fillRadioBox(purposesBuild, handlePurposeChange)}
                />
                {/* {correctionType === 'Скидка на торг (%)' && <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'земля' ? chooseTorgPurposeLand : chooseTorgPurposeBuild}
                />}
                {correctionType === 'Общая площадь (коэффициент торможения)' && <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'земля' ? chooseBreakPurposeLand : chooseBreakPurposeBuild}
                />} */}
                {isShowMarketType && <FilterElement title="Тип рынка" children={chooseMarketType} /> }                
                {isShowInterval && <FilterElement title="Вид интервала значений" children={isShowTorgResult ? paramsChooseIntervalTypeTorg : paramsChooseIntervalTypeBreak} />}
                <FilterElement title="Значение коэффициента торможения" children={intervalType === 'dov' ? chooseMinMaxMidTypeDov : chooseMinMaxMidTypeExt} />                
                {/* <FilterElement title="Значение коэффициента торможения" children={chooseMinMaxMidType} /> */}

                {/* {isNotActive && <FilterElement title="Площадь, м2" />} */}
                {/* {isLandIndustOn && <FilterElement title={`Площадь, м2: земельный участок, индустр.`} children={chooseSquereLandIndustry} />} */}
                {/* {isLandCommOn && <FilterElement title="Площадь, м2: земельный участок, прочее " children={chooseSquereLandOther} />} */}
                {/* {isBuildIndustOn && <FilterElement title="Площадь, м2: помещения, здания, индустр." children={chooseSquereBuildingIndustry} />} */}
                {/* {isBuildCommOn && <FilterElement title="Площадь, м2. помещения, здания, прочее" children={chooseSquereBuildingOther} />} */}

            </fieldset>
            {isShowTorgResult && torgResultBox}
            {isShowBreakResult && breakResultBox}
            {/* <div className="filters__submit-res-box">
                <button type="submit" className={`filters__submit-btn ${isSendResultActive ? 'filters__submit-btn_active' : ''}`}>
                    Подставить в расчет
                </button>
                <div className={`filters__result ${isSendResultActive ? 'filters__result_active' : ''}`}>
                    {ratioBreakResult}
                </div>
            </div> */}
        </form>
    );
}

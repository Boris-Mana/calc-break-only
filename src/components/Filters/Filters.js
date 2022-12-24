import { useEffect, useState } from "react";
import FilterElement from "./FitlerElement/FitlerElement";

import ChildrenForDropMenu from './Children/ChildrenForDropMenu';
import ChildrenDropMenuIn from "./Children/ChildrenDropMenuIn";
import ChildrenRadioInItem from "./Children/ChildrenRadioInItem";

import calculateBreakRatio from "../../utils/calculateBreakRatio";

import {
    // YEARSELECTED,
    // REGIONSELECTED,
    CORRECTIONSELECTED,
} from '../../utils/Constants/ConstantsCommon'

import { YEARS_BREAK, PURPOSE_BREAK_LAND, PURPOSE_BREAK_BUILD, REGIONS_BREAK } from "../../utils/Constants/ConstantsBreak";

export default function Calc({ onSendResult, resutToShow }) {
    const [isSendResultActive, setIsSendResultActive] = useState(false);

    const [correctionType, setCorrectionType] = useState(CORRECTIONSELECTED);
    const [year, setYear] = useState(YEARS_BREAK[0].value);
    const [yearComment, setYearComment] = useState(YEARS_BREAK[0].comment);
    // const [yearBread, setYearBread] = useState(YEARSELECTED);
    const [region, setRegion] = useState(REGIONS_BREAK[0].value);
    // const [regionBread, setRegionBread] = useState(REGIONSELECTED);
    const [realtyType, setRealtyType] = useState('');
    const [realtyTypeBread, setRealtyTypeBread] = useState('');
    const [purpose, setPurpose] = useState('');
    const [purposeBread, setPurposeBread] = useState('');
    const [minMaxMid, setMinMaxMid] = useState('');
    const [minMaxMidBread, setMinMaxMidBread] = useState('');
    const [intervalType, setIntervalType] = useState('');
    const [intervalTypeBread, setIntervalTypeBread] = useState('');
        
    const [ratioBreakResult, setRatioBreakResult] = useState('');    

    const handleYearChange = (category) => {
        const year_index = YEARS_BREAK.findIndex(item => item.value === category);
        setYear(category);
        setYearComment(YEARS_BREAK[year_index].comment)
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
        // setPurpose('');
        // console.log('Селектор типа недв', e.target.value);
    };

    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
        // console.log('Селектор назначения', e.target.value);
    };

    const handleInterval = (e) => {
        // console.log('Селектор интервала', e.target.value);
        setIntervalType(e.target.value);
        setMinMaxMid('');
    };

    const handleSetMinMaxMidl = (e) => {
        // console.log('Селектор мин-макс', e.target.value);
        setMinMaxMid(e.target.value);
    };

    const calcBreakRatio = () => {
        const breakRatio = calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid)
        setRatioBreakResult(breakRatio);
        handleSendResultButton();
    };

    const getRatio = (e) => {
        e.preventDefault();
        onSendResult(ratioBreakResult);
        setRatioBreakResult('');
    };

    useEffect(() => {
        calcBreakRatio();
    }, [year, region, realtyType, purpose, minMaxMid, intervalType, ratioBreakResult, isSendResultActive]);

    const fillRadioBox = (dataArray, handler) => {
        return (
            <>
                {dataArray.map((item, i) => {
                    return (<ChildrenRadioInItem name={item.name} value={item.value} text={item.text} isDisable={!item.isOn} handlerOnChange={handler} />)
                })}
            </>
        )
    };

    const chooseYear = <ChildrenForDropMenu name="year" value={year} />
    const chooseDistrict = <ChildrenForDropMenu name="region" value={region} />
    const chooseRealtyType = (
        <>
            <ChildrenRadioInItem name='type' value='земля' text='Земельные участки' handlerOnChange={handleRealTypeChange} />
            <ChildrenRadioInItem name='type' value='помещения' text='Здания, нежилые помещения' handlerOnChange={handleRealTypeChange} />
        </>
    );

    const paramsMinMaxChooseDoverInterval = [
        { name: 'use', value: 'минимальное', text: 'минимальное', isOn: true },
        { name: 'use', value: 'среднее', text: 'среднее', isOn: true },
        { name: 'use', value: 'максимальное', text: 'максимальное', isOn: true },
    ];

    const paramsChooseIntervalTypeBreak = (
        <>
            <ChildrenRadioInItem name='interval' value='Доверительный' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval} />
            <ChildrenRadioInItem name='interval' value='Расширенный' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} />
        </>
    );

    const paramsMinMaxChooseExtInterval = [
        { name: 'use', value: 'минимальное', text: 'минимальное', isOn: false },
        { name: 'use', value: 'среднее', text: 'среднее', isOn: true },
        { name: 'use', value: 'максимальное', text: 'максимальное', isOn: false },
    ];

    const chooseMinMaxMidTypeDov = fillRadioBox(paramsMinMaxChooseDoverInterval, handleSetMinMaxMidl);
    const chooseMinMaxMidTypeExt = fillRadioBox(paramsMinMaxChooseExtInterval, handleSetMinMaxMidl);

    // const chooseMinMaxMidType = (
    //     <>
    //         <ChildrenRadioInItem name='use' value='min' text='минимальное' handlerOnChange={handleSetMinMaxMidl} />
    //         <ChildrenRadioInItem name='use' value='mid' text='среднее' handlerOnChange={handleSetMinMaxMidl} />
    //         <ChildrenRadioInItem name='use' value='max' text='максимальное' handlerOnChange={handleSetMinMaxMidl} />
    //     </>
    // );

    // const chooseIntervalType = (
    //     <>
    //         <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval} />
    //         <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} isDisable={true} />
    //     </>
    // );

    const childrenYearDrop = <ChildrenDropMenuIn value={year} handlerChange={handleYearChange} dataArray={YEARS_BREAK} />;
    const childrenRegionDrop = <ChildrenDropMenuIn value={region} handlerChange={handleRegionChange} dataArray={REGIONS_BREAK} />;

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

    return (
        <form className="filters" onSubmit={getRatio}>
            <h2 className="filters__title">Корректировка на общую площадь (коэффициент торможения)</h2>

            <fieldset className="filters__form">
                <FilterElement title="Область (регион)" children={chooseDistrict} childrenDrop={childrenRegionDrop} />
                <FilterElement title="Дата актуальности исследования" comment={yearComment} children={chooseYear} childrenDrop={childrenYearDrop} />
                <FilterElement title="Тип недвижимости" children={chooseRealtyType} />
                <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'земля' ?
                        fillRadioBox(PURPOSE_BREAK_LAND, handlePurposeChange) :
                        fillRadioBox(PURPOSE_BREAK_BUILD, handlePurposeChange)}
                />

                <FilterElement title="Вид интервала значений" children={paramsChooseIntervalTypeBreak} />
                <FilterElement title="Значение коэффициента торможения" children={intervalType === 'Доверительный' ? chooseMinMaxMidTypeDov : chooseMinMaxMidTypeExt} />

            </fieldset>
            <h3 className="filters__breadscr-title">
                Выбраны параметры:
            </h3>
            <div className="filters__breadscr-container">
                <p className="filters__breadscr-text">{`${year} > `}</p>
                <p className="filters__breadscr-text">{`${region} > `}</p>
                <p className="filters__breadscr-text">{`${realtyType} > `}</p>
                <p className="filters__breadscr-text">{`${purpose} > `}</p>
                <p className="filters__breadscr-text">{`${intervalType} > `}</p>
                <p className="filters__breadscr-text">{`${minMaxMid}`}</p>                
            </div>
            {breakResultBox}
        </form>
    );
}

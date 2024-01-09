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

export default function Filters({
    year,
    yearComment,
    region,
    realtyType,
    purpose,
    intervalType,
    // minMaxMid,
    // ratioCalc,
    onGetResult,
    onSetYear,
    onSetRegion,
    onSetRealtyType,
    onSetPupose,
    onSetInterval,
    onSetMinMax,    
    onReset,
    onSend, 
    isResultActive,
    isResultToShow,
    resutToShow,
}) {
    const [isSendResultActive, setIsSendResultActive] = useState(false);

    const [correctionType, setCorrectionType] = useState(CORRECTIONSELECTED);        
        
    const [ratioBreakResult, setRatioBreakResult] = useState('');    

    // const handleYearChange = (category) => {
    //     const year_index = YEARS_BREAK.findIndex(item => item.value === category);
    //     setYear(category);
    //     setYearComment(YEARS_BREAK[year_index].comment)
    //     // console.log('Сработал селектор', category);
    // };

    // const handleRegionChange = (category) => {
    //     setRegion(category);        
    //     // console.log('Сработал селектор', category);
    // };

    const handleSendResultButton = () => {
        if (ratioBreakResult === 'н/д') {
            setIsSendResultActive(false);
        } else {
            setIsSendResultActive(true);
        }
    };    

    // const handleRealTypeChange = (e) => {        
    //     // e.preventDefault();
    //     setRealtyType(e.target.value);        
    //     // setPurpose('');
    //     // console.log('Селектор типа недв', e.target.value);
    // };

    // const handlePurposeChange = (e) => {
    //     setPurpose(e.target.value);
    //     // console.log('Селектор назначения', e.target.value);
    // };

    // const handleInterval = (e) => {
    //     // console.log('Селектор интервала', e.target.value);
    //     setIntervalType(e.target.value);
    //     setMinMaxMid('');
    // };

    // const handleSetMinMaxMidl = (e) => {
    //     // console.log('Селектор мин-макс', e.target.value);
    //     setMinMaxMid(e.target.value);
    // };

    const getRatio = (e) => {
        e.preventDefault();
        // console.log('Послали просим выдать коэфф');
        onGetResult();        
        // setIsSendResultActive(false);    
    };   


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
            <ChildrenRadioInItem name='type' value='Земля' text='Земельные участки' handlerOnChange={onSetRealtyType} />
            <ChildrenRadioInItem name='type' value='Здания, помещения' text='Здания, нежилые помещения' handlerOnChange={onSetRealtyType} />
        </>
    );

    const paramsMinMaxChooseDoverInterval = [
        { name: 'use', value: 'Минимальное', text: 'Минимальное', isOn: true },
        { name: 'use', value: 'Среднее', text: 'Среднее', isOn: true },
        { name: 'use', value: 'Максимальное', text: 'Максимальное', isOn: true },
    ];

    const paramsChooseIntervalTypeBreak = (
        <>
            <ChildrenRadioInItem name='interval' value='Доверительный' text='Доверительный' handlerOnChange={onSetInterval} />
            <ChildrenRadioInItem name='interval' value='Расширенный' text='Расширенный' handlerOnChange={onSetInterval} />
        </>
    );

    const paramsMinMaxChooseExtInterval = [
        { name: 'use', value: 'Минимальное', text: 'Минимальное', isOn: true },
        { name: 'use', value: 'Среднее', text: 'Среднее', isOn: true },
        { name: 'use', value: 'Максимальное', text: 'Максимальное', isOn: true },
    ];


    const chooseMinMaxMidTypeDov = fillRadioBox(paramsMinMaxChooseDoverInterval, onSetMinMax);
    const chooseMinMaxMidTypeExt = fillRadioBox(paramsMinMaxChooseExtInterval, onSetMinMax);

    // const chooseMinMaxMidType = (
    //     <>
    //         <ChildrenRadioInItem name='use' value='min' text='минимальное' handlerOnChange={onSetMinMax} />
    //         <ChildrenRadioInItem name='use' value='mid' text='среднее' handlerOnChange={onSetMinMax} />
    //         <ChildrenRadioInItem name='use' value='max' text='максимальное' handlerOnChange={onSetMinMax} />
    //     </>
    // );

    // const chooseIntervalType = (
    //     <>
    //         <ChildrenRadioInItem name='interval' value='dov' text='Доверительный (с вероятностью 95%, 2σ нормального распределения)' handlerOnChange={handleInterval} />
    //         <ChildrenRadioInItem name='interval' value='ext' text='Расширенный (интервал возможных значений, от минимума до максимума)среднее' handlerOnChange={handleInterval} isDisable={true} />
    //     </>
    // );

    const childrenYearDrop = <ChildrenDropMenuIn value={year} handlerChange={onSetYear} dataArray={YEARS_BREAK} />;
    const childrenRegionDrop = <ChildrenDropMenuIn value={region} handlerChange={onSetRegion} dataArray={REGIONS_BREAK} />;

    const breakResultBox = (
        <div className="filters__submit-res-box">
            <button type="reset" onClick={onReset} className='filters__reset-btn'>
                Сбросить фильтры
            </button>
            <button type="submit" className={`filters__submit-btn ${isResultActive ? 'filters__submit-btn_active' : ''}`}>
                Получить результат
            </button>            
            <div className={`filters__result ${isSendResultActive ? 'filters__result_active' : ''}`}>
                {isResultToShow && resutToShow}
                {/* {ratioBreakResult} */}
            </div>
            <button type="send" onClick={onSend} className={`filters__send-btn ${isSendResultActive ? 'filters__submit-btn_active' : ''}`}>
                Подставить в расчет
            </button>            
        </div>
    )

    return (
        <form className="filters" onSubmit={getRatio}>
            <h2 className="filters__title">Определение значения коэффициента торможения</h2>

            <fieldset className="filters__form">
                <FilterElement title="Область (регион)" children={chooseDistrict} childrenDrop={childrenRegionDrop} />
                <FilterElement title="Дата актуальности исследования" comment={yearComment} children={chooseYear} childrenDrop={childrenYearDrop} />
                <FilterElement title="Тип недвижимости" children={chooseRealtyType} />
                {(realtyType !== '') && <FilterElement
                    title={`Функциональное назначение (вид использования)`}
                    children={realtyType === 'Земля' ?
                        fillRadioBox(PURPOSE_BREAK_LAND, onSetPupose) :
                        fillRadioBox(PURPOSE_BREAK_BUILD, onSetPupose)}
                />}

                {(purpose !== '') && <FilterElement title="Вид интервала значений" children={paramsChooseIntervalTypeBreak} />}
                {(intervalType !== '') && <FilterElement title="Значение коэффициента торможения" children={intervalType === 'Доверительный' ? chooseMinMaxMidTypeDov : chooseMinMaxMidTypeExt} />}

            </fieldset>            
            {breakResultBox}
        </form>
    );
}

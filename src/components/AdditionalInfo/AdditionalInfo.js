import { useState } from "react";
import test_table from '../../images/testTable.png'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";


export default function AdditionalInfo({year, region, realtyType, purpose, intervalType, minMaxMid}) {
    const [isAdditionShow, setIsAdditionShow] = useState(false);

    const handleShowAddition = () => {
        setIsAdditionShow(!isAdditionShow);
    };

    const toShow = (
        <>
            <p>Данная секция находится в стадии создания. Представленное изображение - для демонстрации</p>
            <img className="additional__table" src={test_table} alt='Таблица с коэффициентами'></img>
        </>
    )

    return (
        <div className="additional">
            <Breadcrumbs year={year} region={region} realtyType={realtyType} purpose={purpose} intervalType={intervalType} minMaxMid={minMaxMid} />
            <button className="additional__button" onClick={handleShowAddition}>{isAdditionShow ? 'Скрыть шахматную таблицу' : 'Показать шахматную таблицу'} </button>
            {isAdditionShow && toShow}
        </div>
    )
};
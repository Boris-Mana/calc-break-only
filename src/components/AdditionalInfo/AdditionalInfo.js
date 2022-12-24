import { useState } from "react";
import test_table from '../../images/test_table.png'


export default function AdditionalInfo() {
    const [isAdditionShow, setIsAdditionShow] = useState(false);

    const handleShowAddition = () => {
        setIsAdditionShow(!isAdditionShow);
    };

    const toShow = (
        <>
            <p>Данная секция находится в стадии создания. Представленное изображение - для демонстрации</p>
            <img className="additional__table" src={test_table}></img>
        </>
    )

    return (
        <div className="additional">
            <button className="additional__button" onClick={handleShowAddition}>{isAdditionShow ? 'Скрыть шахматную таблицу' : 'Показать шахматную таблицу'} </button>
            {isAdditionShow && toShow}
        </div>
    )
};
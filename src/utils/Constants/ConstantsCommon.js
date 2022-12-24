const CORRECTIONTYPES = [
    {value: 'Скидка на торг (%)', 'isOn': true}, 
    {value: 'Общая площадь (коэффициент торможения)', 'isOn': true},
    {value: 'Срок экспозиции (мес.)', 'isOn': false},
    {value: 'Передаваемые имущественные права (доля от 1)', 'isOn': false},
    {value: 'Наличие и состав ограничений (доля от 1)', 'isOn': false},
    {value: 'Наличие и состав коммуникаций (доля от 1)', 'isOn': false},
    {value: 'Наличие железнодорожной ветки (доля от 1)', 'isOn': false},
    {value: 'Возможность застройки (доля от 1)', 'isOn': false},
    {value: 'Визуализация и доступность (шахматка, зависимость)', 'isOn': false},
    {value: 'Этаж расположения (шахматка, зависимость)', 'isOn': false},
    {value: 'Физическое состояние (шахматка, зависимость)', 'isOn': false},
    {value: 'Недозагрузка арендопригодной площади', 'isOn': false},
    {value: 'Операционные расходы (% от ПВД)', 'isOn': false},
    {value: 'Прибыль предпринимателя (%)', 'isOn': false},
    {value: 'Ставка капитализации (%)', 'isOn': false},
    {value: 'Доля земельного участка в ЕОН (%)', 'isOn': false},    
];

const REGIONS = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

// const YEARSELECTED = '2022';
// const REGIONSELECTED = 'Воронежская';
const CORRECTIONSELECTED = 'Общая площадь (коэффициент торможения)';

export {
    CORRECTIONTYPES,    
    REGIONS,    
    // YEARSELECTED,
    // REGIONSELECTED,
    CORRECTIONSELECTED,

};
const YEARS_BREAK = [
    {value: '01.01.2023', 'isOn': true, comment: 'Период исследований: январь-декабрь 2022'}, 
    {value: '01.01.2022', 'isOn': true, comment: 'Период исследований: январь-декабрь 2021'},
    {value: '01.01.2021', 'isOn': true, comment: 'Период исследований: январь-декабрь 2020'},
    {value: '01.01.2020', 'isOn': true, comment: 'Период исследований: январь-декабрь 2019'},
];

const PURPOSE_BREAK_LAND = [    
    {name: 'purpose', value: 'коммерческая застройка', text: 'коммерческая застройка (торгово-офисная, МЖС, объекты рекреации)', isOn: true},
    {name: 'purpose', value: 'индустриальная застройка', text: 'индустриальная (производственно-складская) застройка', isOn: true},
    {name: 'purpose', value: 'под придорожный сервис', text: 'под объекты придорожного сервиса', isOn: true},
    
];

const PURPOSE_BREAK_BUILD = [    
    {name: 'purpose', value: 'торг-офис', text: 'торгово-офисное', isOn: true},
    {name: 'purpose', value: 'производственно-складское', text: 'производственно-складское', isOn: true},
    {name: 'purpose', value: 'прочее коммерческое', text: 'прочее коммерческое', isOn: true},
];

const REGIONS_BREAK = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

const YEARSELECTED_BREAK = '01.01.2023';

export {  
    YEARS_BREAK,
    PURPOSE_BREAK_LAND,
    PURPOSE_BREAK_BUILD,
    REGIONS_BREAK,
    YEARSELECTED_BREAK,
    };
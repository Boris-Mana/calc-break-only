const YEARS_BREAK = [
    {value: '2022', 'isOn': true}, 
    {value: '2021', 'isOn': true},
    {value: '2020', 'isOn': true},
    {value: '2019', 'isOn': true},
];

const PURPOSE_BREAK_LAND = [
    {name: 'purpose', value: 'многоэт-жил', text: 'многоэтажное жилищное строительство', isOn: false},    
    {name: 'purpose', value: 'торг-офис-застрой', text: 'коммерческая (торгово-офисная) застройка', isOn: true},
    {name: 'purpose', value: 'произв-застрой', text: 'индустриальная (производственно-складская) застройка', isOn: true},
    {name: 'purpose', value: 'придорож', text: 'под объекты придорожного сервиса', isOn: true},
    {name: 'purpose', value: 'отдых', text: 'под объекты рекреации', isOn: false},
    {name: 'purpose', value: 'сельхоз', text: 'под объекты сельскохозяйственного назначения', isOn: false},
];

const PURPOSE_BREAK_BUILD = [    
    {name: 'purpose', value: 'торг-офис', text: 'торгово-офисное', isOn: true},
    {name: 'purpose', value: 'производство', text: 'производственно-складское', isOn: true},
    {name: 'purpose', value: 'прочее', text: 'прочее коммерческое', isOn: true},
];

const REGIONS_BREAK = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

export {  
    YEARS_BREAK,
    PURPOSE_BREAK_LAND,
    PURPOSE_BREAK_BUILD,
    REGIONS_BREAK,
    };
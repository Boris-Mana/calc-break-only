const YEARS_BREAK = [
    {value: '01.01.2026', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2026`}, 
    {value: '01.01.2025', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2025`}, 
    {value: '01.01.2024', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2024`}, 
    {value: '01.01.2023', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2023`}, 
    {value: '01.01.2022', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2022`},
    {value: '01.01.2021', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2021`},
    {value: '01.01.2020', 'isOn': true, comment: `Актуально для даты оценки\nв период: с 1 янв по 31 дек 2020`},
];

const PURPOSE_BREAK_LAND = [    
    {name: 'purpose', value: 'Коммерческая застройка', text: 'Коммерческая застройка (торгово-офисная, МЖС, объекты рекреации)', isOn: true},
    {name: 'purpose', value: 'Индустриальная застройка', text: 'Индустриальная застройка (производственно-складская)', isOn: true},
    {name: 'purpose', value: 'Под придорожный сервис', text: 'Под объекты придорожного сервиса', isOn: true},
    {name: 'purpose', value: 'Сельхоз', text: 'Сельскохозяйственное использование (пашни, пастбища и пр.)', isOn: true},
    
];

const PURPOSE_BREAK_BUILD = [    
    {name: 'purpose', value: 'Торг-офис', text: 'Торгово-офисное', isOn: true},
    {name: 'purpose', value: 'Производственно-складское', text: 'Производственно-складское', isOn: true},
    {name: 'purpose', value: 'Прочее коммерческое', text: 'Прочее коммерческое', isOn: true},
];

const REGIONS_BREAK = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

const YEARSELECTED_BREAK = '01.01.2026';

export {  
    YEARS_BREAK,
    PURPOSE_BREAK_LAND,
    PURPOSE_BREAK_BUILD,
    REGIONS_BREAK,
    YEARSELECTED_BREAK,
    };
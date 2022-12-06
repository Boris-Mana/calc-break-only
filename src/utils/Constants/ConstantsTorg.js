const YEARS_TORG = [
    {value: '2022', 'isOn': true}, 
    {value: '2021', 'isOn': false},
    {value: '2020', 'isOn': false},
    {value: '2019', 'isOn': false},
];

const PURPOSE_TORG_LAND = [
    {name: 'purpose', value: 'т_з_ижс', text: 'индивидуальное жилищное строительство, в т.ч. ЛПХ, ДНП, СНТ', isOn: true},
    {name: 'purpose', value: 'т_з_многокв-жс', text: 'многоквартирное жилищное строительство', isOn: true},
    {name: 'purpose', value: 'т_з_торг-офис-застрой', text: 'коммерческая (торгово-офисная) застройка', isOn: true},
    {name: 'purpose', value: 'т_з_произв-застрой', text: 'индустриальная (производственно-складская) застройка', isOn: true},
    {name: 'purpose', value: 'т_з_придорож', text: 'под объекты придорожного сервиса', isOn: true},
    {name: 'purpose', value: 'т_з_отдых', text: 'под объекты рекреации', isOn: true},
    {name: 'purpose', value: 'т_з_сельхоз', text: 'под объекты сельскохозяйственного назначения', isOn: true},
];

const PURPOSE_TORG_BUILD = [
    {name: 'purpose', value: 'т_пом_класс-офис', text: 'высококлассное торгово-офисное', isOn: false},
    {name: 'purpose', value: 'т_пом_г_офис', text: 'низкоклассное торгово-офисное', isOn: false},
    {name: 'purpose', value: 'т_пом_уличное', text: 'объекты стрит-ритейл', isOn: false},
    {name: 'purpose', value: 'т_пом_придор', text: 'объекты придорожного сервиса', isOn: false},
    {name: 'purpose', value: 'т_пом_класс-произв', text: 'высококлассное производственно-складское', isOn: false},
    {name: 'purpose', value: 'т_пом_г-произв', text: 'низкоклассное производственно-складское', isOn: false},
    {name: 'purpose', value: 'т_пом_отдых', text: 'под объекты рекреации', isOn: false},
    {name: 'purpose', value: 'т_пом_сельхоз', text: 'под объекты сельскохозяйственного назначения', isOn: false},
];

const REGIONS_TORG = [
    {value: 'Воронежская', 'isOn': true},
    {value: 'Белгородская', 'isOn': true},
    {value: 'Липецкая', 'isOn': true},
    {value: 'Курская', 'isOn': true},
    {value: 'Тамбовская', 'isOn': true},    
];

export {
    YEARS_TORG,
    PURPOSE_TORG_LAND,
    PURPOSE_TORG_BUILD,
    REGIONS_TORG,
};
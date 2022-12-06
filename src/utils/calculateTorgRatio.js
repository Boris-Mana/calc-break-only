export default function calculateTorgRatio(year, region, realtyType, purpose, marketType, intervalType, minMaxMid) {
    let res;

    // console.log('В выбор коэфф:', year, region, realtyType, purpose, marketType, intervalType, minMaxMid);

    const getResultIfMinMidMax = (kMin, kMid, kMax) => {
        // console.log('сработал мин-мид-макс');
        let k;
        switch (minMaxMid) {
            case 'min':
                return kMin;
            case 'mid':
                return kMid;
            default:
                return kMax;
        };
    };

    const getDovInterval = () => {
        if (year === '2022') {
            if (region === 'Воронежская') {
                if (realtyType === 'земля') {
                    if (purpose === 'т_з_ижс') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('3.0%', '5.0%', '7.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_многокв-жс') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('5.0%', '9.0%', '13.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_торг-офис-застрой') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('4.0%', '7.0%', '10.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_произв-застрой') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('5.0%', '8.0%', '11.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_придорож') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('4.0%', '8.0%', '12.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_отдых') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('8.0%', '15.0%', '22.0%');
                        } else {
                            res = 'н/д';
                        }
                    } else if (purpose === 'т_з_сельхоз') {
                        if (marketType === 'активный') {
                            res = getResultIfMinMidMax('6.0%', '12.0%', '18.0%');
                        } else {
                            res = 'н/д';
                        }
                    }
                } else {
                    res = 'н/д';
                }
            }
        } else {
            res = 'н/д'
        }
        return res;
    };

    if (intervalType === 'dov') {
        return getDovInterval();
    // } else if (intervalType === 'ext') {
    //     return getExtInterval();
    } else {
        return 'н/д'
    }    
    
}
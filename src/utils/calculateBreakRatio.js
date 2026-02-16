export default function calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid) {
    let res;

    // console.log('В выбор коэфф:', year, region, realtyType, purpose, intervalType, minMaxMid);

    const getResultIfMinMidMax = (kMin, kMid, kMax) => {
        // console.log('сработал мин-мид-макс');
        // let k;
        switch (minMaxMid) {
            case 'Минимальное':
                return kMin;                
            case 'Среднее':
                return kMid; 
            case 'Максимальное':
                return kMax;
            default :
                return 'н/д';
        };
    };

    const getDovInterval = () => {
        // console.log('Сработал getDovInterval');
        if (year === '01.01.2026') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.112, -0.139, -0.167);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.139, -0.166, -0.194);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.146, -0.173, -0.201);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.098, -0.126, -0.154);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.063, -0.091, -0.119);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.095, -0.122, -0.150);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.087, -0.115, -0.143);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.119, -0.147, -0.175);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.150, -0.178, -0.206);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.134, -0.162, -0.190);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.105, -0.133, -0.161);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.069, -0.097, -0.125);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.081, -0.109, -0.137);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.117, -0.144, -0.172);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.154, -0.182, -0.210);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.141, -0.169, -0.196);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.110, -0.138, -0.165);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.072, -0.100, -0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.096, -0.124, -0.152);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.112, -0.140);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.110, -0.137, -0.165);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.145, -0.173, -0.201);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.142, -0.170, -0.197);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.108, -0.135, -0.163);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.068, -0.095, -0.123);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.101, -0.129, -0.156);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.086, -0.114, -0.142);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.115, -0.143, -0.170);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.142, -0.169, -0.197);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.144, -0.171, -0.199);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.111, -0.139, -0.166);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.072, -0.100, -0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.094, -0.121, -0.149);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.090, -0.118, -0.145);
                    }
                }
            }
        } else if (year === '01.01.2025') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.117, -0.144, -0.172);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.134, -0.162, -0.189);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.150, -0.178, -0.205);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.063, -0.091, -0.119);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.069, -0.097, -0.124);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.100, -0.128, -0.155);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.086, -0.114, -0.142);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.124, -0.152, -0.180);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.145, -0.173, -0.201);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.138, -0.166, -0.194);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.068, -0.096, -0.124);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.075, -0.103, -0.131);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.094, -0.122, -0.150);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.080, -0.108, -0.136);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.122, -0.149, -0.177);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.149, -0.177, -0.204);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.145, -0.173, -0.201);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.072, -0.099, -0.127);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.078, -0.106, -0.133);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.102, -0.129, -0.157);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.084, -0.111, -0.139);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.114, -0.142, -0.170);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.141, -0.168, -0.196);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.146, -0.174, -0.201);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.070, -0.098, -0.126);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.073, -0.101, -0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.106, -0.134, -0.162);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.120, -0.147, -0.175);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.137, -0.165, -0.192);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.148, -0.176, -0.203);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.072, -0.100, -0.128);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.078, -0.106, -0.133);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.099, -0.127, -0.154);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.144);
                    }
                }
            }
        } else if (year === '01.01.2024') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.113, -0.141, -0.168);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.125, -0.153, -0.181);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.138, -0.166, -0.194);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.069, -0.097, -0.125);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.094, -0.122, -0.150);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.096, -0.124, -0.152);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.149, -0.177);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.133, -0.161, -0.189);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.126, -0.154, -0.182);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.076, -0.104, -0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.088, -0.116, -0.144);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.146, -0.174);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.139, -0.167, -0.195);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.15, -0.178);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.096, -0.124, -0.152);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.083, -0.111, -0.139);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.108, -0.136, -0.164);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.138, -0.166, -0.194);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.129, -0.157, -0.185);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.087, -0.115, -0.143);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.074, -0.102, -0.130);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.147);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.113, -0.141, -0.169);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.127, -0.155, -0.183);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.126, -0.154, -0.182);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.090, -0.117, -0.145);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.093, -0.121, -0.149);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    }
                }
            }
        } else if (year === '01.01.2023') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.113, -0.141, -0.168);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.125, -0.153, -0.181);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.138, -0.166, -0.194);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.069, -0.097, -0.125);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.094, -0.122, -0.150);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.096, -0.124, -0.152);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.149, -0.177);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.133, -0.161, -0.189);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.126, -0.154, -0.182);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.076, -0.104, -0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.088, -0.116, -0.144);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.146, -0.174);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.139, -0.167, -0.195);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.15, -0.178);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.096, -0.124, -0.152);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.083, -0.111, -0.139);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.108, -0.136, -0.164);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.138, -0.166, -0.194);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.129, -0.157, -0.185);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.087, -0.115, -0.143);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.074, -0.102, -0.130);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.147);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.113, -0.141, -0.169);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.127, -0.155, -0.183);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.126, -0.154, -0.182);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.090, -0.117, -0.145);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.079, -0.107, -0.135);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.093, -0.121, -0.149);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    }
                }
            }
        } else if (year === '01.01.2022') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.109, -0.136, -0.164);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.122, -0.150, -0.178);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.131, -0.159, -0.186);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.081, -0.109, -0.137);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.065, -0.093, -0.120);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.147);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.088, -0.116, -0.144);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.116, -0.144, -0.172);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.133, -0.160, -0.188);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.120, -0.148, -0.176);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.087, -0.115, -0.143);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.071, -0.099, -0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.086, -0.114, -0.142);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.082, -0.110, -0.138);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.114, -0.141, -0.169);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.136, -0.164, -0.191);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.127, -0.154, -0.182);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.147);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.074, -0.101, -0.129   );
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.093, -0.121, -0.149);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.086, -0.114, -0.141);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.107, -0.134, -0.162);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.128, -0.156, -0.184);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.127, -0.155, -0.183);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.069, -0.097, -0.125);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.097, -0.125, -0.153);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.088, -0.115, -0.143);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.112, -0.140, -0.167);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.125, -0.152, -0.180);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.129, -0.157, -0.185);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.092, -0.120, -0.147);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.074, -0.101, -0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.091, -0.118, -0.146);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.146);
                    }
                }
            }
        } else if (year === '01.01.2021') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.113, -0.140, -0.168);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.127, -0.155, -0.182);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.135, -0.163, -0.191);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.077, -0.105, -0.133);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.067, -0.095, -0.123);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.095, -0.123, -0.151);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.091, -0.119, -0.147);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.120, -0.148, -0.176);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.138, -0.165, -0.193);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.125, -0.152, -0.180);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.083, -0.111, -0.138);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.074, -0.101, -0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.090, -0.118, -0.145);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.145, -0.173);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.141, -0.169, -0.197);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.131, -0.159, -0.186);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.087, -0.115, -0.142);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.076, -0.104, -0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.097, -0.125, -0.152);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.089, -0.116, -0.144);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.111, -0.138, -0.166);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.133, -0.161, -0.189);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.132, -0.160, -0.187);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.140);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.072, -0.100, -0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.101, -0.129, -0.157);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.091, -0.118, -0.146);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.116, -0.144, -0.171);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.130, -0.157, -0.185);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.134, -0.161, -0.189);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.088, -0.115, -0.143);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.076, -0.104, -0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.094, -0.122, -0.150);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.094, -0.122, -0.150);
                    }
                }
            }
        } else if (year === '01.01.2020') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.101, -0.128, -0.156);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.112, -0.140, -0.168);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.149, -0.177);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.084, -0.112, -0.140);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.060, -0.088, -0.116);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.084, -0.111, -0.139);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.082, -0.110, -0.138);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.108, -0.135, -0.163);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.122, -0.150, -0.178);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.112, -0.140, -0.167);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.090, -0.118, -0.146);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.066, -0.094, -0.121);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.079, -0.106, -0.134);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.077, -0.104, -0.132);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.105, -0.133, -0.161);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.126, -0.153, -0.181);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.118, -0.145, -0.173);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.095, -0.122, -0.150);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.068, -0.096, -0.124);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.141);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.080, -0.108, -0.135);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.099, -0.126, -0.154);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.146, -0.174);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.128, -0.156, -0.184);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.093, -0.120, -0.148);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.064, -0.092, -0.120);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.089, -0.117, -0.145);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.082, -0.109, -0.137);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.104, -0.131, -0.159);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.115, -0.143, -0.170);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.120, -0.148, -0.175);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.095, -0.123, -0.151);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.068, -0.096, -0.124);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.083, -0.111, -0.138);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.085, -0.113, -0.140);
                    }
                }
            }
        } else {
            res = 'н/д'
        }
        // return res
    };
    
    const getExtInterval = () => {
        // console.log('Сработал getExtInterval');
        if (year === '01.01.2026') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.098, -0.139, -0.215);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax( -0.111, -0.166, -0.263);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.128, -0.173, -0.249);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.086, -0.126, -0.198);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.046, -0.091, -0.134);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.071, -0.122, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.061, -0.115, -0.168);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.147, -0.224);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.132, -0.178, -0.272);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.111, -0.162, -0.235);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.080, -0.133, -0.206);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.051, -0.097, -0.142);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.068, -0.117, -0.195);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.055, -0.109, -0.160);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.090, -0.144, -0.222);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.134, -0.182, -0.274);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.119, -0.169, -0.241);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.085, -0.138, -0.213);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.055, -0.100, -0.144);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.084, -0.124, -0.200);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.062, -0.112, -0.162);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.080, -0.137, -0.215);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.116, -0.173, -0.265);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.107, -0.170, -0.230);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.079, -0.135, -0.213);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.049, -0.095, -0.141);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.080, -0.129, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.066, -0.114, -0.166);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.092, -0.143, -0.223);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.134, -0.169, -0.257);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.119, -0.171, -0.246);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.089, -0.139, -0.217);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.051, -0.100, -0.143);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.077, -0.121, -0.195);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.071, -0.118, -0.167);
                    }
                }
            }
        } else if (year === '01.01.2025') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.102, -0.144, -0.221);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.107, -0.162, -0.256);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.132, -0.178, -0.254);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.055, -0.091, -0.153);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.050, -0.097, -0.141);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.075, -0.128, -0.209);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.061, -0.114, -0.166);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.095, -0.152, -0.230);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.127, -0.173, -0.266);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.114, -0.166, -0.240);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.052, -0.096, -0.159);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.056, -0.103, -0.149);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.072, -0.122, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.054, -0.108, -0.159);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.094, -0.149, -0.228);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.129, -0.177, -0.268);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.173, -0.246);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.055, -0.099, -0.164);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.059, -0.106, -0.151);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.088, -0.129, -0.206);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.062, -0.111, -0.161);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.083, -0.142, -0.221);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.112, -0.168, -0.259);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.110, -0.174, -0.235);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.051, -0.098, -0.164);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.054, -0.101, -0.147);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.084, -0.134, -0.209);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.065, -0.113, -0.164);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.096, -0.147, -0.229);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.130, -0.165, -0.251);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.176, -0.252);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.058, -0.100, -0.167);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.056, -0.106, -0.150);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.081, -0.127, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.070, -0.117, -0.165);
                    }
                }
            }
        } else if (year === '01.01.2024') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.099, -0.141, -0.217);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.100, -0.153, -0.244);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.166, -0.240);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.069, -0.107, -0.173);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.051, -0.097, -0.141);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.071, -0.122, -0.201);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.068, -0.124, -0.178);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.092, -0.149, -0.226);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.117, -0.161, -0.250);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.104, -0.154, -0.225);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.065, -0.113, -0.180);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.057, -0.104, -0.150);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.067, -0.116, -0.194);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.054, -0.107, -0.158);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.146, -0.224);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.167, -0.255);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.103, -0.15, -0.218);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.069, -0.117, -0.186);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.060, -0.107, -0.152);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.083, -0.124, -0.199);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.061, -0.111, -0.161);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.079, -0.136, -0.214);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.110, -0.166, -0.256);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.098, -0.157, -0.215);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.064, -0.115, -0.186);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.054, -0.102, -0.148);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.072, -0.119, -0.189);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.065, -0.113, -0.164);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.141, -0.221);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.155, -0.238);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.104, -0.154, -0.225);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.072, -0.117, -0.190);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.057, -0.107, -0.151);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.077, -0.121, -0.195);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.070, -0.117, -0.166);
                    }
                }
            }
        } else if (year === '01.01.2023') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.099, -0.141, -0.217);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.100, -0.153, -0.244);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.122, -0.166, -0.240);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.069, -0.107, -0.173);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.051, -0.097, -0.141);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.071, -0.122, -0.201);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.068, -0.124, -0.178);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.092, -0.149, -0.226);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.117, -0.161, -0.250);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.104, -0.154, -0.225);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.065, -0.113, -0.180);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.057, -0.104, -0.150);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.067, -0.116, -0.194);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.054, -0.107, -0.158);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.146, -0.224);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.167, -0.255);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.103, -0.15, -0.218);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.069, -0.117, -0.186);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.060, -0.107, -0.152);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.083, -0.124, -0.199);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.061, -0.111, -0.161);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.079, -0.136, -0.214);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.110, -0.166, -0.256);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.098, -0.157, -0.215);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.064, -0.115, -0.186);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.054, -0.102, -0.148);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.072, -0.119, -0.189);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.065, -0.113, -0.164);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.141, -0.221);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.155, -0.238);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.104, -0.154, -0.225);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.072, -0.117, -0.190);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.057, -0.107, -0.151);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.077, -0.121, -0.195);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.070, -0.117, -0.166);
                    }
                }
            }
        } else if (year === '01.01.2022') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.095, -0.136, -0.211);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.098, -0.150, -0.240);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.115, -0.159, -0.230);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.071, -0.109, -0.176);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.047, -0.093, -0.136);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.069, -0.119, -0.197);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.062, -0.116, -0.169);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.088, -0.144, -0.220);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.116, -0.160, -0.249);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.099, -0.148, -0.218);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.066, -0.115, -0.183);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.053, -0.099, -0.144);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.066, -0.114, -0.191);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.056, -0.110, -0.162);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.087, -0.141, -0.218);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.164, -0.251);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.107, -0.154, -0.223);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.070, -0.119, -0.189);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.056, -0.101, -0.146);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.081, -0.121, -0.195);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.063, -0.114, -0.164);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.078, -0.134, -0.211);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.102, -0.156, -0.242);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.096, -0.155, -0.213);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.065, -0.117, -0.189);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.051, -0.097, -0.143);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.077, -0.125, -0.197);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.067, -0.115, -0.167);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.090, -0.140, -0.219);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.118, -0.152, -0.235);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.107, -0.157, -0.228);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.074, -0.120, -0.193);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.053, -0.101, -0.145);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.074, -0.118, -0.191);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.072, -0.119, -0.168);
                    }
                }
            }
        } else if (year === '01.01.2021') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.099, -0.140, -0.217);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.102, -0.155, -0.247);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.119, -0.163, -0.236);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.068, -0.105, -0.171);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.049, -0.095, -0.139);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.072, -0.123, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.064, -0.119, -0.173);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.092, -0.148, -0.225);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.121, -0.165, -0.255);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.103, -0.152, -0.223);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.063, -0.111, -0.177);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.055, -0.101, -0.147);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.068, -0.118, -0.196);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.058, -0.113, -0.165);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.091, -0.145, -0.223);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.123, -0.169, -0.258);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.110, -0.159, -0.228);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.067, -0.115, -0.183);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.058, -0.104, -0.149);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.084, -0.125, -0.200);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.065, -0.116, -0.167);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.081, -0.138, -0.217);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.106, -0.161, -0.249);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.100, -0.160, -0.218);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.062, -0.113, -0.183);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.052, -0.100, -0.146);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.080, -0.129, -0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.069, -0.118, -0.170);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.093, -0.144, -0.224);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.123, -0.157, -0.241);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.110, -0.161, -0.234);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.070, -0.115, -0.187);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.055, -0.104, -0.148);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.077, -0.122, -0.196);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.074, -0.122, -0.171);
                    }
                }
            }
        } else if (year === '01.01.2020') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.088, -0.128, -0.201);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.090, -0.140, -0.227);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.107, -0.149, -0.219);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.074, -0.112, -0.180);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.044, -0.088, -0.131);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.063, -0.111, -0.187);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.058, -0.110, -0.162);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.082, -0.135, -0.209);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.107, -0.150, -0.235);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.092, -0.140, -0.207);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.069, -0.118, -0.187);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.049, -0.094, -0.138);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.060, -0.106, -0.181);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.052, -0.104, -0.155);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.081, -0.133, -0.207);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.109, -0.153, -0.237);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.099, -0.145, -0.212);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.073, -0.122, -0.193);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.052, -0.096, -0.140);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.074, -0.113, -0.185);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.059, -0.108, -0.157);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.072, -0.126, -0.201);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.094, -0.146, -0.229);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.097, -0.156, -0.214);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.068, -0.120, -0.193);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.047, -0.092, -0.137);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.071, -0.117, -0.187);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.062, -0.109, -0.160);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(-0.083, -0.131, -0.208);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(-0.109, -0.143, -0.222);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(-0.099, -0.148, -0.217);
                    } else if (purpose === 'Сельхоз') {
                        res = getResultIfMinMidMax(-0.076, -0.123, -0.197);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(-0.049, -0.096, -0.139);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(-0.068, -0.111, -0.181);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(-0.067, -0.113, -0.161);
                    }
                }
            }
        } else {
            res = 'н/д'
        }
        // return res
    };

    // console.log('Тут');

    if (intervalType === 'Доверительный') {
        // console.log('Дов интервал');
        getDovInterval();
    } else if (intervalType === 'Расширенный') {
        // console.log('Расш интервал');
        getExtInterval();
    } else {
        // console.log('Непойми чо интервал');
        res = 'н/д'
    }

    // console.log('В итоге res:', res);
    return res;
};

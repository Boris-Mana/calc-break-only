export default function calculateBreakRatio(year, region, realtyType, purpose, intervalType, minMaxMid) {
    let res;

    // console.log('В выбор коэфф:', year, region, realtyType, purpose, intervalType, minMaxMid);

    const getResultIfMinMidMax = (kMin, kMid, kMax) => {
        // console.log('сработал мин-мид-макс');
        let k;
        switch (minMaxMid) {
            case 'Минимальное':
                return kMin;                
            case 'Среднее':
                return kMid;                
            default :
                return kMax;
        };
    };

    const getDovInterval = () => {
        if (year === '01.01.2023') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.153, 0.181, 0.208);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.191, 0.219, 0.247);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.178, 0.206, 0.234);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.079, 0.107, 0.135);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.144, 0.172, 0.200);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.106, 0.134, 0.162);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.161, 0.189, 0.217);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.203, 0.231, 0.259);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.166, 0.194, 0.222);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.086, 0.114, 0.142);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.138, 0.166, 0.194);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.099, 0.127, 0.155);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.158, 0.186, 0.214);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.207, 0.235, 0.263);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.173, 0.201, 0.229);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.089, 0.117, 0.145);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.146, 0.174, 0.202);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.103, 0.131, 0.159);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.150, 0.178, 0.206);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.198, 0.226, 0.254);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.174, 0.202, 0.230);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.084, 0.112, 0.140);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.151, 0.179, 0.207);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.105, 0.133, 0.161);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.156, 0.184, 0.212);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.194, 0.222, 0.250);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.176, 0.204, 0.232);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.089, 0.117, 0.145);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.143, 0.171, 0.199);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.109, 0.137, 0.165);
                    }
                }
            }
        } else if (year === '01.01.2022') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.129, 0.156, 0.184);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.162, 0.190, 0.218);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.151, 0.179, 0.206);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.065, 0.093, 0.120);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.121, 0.149, 0.177);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.088, 0.116, 0.144);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.136, 0.164, 0.192);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.173, 0.200, 0.228);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.140, 0.168, 0.196);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.071, 0.099, 0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.116, 0.144, 0.172);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.082, 0.110, 0.138);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.134, 0.161, 0.189);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.176, 0.204, 0.231);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.147, 0.174, 0.202);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.074, 0.101, 0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.123, 0.151, 0.179);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.086, 0.114, 0.141);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.127, 0.154, 0.182);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.168, 0.196, 0.224);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.147, 0.175, 0.203);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.069, 0.097, 0.125);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.127, 0.155, 0.183);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.088, 0.115, 0.143);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.132, 0.160, 0.187);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.165, 0.192, 0.220);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.149, 0.177, 0.205);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.074, 0.101, 0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.121, 0.148, 0.176);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.091, 0.119, 0.146);
                    }
                }
            }
        } else if (year === '01.01.2021') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.133, 0.160, 0.188);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.167, 0.195, 0.222);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.155, 0.183, 0.211);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.067, 0.095, 0.123);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.125, 0.153, 0.181);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.091, 0.119, 0.147);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.140, 0.168, 0.196);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.178, 0.205, 0.233);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.145, 0.172, 0.200);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.074, 0.101, 0.129);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.120, 0.148, 0.175);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.085, 0.113, 0.141);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.138, 0.165, 0.193);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.181, 0.209, 0.237);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.151, 0.179, 0.206);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.076, 0.104, 0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.127, 0.155, 0.182);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.089, 0.116, 0.144);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.131, 0.158, 0.186);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.173, 0.201, 0.229);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.152, 0.180, 0.207);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.072, 0.100, 0.127);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.131, 0.159, 0.187);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.091, 0.118, 0.146);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.136, 0.164, 0.191);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.170, 0.197, 0.225);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.154, 0.181, 0.209);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.076, 0.104, 0.132);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.124, 0.152, 0.180);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.094, 0.122, 0.150);
                    }
                }
            }
        } else if (year === '01.01.2020') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.121, 0.148, 0.176);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.152, 0.180, 0.208);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.142, 0.169, 0.197);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.060, 0.088, 0.116);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.114, 0.141, 0.169);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.082, 0.110, 0.138);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.128, 0.155, 0.183);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.162, 0.190, 0.218);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.132, 0.160, 0.187);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.066, 0.094, 0.121);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.109, 0.136, 0.164);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.077, 0.104, 0.132);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.125, 0.153, 0.181);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.166, 0.193, 0.221);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.138, 0.165, 0.193);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.068, 0.096, 0.124);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.115, 0.143, 0.171);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.080, 0.108, 0.135);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.119, 0.146, 0.174);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.158, 0.186, 0.214);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.138, 0.166, 0.194);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.064, 0.092, 0.120);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.119, 0.147, 0.175);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.082, 0.109, 0.137);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0.124, 0.151, 0.179);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0.155, 0.183, 0.210);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0.140, 0.168, 0.195);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0.068, 0.096, 0.124);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0.113, 0.141, 0.168);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0.085, 0.113, 0.140);
                    }
                }
            }
        } else {
            res = 'н/д'
        }
        return res
    };
    
    const getExtInterval = () => {
        if (year === '01.01.2023') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.181, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.219, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.206, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.107, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.172, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.134, 0.);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.189, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.231, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.194, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.114, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.166, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.127, 0.);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.186, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.235, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.201, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.117, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.174, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.131, 0.);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.178, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.226, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.202, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.112, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.179, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.133, 0.);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.184, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.222, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.204, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.117, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.171, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.137, 0.);
                    }
                }
            }
        } else if (year === '01.01.2022') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.156, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.190, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.179, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.093, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.149, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.116, 0.);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.164, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.200, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.168, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.099, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.144, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.110, 0.);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.161, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.204, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.174, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.101, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.151, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.114, 0.);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.154, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.196, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.175, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.097, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.155, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.115, 0.);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.160, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.192, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.177, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.101, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.148, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.119, 0.);
                    }
                }
            }
        } else if (year === '01.01.2021') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.160, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.195, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.183, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.095, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.153, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.119, 0.);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.168, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.205, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.172, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.101, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.148, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.113, 0.);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.165, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.209, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.179, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.104, 0.12);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.155, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.116, 0.);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.158, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.201, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.180, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.100, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.159, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.118, 0.);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.164, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.197, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.181, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.104, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.152, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.122, 0.);
                    }
                }
            }
        } else if (year === '01.01.2020') {
            if (region === 'Белгородская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.148, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.180, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.169, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.088, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.141, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.110, 0.);
                    }
                }
    
    
            } else if (region === 'Воронежская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.155, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.190, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.160, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.094, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.136, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.104, 0.);
                    }
                }
            } else if (region === 'Курская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.153, 0.181);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.193, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.165, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.096, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.143, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.108, 0.);
                    }
                }
            } else if (region === 'Липецкая') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.146, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.186, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.166, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.092, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.147, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.109, 0.);
                    }
                }
            } else if (region === 'Тамбовская') {
                if (realtyType === 'Земля') {
                    if (purpose === 'Коммерческая застройка') {
                        res = getResultIfMinMidMax(0., 0.151, 0.);
                    } else if (purpose === 'Индустриальная застройка') {
                        res = getResultIfMinMidMax(0., 0.183, 0.);
                    } else if (purpose === 'Под придорожный сервис') {
                        res = getResultIfMinMidMax(0., 0.168, 0.);
                    }
                } else {
                    if (purpose === 'Торг-офис') {
                        res = getResultIfMinMidMax(0., 0.096, 0.);
                    } else if (purpose === 'Производственно-складское') {
                        res = getResultIfMinMidMax(0., 0.141, 0.);
                    } else if (purpose === 'Прочее коммерческое') {
                        res = getResultIfMinMidMax(0., 0.113, 0.);
                    }
                }
            }
        } else {
            res = 'н/д'
        }
        return res
    };

    if (intervalType === 'Доверительный') {
        return getDovInterval();
    } else if (intervalType === 'Расширенный') {
        return getExtInterval();
    } else {
        return 'н/д'
    }
};

// else if (year === '2021') {
//     if (region === 'Белгородская') {
//         if (realtyType === 'Земля') {
//             if (purpose === 'Коммерческая застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Индустриальная застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Под придорожный сервис') {
//                 res = getResultIfMinMidMax();
//             }
//         } else {
//             if (purpose === 'Торг-офис') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Производственно-складское') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Прочее коммерческое') {
//                 res = getResultIfMinMidMax();
//             }
//         }


//     } else if (region === 'Воронежская') {
//         if (realtyType === 'Земля') {
//             if (purpose === 'Коммерческая застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Индустриальная застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Под придорожный сервис') {
//                 res = getResultIfMinMidMax();
//             }
//         } else {
//             if (purpose === 'Торг-офис') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Производственно-складское') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Прочее коммерческое') {
//                 res = getResultIfMinMidMax();
//             }
//         }
//     } else if (region === 'Курская') {
//         if (realtyType === 'Земля') {
//             if (purpose === 'Коммерческая застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Индустриальная застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Под придорожный сервис') {
//                 res = getResultIfMinMidMax();
//             }
//         } else {
//             if (purpose === 'Торг-офис') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Производственно-складское') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Прочее коммерческое') {
//                 res = getResultIfMinMidMax();
//             }
//         }
//     } else if (region === 'Липецкая') {
//         if (realtyType === 'Земля') {
//             if (purpose === 'Коммерческая застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Индустриальная застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Под придорожный сервис') {
//                 res = getResultIfMinMidMax();
//             }
//         } else {
//             if (purpose === 'Торг-офис') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Производственно-складское') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Прочее коммерческое') {
//                 res = getResultIfMinMidMax();
//             }
//         }
//     } else if (region === 'Тамбовская') {
//         if (realtyType === 'Земля') {
//             if (purpose === 'Коммерческая застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Индустриальная застройка') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Под придорожный сервис') {
//                 res = getResultIfMinMidMax();
//             }
//         } else {
//             if (purpose === 'Торг-офис') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Производственно-складское') {
//                 res = getResultIfMinMidMax();
//             } else if (purpose === 'Прочее коммерческое') {
//                 res = getResultIfMinMidMax();
//             }
//         }
//     }
// } 
// import logoInvOcenAnalitic from "../../images/investOcenkaAnalitycCenter.svg"
export default function About() {
    return (
        <section className="about">
            {/* <img className="about__logo" src={logoInvOcenAnalitic} alt="Логотип ИнвестОценка аналитический центр"></img> */}
            <ul className="about__title">Преимущества:
                {/* <h1 className="about__title">Преимущества:</h1> */}
                <li className='about__text'>
                    <strong>&#9658; Учет региональных особенностей и традиционной сегментации</strong> рынка недвижимости Центрально-Черноземного региона;
                </li>
                <li className='about__text'>
                    <strong>&#9658; Открытость и общедоступность</strong> (бесплатный доступ для всех пользователей);
                </li>
                <li className='about__text'>
                    <strong>&#9658; Точность и достоверность</strong> проводимых расчетов;
                </li>
                <li className='about__text'>
                    <strong>&#9658; Простота и удобство</strong> применения;
                </li>
                <li className='about__text'>
                    <strong>&#9658; Непрерывность</strong> процесса сбора и обработки информации на основе регулярных мониторингов регионального рынка недвижимости;
                </li>
                <li className='about__text'>
                    <strong>&#9658; </strong>Возможность использования <strong>архивной</strong> информации;
                </li>
                <li className='about__text'>
                    <strong>&#9658; </strong>Возможность проведения <strong>самостоятельных </strong> расчетов.
                </li>
            </ul>
            <ul className="about__title">Для кого:
                {/* <h1 className="about__title">Преимущества:</h1> */}
                <li className='about__text'>
                    <strong>&#8226;</strong> независимые оценщики и судебные эксперты;
                </li>
                {/* <li className='about__text'>
                    <strong>&#8226; </strong>сотрудники залоговых служб банков, осуществляющие контроль качества результатов оценки для целей залога;
                </li> */}
                <li className='about__text'>
                    <strong>&#8226; </strong>сотрудники ГБУ, уполномоченные на определение кадастровой стоимости и контроль процедуры установления кадастровой стоимости в размере рыночной;
                </li>
                <li className='about__text'>
                    <strong>&#8226; </strong>сотрудники залоговых служб банков, корпоративных заказчиков и органов власти, осуществляющие контроль качества результатов оценки недвижимости.
                </li>                
            </ul>
        </section>
    )
};
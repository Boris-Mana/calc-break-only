import logo from "../../images/logoInvestocenka3.svg";
import unionApprisers from '../../images/union_appraisers_logo.svg';
import expertsSovet from '../../images/experts_sovet_logo.svg';
import unionRielters from '../../images/union_rielters_logo.svg';
import unionFinansSudExpert from '../../images/union_finans_sud_expert_logo.png';

export default function Footer() {
    return (
        <nav className="footer">
            <div className="footer__item-container">
                <h2 className="footer_title">Разработка:</h2>
                <div className="footer__logos footer__logos_dev">
                    <a
                        className="footer__link"
                        href="https://investocenka.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        {/* <p className="footer__copyright">ООО «Аналитическая Консалтинговая Группа «ИнвестОценка» © 2022</p> */}
                        <img src={logo} className="footer__logo" alt="Логотип АКГ Инвестоценка" />
                    </a>
                    <p className="footer__copyright">© 2023, ООО "Аналитическая Консалтинговая Группа "ИнвестОценка"</p>
                </div>
            </div>
            <div className="footer__item-container">
                <h2 className="footer_title">При поддержке:</h2>
                <div className="footer__logos">
                    <a
                        className="footer__link "
                        href="http://оценщики-черноземья.рф/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={unionApprisers} className="footer__logo footer__logos_ocenshiki" alt='Логотип Союза оценщиков Черноземья'></img>
                    </a>
                    <a
                        className="footer__link"
                        href="https://www.grvrn.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={unionRielters} className="footer__logo footer__logos_rieltors" alt='Логотип Гильдии Риэлторов Черноземья'></img>
                    </a>
                    <a
                        className="footer__link"
                        href="https://srosovet.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={expertsSovet} className="footer__logo footer__logos_rieltors" alt='Логотип Ассоциации Экспертный Совет'></img>                        
                    </a>
                    <a
                        className="footer__link"
                        href="http://finsudexpert.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="footer__logos-box">
                            <img src={unionFinansSudExpert} className="footer__logo footer__logos_sud" alt='Логотип Союза Финансово-экономических судебных экспертов'></img>
                            <p className="footer__logos-text">Союз финансово-экономических судебных экспертов</p>
                        </div>
                    </a>
                </div>
            </div>


        </nav>

    )
};
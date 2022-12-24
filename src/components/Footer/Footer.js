import logo from "../../images/logoInvestocenka3.svg";

export default function InfoNav() {
    return (
        <nav className="infoNav">
            <a
                className="infoNav__link"
                href="https://investocenka.ru"
                target="_blank"
                rel="noopener noreferrer"
            >
                Подробнее - у АКГ "ИнвестОценка"
                {/* <img src={logo} className="infoNav__logo" alt="logo" /> */}
            </a>
            <p className="infoNav__copyright">© 2022</p>
        </nav>

    )
};
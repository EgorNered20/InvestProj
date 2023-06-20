import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Info = () => {

    const { t,i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === "ru" ? "en" : "ru";

        i18n.changeLanguage(newLanguage);
    }


    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <img src="img/logo.png" alt="logo" className="logo animated fadeInDown" />
                    <nav className="spisok text-center">
                        <a href="/" className="btn spisok-anim" id="nav01">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/">{t("nav0")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim" id="nav1">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/info">{t("nav1")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim" id="nav2">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/request">{t("nav2")}</Link></strong>
                        </a>
                        <a href="/" className="btn spisok-anim" id="nav3">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/tarifs">{t("nav3")}</Link></strong>
                        </a>
                    </nav>
                    <div className="d-block mx-auto text-center my-3">
                        <button className="btn btn-outline-primary fs-6 ml-3 fw-bolder" onClick={() =>
                            changeLanguage()}>
                            {i18n.language === "ru" ? "EN" : "RU"}
                        </button>
                    </div>
                </div>
            </header>
            <sction>
                <div className="row my-5">
                    <div className="col-md-5 my-6">
                        <img
                            className="animated fadeInLeft"
                            src="img/slider-image2.jpg"
                            alt="info"
                        />
                    </div>
                    <div className="col-md-6">
                        <h1 className="my-3">Holding LTD</h1>
                        <h5 className="my-3" id="tl29">
                            {t("tl29")}
                        </h5>
                        <p id="tl30">
                            {t("tl30")}
                        </p>
                        <a className="btn btn-primary my-3" href="#" id="btn5">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">{t("nav0")}</Link>
                        </a>
                        <a className="btn btn-primary my-3" href="#" id="btn6">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/request">{t("btn3")}</Link>
                        </a>
                    </div>
                </div>
            </sction>
            <section></section>
            <footer id="footer" className="footer">
                <div className="container">
                    <p className="credits" id="tl28">
                        <strong>{t("tl28")}</strong>
                    </p>
                </div>
            </footer>
        </>

    );
}

export default Info;
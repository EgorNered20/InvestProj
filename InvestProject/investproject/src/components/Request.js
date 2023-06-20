import React from 'react'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Request = () => {

    const {t,i18n} = useTranslation();

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
                        <a href="#" className="btn spisok-anim" id="nav01">
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
            <section className="mail bg-white" id="mail">
                <div className="row text-center">
                    <div className="col-md-1">
                        <img src="img/request.jpg" alt="request" />
                    </div>
                    <div className="col-md-11">
                        <h2 className="section-title2 my-5" id="tl31">
                            {t("tl31")}
                        </h2>
                        <form action="#" className="form my-5">
                            <input
                                type="text"
                                name="name"
                                placeholder={t("input1")}
                                className="input my-3"
                                required=""
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input my-3"
                                required=""
                            />
                            <input
                                type="tel"
                                name="telephone"
                                placeholder={t("input2")}
                                className="input my-3"
                                required=""
                            />
                            <input
                                type="text"
                                name="invest"
                                placeholder={t("input3")}
                                className="input my-3"
                                required=""
                            />
                            <a className="btn btn-primary my-3" href="#" id="btn6">
                                {t("btn6")}
                            </a>
                        </form>
                    </div>
                </div>
            </section>
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

export default Request;
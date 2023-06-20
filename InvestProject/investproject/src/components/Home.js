import React from "react";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";


const Home = () => {

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
                        <a href="#" className="btn spisok-anim" id="nav0">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/">{t("nav0")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim" id="nav1">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/info">{t("nav1")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim" id="nav2">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/request">{t("nav2")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim" id="nav3">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/tarifs">{t("nav3")}</Link></strong>
                        </a>
                    </nav>
                    <div className="d-block mx-auto text-center my-3">
                        <button className="btn btn-outline-primary fs-6 ml-3 fw-bolder" onClick={() =>
                        changeLanguage()}>
                            {i18n.language === "ru" ? "EN" : "RU"}
                        </button>
                    </div>
                    <div className="wrapper">
                        <div className="offer animated fadeInLeft">
                            <h1 className="title" id="tl0">
                                <strong>{t("tl0")}</strong>
                            </h1>
                            <p className="intro" id="tl1">
                                {t("tl1")}
                            </p>
                            <a href="#mail" className="btn btn-primary btn-lg fs-5" id="btn">
                                {t("btn")}
                            </a>
                        </div>
                        <img
                            src="img/travel.jpg"
                            alt="investing"
                            className="travel animated fadeInRight"
                        />
                    </div>
                </div>
            </header>
            <section id="mail" className="mail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <img className="animated fadeInLeft" src="/img/how.jpg" alt="how" />
                        </div>
                        <div className="col-md-4 my-5 animated fadeInRight" id="howit">
                            <h2 id="tl2">
                                <strong>{t("tl2")}</strong>
                            </h2>
                            <p className="my-5" id="tl3">
                                {t("tl3")}
                            </p>
                            <p className="my-5" id="tl4">
                                {t("tl4")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row my-5">
                    <div className="col-md-6 text-center my-5">
                        <h1 className="text-center text-shadow my-5 txt-anim" id="tl5">
                            <strong>{t("tl5")}</strong>
                        </h1>
                        <p className="premvtxt py-3 txt-back" id="tl6">
                            <strong>1.</strong> {t("tl6")}
                        </p>
                        <p className="premvtxt py-3 txt-back" id="tl7">
                            <strong>2.</strong> {t("tl7")}
                        </p>
                        <p className="premvtxt py-3 txt-back" id="tl8">
                            <strong>3.</strong> {t("tl8")}
                        </p>
                        <p className="premvtxt py-3 txt-back" id="tl9">
                            <strong>4.</strong> {t("tl9")}
                        </p>
                        <p className="premvtxt py-3 txt-back" id="tl10">
                            <strong>5.</strong> {t("tl10")}
                        </p>
                        <a href="#tarif" className="btn btn-primary my-5 fs-5" id="btn2">
                            {t("btn2")}
                        </a>
                    </div>
                    <div className="col-md-6">
                        <img className="fadeInUp" src="img/steps.jpg" alt="steps" />
                    </div>
                </div>
            </section>
            <section id="learn" className="learn">
                <div className="container">
                    <h2 className="section-title" id="tl11">
                        <strong>{t("tl11")}</strong>
                    </h2>
                    <div className="skills">
                        <div className="skill">
                            <h3 className="skill-title">
                                <strong>1 500 000</strong>
                            </h3>
                            <p className="skill-text" id="tl12">
                                {t("tl12")}
                            </p>
                        </div>
                        <div className="skill skill-travel">
                            <h3 className="skill-title">
                                <strong>+175</strong>
                            </h3>
                            <p className="skill-text" id="tl13">
                                {t("tl13")}
                            </p>
                        </div>
                        <div className="skill skill-create">
                            <h3 className="skill-title">
                                <strong>2 500$</strong>
                            </h3>
                            <p className="skill-text" id="tl14">
                                {t("tl14")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">
                            <img
                                className="animated fadeInLeft"
                                src="img/slider-image3.jpg"
                                alt="slid"
                            />
                        </div>
                        <div className="col-md-6">
                            <h1 className="premv my-5" id="tl15">
                                {t("tl15")}
                            </h1>
                            <p className="premvtxt py-2 txt-anim" id="tl16">
                                <strong>1.</strong> {t("tl16")}
                            </p>
                            <hr />
                            <p />
                            <p className="premvtxt py-2 txt-anim" id="tl17">
                                <strong>2.</strong> {t("tl17")}
                            </p>
                            <hr />
                            <p />
                            <p className="premvtxt py-2 txt-anim" id="tl18">
                                <strong>3.</strong> {t("tl18")}
                            </p>
                            <hr />
                            <p />
                            <p className="premvtxt py-2 txt-anim" id="tl19">
                                <strong>4.</strong> {t("tl19")}
                            </p>
                            <hr />
                            <p />
                            <p className="premvtxt py-2 txt-anim" id="tl20">
                                <strong>5.</strong> {t("tl20")}
                            </p>
                            <hr />
                            <p />
                            <a
                                href="#"
                                className="btn btn-primary btn-lg my-3 fs-5"
                                id="btn3"
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/request">{t("btn3")}</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tarif" className="tarif">
                <div className="row my-5">
                    <h1 className="text-center my-5" id="tl21">
                        <strong>{t("tl21")}</strong>
                    </h1>
                    <div className="col-md-6 d-list-item text-center my-5">
                        <div className="tariff my-3">
                            <h3 className="skill-title" id="tl22">
                                <strong>{t("tl22")}</strong>
                            </h3>
                            <p className="skill-text" id="tl23">
                                {t("tl23")}
                            </p>
                        </div>
                        <div className="tariff my-3">
                            <h3 className="skill-title" id="tl24">
                                <strong>{t("tl24")}</strong>
                            </h3>
                            <p className="skill-text" id="tl25">
                                {t("tl25")}
                            </p>
                        </div>
                        <div className="tariff my-3">
                            <h3 className="skill-title" id="tl26">
                                <strong>{t("tl26")}</strong>
                            </h3>
                            <p className="skill-text" id="tl27">
                                {t("tl27")}
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary my-3 fs-5" id="btn4">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/request" >{t("btn4")}</Link>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="animated fadeInRight"
                            src="img/slider-image1.jpg"
                            alt="nout"
                        />
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

export default Home;
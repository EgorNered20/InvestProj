import React from 'react'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Tarifs = () => {

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
                        <a href="#" className="btn spisok-anim">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/">{t("nav0")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/info">{t("nav1")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim">
                            <strong><Link style={{ textDecoration: 'none', color: 'black' }} to="/request">{t("nav2")}</Link></strong>
                        </a>
                        <a href="#" className="btn spisok-anim">
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
            <section>
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-6 text-center">
                        <h4 className="fw-bolder">{t("tl32")}</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-6 my-5 text-center">
                        <h5>{t("tl33")}</h5>
                        <p>
                            {t("tl34")}
                        </p>
                    </div>
                </div>
                <div className="row text-center my-3">
                    <h4 className="fw-bolder">{t("tl35")}</h4>
                    <div className="col-lg-4 col-md-12 mb-4 my-5">
                        <img src="img/icontar.png" />
                        <h5 className="my-3">
                            <strong>{t("tl22")}</strong>
                        </h5>
                        <p className="my-2">{t("tl36")}</p>
                        <p className="my-1">
                            <strong>{t("tl37")}</strong>
                        </p>
                        <a className="btn btn-primary my-3 fs-6" href="#">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/request">{t("btntar")}</Link>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 my-5">
                        <img src="img/icontar.png" />
                        <h5 className="my-3">
                            <strong>{t("tl24")}</strong>
                        </h5>
                        <p className="my-2">{t("tl38")}</p>
                        <p className="my-1">
                            <strong>{t("tl39")}</strong>
                        </p>
                        <a className="btn btn-primary my-3 fs-6" href="#">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/request">{t("btntar")}</Link>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 my-5">
                        <img src="img/icontar.png" />
                        <h5 className="my-3">
                            <strong>{t("tl26")}</strong>
                        </h5>
                        <p className="my-2">{t("tl40")}</p>
                        <p className="my-1">
                            <strong>{t("tl39")}</strong>
                        </p>
                        <a className="btn btn-primary my-3 fs-6" href="#">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/request">{t("btntar")}</Link>
                        </a>
                    </div>
                </div>
            </section>
            <footer id="footer" className="footer">
                <div className="container">
                    <p className="credits">
                        <strong>{t("tl28")}</strong>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Tarifs;
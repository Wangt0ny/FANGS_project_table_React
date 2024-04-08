import './css/footer.css'

function Footer() {
    return (
        <footer>
            <div className="container-fluid info-footer">

                <h4 className="meal-rules">用餐時間90分鐘，酌收10%清潔費</h4>
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="footer-item">
                            <ul className="info-link-group">
                                <li>官方信箱 : <a href="#">proteinboy@gmail.com</a></li>
                                <li>客服電話 : <a href="#">0987-000-000</a></li>
                            </ul>
                            <div className="info-icon-grop">
                                <span className="info-icon"><a href="#"><i className="bi bi-facebook"></i></a></span>
                                <span className="info-icon"><a href="#"><i className="bi bi-instagram"></i></a></span>
                                <span className="info-icon"><a href="#"><i className="bi bi-line"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="company">2023 Protein Boy Inc. All Rights Reserved</p>

            </div>
        </footer>
    );
}

export default Footer;
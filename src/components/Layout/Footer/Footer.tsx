import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-app">
        <footer className="section">
          <div className="container">
            <div className="row">
              <div className="col-4 col-md-6 col-sm-12">
                <div className="content">
                  <a href="# " className="logo">
                    <i className="bx bx-movie-play bx-tada main-color"></i>F1
                    <span className="main-color">i</span>x
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, at! Rerum inventore fugit fugiat tenetur, ratione
                    animi molestias optio iste eius recusandae, porro blanditiis
                    incidunt aperiam officiis, minima delectus soluta.
                  </p>
                  <div className="social-list">
                    <a href="#" className="social-item">
                      <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="#" className="social-item">
                      <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="#" className="social-item">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-3 col-md-6 col-sm-12">
                    <div className="content">
                      <p className="content-footer-title">
                        <b>Flix</b>
                      </p>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Profile</a>
                        </li>
                        <li>
                          <a href="#">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-3 col-md-6 col-sm-12">
                    <div className="content">
                      <p className="content-footer-title">
                        <b>Browser</b>
                      </p>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Profile</a>
                        </li>
                        <li>
                          <a href="#">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-3 col-md-6 col-sm-12">
                    <div className="content">
                      <p className="content-footer-title">
                        <b>Help</b>
                      </p>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Profile</a>
                        </li>
                        <li>
                          <a href="#">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-3 col-md-6 col-sm-12">
                    <div className="content">
                      <p className="content-footer-title">
                        <b>Download App</b>
                      </p>
                      <ul className="footer-menu">
                        <li>
                          <a href="#">
                            <img src="./img/google-play.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="./img/app-store.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright">
          Copyright <a href="#">F4</a>
        </div>
      </div>
    </>
  );
};
export default Footer;

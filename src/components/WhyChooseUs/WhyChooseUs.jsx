import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section id="whyUs" className="whyChooseUs">
      <div className="container">
        <div className="wcuText text-center">
          <h1>Why Choose Us</h1>
          <p>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="wcuCards">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-people iconCard me-3 fs-1"></i>
                    <h5 className="card-title mb-0">Web Development</h5>
                  </div>
                </div>
                <div className="card-body2 d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <h5 className="card-list mb-0">
                      <ul className="wcuList">
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <a href="#" className="wcuLink">
                          Learn More
                        </a>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-people iconCard me-3 fs-1"></i>
                    <h5 className="card-title mb-0">Digital Marketing</h5>
                  </div>
                </div>
                <div className="card-body2 d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <h5 className="card-list mb-0">
                      <ul className="wcuList">
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <a href="#" className="wcuLink">
                          Learn More
                        </a>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-people iconCard me-3 fs-1"></i>
                    <h5 className="card-title mb-0">National top 50 firms</h5>
                  </div>
                </div>
                <div className="card-body2 d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <h5 className="card-list mb-0">
                      <ul className="wcuList">
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <li>Lorem Ipsum Lorem Ipsum</li>
                        <a href="#" className="wcuLink">
                          Learn More
                        </a>
                      </ul>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

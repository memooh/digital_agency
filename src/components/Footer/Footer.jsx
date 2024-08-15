import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark footerE text-light pt-5 pb-4">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
              <div className="col mb-4">
                <h5 className="text-uppercase">Company Info</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light">About Us</a></li>
                  <li><a href="#" className="text-light">Carrier</a></li>
                  <li><a href="#" className="text-light">We are hiring</a></li>
                  <li><a href="#" className="text-light">Blog</a></li>
                </ul>
              </div>
              
              <div className="col mb-4">
                <h5 className="text-uppercase">Legal</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light">About Us</a></li>
                  <li><a href="#" className="text-light">Carrier</a></li>
                  <li><a href="#" className="text-light">We are hiring</a></li>
                  <li><a href="#" className="text-light">Blog</a></li>
                </ul>
              </div>
              
              <div className="col mb-4">
                <h5 className="text-uppercase">Features</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light">Business Marketing</a></li>
                  <li><a href="#" className="text-light">User Analytic</a></li>
                  <li><a href="#" className="text-light">Live Chat</a></li>
                  <li><a href="#" className="text-light">Unlimited Support</a></li>
                </ul>
              </div>
    
              <div className="col mb-4">
                <h5 className="text-uppercase">Resources</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light">iOS & Android</a></li>
                  <li><a href="#" className="text-light">Watch a Demo</a></li>
                  <li><a href="#" className="text-light">Customers</a></li>
                  <li><a href="#" className="text-light">API</a></li>
                </ul>
              </div>
    
              <div className="col mb-4">
                <h5 className="text-uppercase">Get In Touch</h5>
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <button type="submit" className="btn btn-warning">Subscribe</button>
                </form>
                <p className="mt-3 text-muted">Lorem ipsum dolor amet</p>
              </div>
            </div>
            
            <div className="row">
              <div className="col footerNotes mt-4">
                <hr className='mb-5'/>
                <p>Made by Mehmet Ozturk | Design from Figma</p>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;

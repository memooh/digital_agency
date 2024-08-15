import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
     <section className="contactUs d-flex justify-content-center align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <h4>Contact Us</h4>
        <h1>Make an Appointment</h1>
        <form className="contactForm mt-5">
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-md-6">
              <input type="time" className="form-control" required />
            </div>
            <div className="col-md-6">
              <select className="form-select" required>
                <option value="">Select Department</option>
                <option value="1">HR</option>
                <option value="2">Memo</option>
                <option value="3">Doner</option>
              </select>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="appBooksBtn mt-5">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      <section className="consultingAgency d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Consulting Agency For Your Business</h1>
              <p>the quick fox jumps over the lazy dog</p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
              <button type="submit" className="contactBtn">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

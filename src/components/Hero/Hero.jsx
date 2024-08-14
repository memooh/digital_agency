import "./Hero.css";
import { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    department: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section className="Hero">
      <div className="container">
        <div className="row align-items-center" style={{ height: "100%" }}>
          <div className="col-12 col-lg-8 heroTitle">
            <h1>Drive More Customers Through Digital</h1>
            <p className="mt-5">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="heroButtons">
              <button className="hbStyle1">Get Quote Now</button>
              <button className="hbStyle2">Learn More</button>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <div className="heroForm w-100">
              <h1>Book Appointment</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="formLabels">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="formLabels">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="formLabels">Department *</label>
                  <select
                    className="form-select"
                    name="department"
                    value={appointmentData.department}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="formLabels">Time *</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={appointmentData.time}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="appBooksBtnMain">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Appointment Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {appointmentData.name}</p>
                <p><strong>Email:</strong> {appointmentData.email}</p>
                <p><strong>Department:</strong> {appointmentData.department}</p>
                <p><strong>Time:</strong> {appointmentData.time}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

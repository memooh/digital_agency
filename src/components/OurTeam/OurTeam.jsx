import "./OurTeam.css";
import placeholderEmployee from "/images/our_team/placeholder.png";

const OurTeam = () => {
  const ourTeam = [
    {
      id: 1,
      name: "John Doe",
      position: "Co-Founder",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Consultant",
    },
    {
      id: 3,
      name: "Zlatan Ibrahimovic",
      position: "CEO",
    },
  ];

  return (
    <section className="OurTeam">
      <div className="container">
        <div className="ourTeamText text-center">
          <h1>Meet Our Team</h1>
          <p>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="ourTeamCards">
          <div className="row">
            {ourTeam.map((member) => (
              <div className="col-md-6 col-lg-4" key={member.id}>
                <div
                  className="card card-ourTeam mx-auto"
                  style={{ width: "100%" }}
                >
                  <img
                    src={placeholderEmployee}
                    alt="Employee photo"
                    className="card-img-top img-fluid half-size"
                  />
                  <div className="card-bodys text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <div className="social-icons">
                      <div className="rectangle-icon facebook"></div>
                      <div className="rectangle-icon instagram"></div>
                      <div className="rectangle-icon twitter"></div>
                    </div>
                    <div className="social-icons">
                      <i className="bi bi-facebook mx-2"></i>
                      <i className="bi bi-instagram mx-2"></i>
                      <i className="bi bi-twitter mx-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

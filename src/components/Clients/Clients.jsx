import ".//Clients.css";

const Clients = () => {
  const reviews = [
    {
      id: 1,
      name: "Regina Miles",
      position: "Designer",
      message:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      stars: 5,
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Designer",
      message:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      stars: 4,
    },
    {
      id: 3,
      name: "Zlatan Ibrahimovic",
      position: "Designer",
      message:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      stars: 5,
    },
  ];

  return (
    <section className="clients">
      <div className="container">
        <div className="clientText text-center">
          <h1>What Clients Say</h1>
          <p>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="clientCards">
          <div className="row">
            {reviews.map((review) => (
              <div className="col-lg-4" key={review.id}>
                <div className="card card-client">
                  <div className="card-body2 d-flex align-items-center ">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${
                              i < review.stars ? "bi-star-fill" : "bi-star"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <p className="card-text mt-3">"{review.message}"</p>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <i className="bi bi-person-circle fs-1 me-3"></i>
                        <div>
                          <h5 className="card-titles mb-">{review.name}</h5>
                          <p className="card-position mb-0">{review.position}</p>
                        </div>
                      </div>
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

export default Clients;

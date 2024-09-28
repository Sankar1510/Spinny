function Testimonials() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./imgs/t-shirt.jpg"
                className="d-block"
                alt="Slide 1"
                style={{
                  height: '400px', // Adjusted height to minimize
                  width: '70%', // Adjusted width to minimize and center
                  margin: '0 auto', // Centers the image horizontally
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./imgs/t-shirt.jpg"
                className="d-block"
                alt="Slide 2"
                style={{
                  height: '400px',
                  width: '70%',
                  margin: '0 auto',
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./imgs/t-shirt.jpg"
                className="d-block"
                alt="Slide 3"
                style={{
                  height: '400px',
                  width: '70%',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
  
  export default Testimonials;
  
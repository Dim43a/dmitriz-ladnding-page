export const About = (props) => {
  return (
    <div id="about">
      <h2>About Us</h2>
      <div className="about-us-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="https://www.movers.com/images/guides/gdImg/your-moving-crews-duties-.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3>{props.data ? props.data.paragraph : "loading..."}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

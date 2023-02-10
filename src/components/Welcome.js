import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Welcome!</h1>
      <p className="lead">
        If you've ever felt overwhelmed by the growing number of COVID-19
        vaccines available on the market and don't know which one you are
        supposed to get, we're here to help! This simple webapp was developed to
        help you determine what vaccine you should get next. It can be used by
        the average consumer or a healthcare worker.
      </p>
      <hr className="my-4"></hr>
      <p>
        You can use it for free without registering! However, you will need to
        register if you want to save your information for multiple patients or
        family members.
      </p>
      <div className="text-center">
        <NavLink
          className="btn btn-primary btn-lg"
          href="home.html"
          role="button"
          to="/login"
        >
          Get Started!
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;

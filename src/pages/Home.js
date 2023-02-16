import React from "react";
// import logo from "../images/1.png";
import background from "../images/background.png";

const Home = () => {
  return (
    <div
      className="container align-content-space-around"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "10% 20%",
        backgroundBlendMode: "color-dodge",
      }}
    >
      <p></p>

      <h2 className="col">About COVID-19</h2>

      <div>
        <h6 className="py-4">
          COVID-19 (coronavirus disease 2019) is a disease caused by a virus
          named SARS-CoV-2 and was discovered in December 2019 in Wuhan, China.
          It is very contagious and has quickly spread around the world.
          COVID-19 most often causes respiratory symptoms that can feel much
          like a cold, a flu, or pneumonia. COVID-19 may attack more than your
          lungs and respiratory system. Other parts of your body may also be
          affected by the disease.
        </h6>
        <div className="container">
          <h6 className="py-2">
            <li>
              Most people with COVID-19 have mild symptoms, but some people
              become severely ill.
            </li>
          </h6>
          <h6 className="py-2">
            <li>
              Some people including those with minor or no symptoms may suffer
              from post-COVID conditions — or “long COVID”.
            </li>
          </h6>
          <h6 className="py-2">
            <li>
              Older adults and people who have certain underlying medical
              conditions are at increased risk of severe illness from COVID-19.
            </li>
          </h6>
          <h6 className="py-2">
            <li>
              Hundreds of thousands of people have died from COVID-19 in the
              United States.
            </li>
          </h6>
          <h6 className="pt-2 pb-4">
            <li>
              Vaccines against COVID-19 are safe and effective. Vaccines teach
              our immune system to fight the virus that causes COVID-19.
            </li>
          </h6>
        </div>
      </div>
      <h2>Updates</h2>
      <div>
        <h6 className="py-4">
          As of February 2023, the CDC has began recommending that all
          vaccinated and/or unvaccinated individuals receive at least one
          COVID-19 vaccine annually regardless of comorbidites or
          immunodeficiencies. Future enhancements may include a decision helper
          for pneumococcal vaccines.
        </h6>
      </div>
      <h2>Disclaimer</h2>
      <div>
        <h6 className="py-4">
          This website is for information / educational use only. It was built
          as a capstone project by a student software developer. Please check
          with your healthcare provider before making any healthcare decisions
          based solely on this application.
        </h6>
      </div>
    </div>
  );
};

export default Home;

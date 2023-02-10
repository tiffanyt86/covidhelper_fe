import logo from "../images/1.png";

const FourOhFour = () => {
  return (
    <div className="container align-content text-center py-4 px-4">
      <img className="pb-4" src={logo} alt="Logo" />
      <h3>Oops, this page does not exist...</h3>
    </div>
  );
};

export default FourOhFour;

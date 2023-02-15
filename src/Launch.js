import logo from "./images/1.png";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function Launch() {
  return (
    <div className="container align-content-space-around">
      <main>
        <div className="text-center pb-3">
          <img src={logo} alt="Logo" />
        </div>
        <Welcome />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Launch;

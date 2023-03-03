import "./App.css";
import Profile from "./components/Profile";
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Profile />
        <TextSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;

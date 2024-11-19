import IntroTextContainer from "./components/home/IntroTextContainer";
import Sidebar from "./components/sidebar/Sidebar";
import heroImage from "./assets/images/Designer(1).png";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="font-urbanist tracking-wide text-primaryTextBlack flex justify-between">
      <Sidebar />
      <div className="flex-1 bg-primaryLightPink p-16">
        <div className="flex justify-center items-center gap-16">
          <IntroTextContainer />
          <img src={heroImage} width={340} className="animate-morph" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

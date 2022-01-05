import {
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from './LandingPage/HomeNewsCrypto';
import Navbar from './Components/Navbar/Navbar';
import Support from './Components/Support/Support';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import RiskDisclosure from './Components/RiskDisclosure/RiskDisclosure';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/riskdisclosure" element={<RiskDisclosure />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

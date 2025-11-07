import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Rewards from './components/Rewards';
import ProgramDetails from './components/ProgramDetails';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';

function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Hero onGetStarted={scrollToForm} />
      <HowItWorks />

      {/* Responsive full-width image */}
      <div className="w-full">
        <img
          src="/public/img2.PNG"
          alt="section background"
          className="w-full h-auto object-cover md:object-contain"
        />
      </div>

      <Rewards />

      <div className="w-full">
        <img
          src="/public/img5.jpg"
          alt="reward background"
          className="w-full h-auto object-cover md:object-contain"
        />
      </div>

      <ProgramDetails />
      <FAQ />

      <div className="w-full">
        <img
          src="/public/img3.jpg"
          alt="program background"
          className="w-full h-auto object-cover md:object-contain"
        />
      </div>

      <RegistrationForm />
      <Contact />
    </div>
  );
}

export default App;

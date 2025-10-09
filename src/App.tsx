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
      <Rewards />
      <ProgramDetails />
      <FAQ />
      <RegistrationForm />
      <Contact />
    </div>
  );
}

export default App;

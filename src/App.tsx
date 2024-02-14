import './App.css'
import { MemoryRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import WebApp from '@twa-dev/sdk'
import PageOne from './onboarding/PageOne';
import PageTwo from './onboarding/PageTwo';
import PageFour from './onboarding/PageFour';
import PageThree from './onboarding/PageThree';
import PageFive from './onboarding/PageFive';
import PageSix from './onboarding/PageSix';
import PageSeven from './onboarding/PageSeven';
import PageEight from './onboarding/PageEight';
import PageNine from './onboarding/PageNine';

function App() {
  WebApp.ready();
  WebApp.expand();
  WebApp.MainButton.hide();
  WebApp.setBackgroundColor('#ffffff');

  const LocationAwareComponent = () => {
    const location = useLocation();
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<PageOne />} />
            <Route path="/two" element={<PageTwo />} />
            <Route path="/three" element={<PageThree />} />
            <Route path="/four" element={<PageFour />} />
            <Route path="/five" element={<PageFive />} />
            <Route path="/six" element={<PageSix />} />
            <Route path="/seven" element={<PageSeven />} />
            <Route path="/eight" element={<PageEight />} />
            <Route path="/nine" element={<PageNine />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  return (
    <Router>
      <LocationAwareComponent />
    </Router>
  );
}

export default App;

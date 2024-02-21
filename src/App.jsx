import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experiences-gain/Experience1'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import PortfolioDetails from './components/Portfolio-Project-Details/PortfolioDetails';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import PortfolioDemo from './components/Portfolio-details-demo/PortfolioDemo';
import PortfolioSchema from './components/portfolio-details-schema/PortfolioSchema';
import PortfolioImages from './components/Portfolio-details-images/PortfolioImages';
import Design from './components/Design/Design';
import Testimonials from './components/Testimonials/Testimonials';
import Service from './components/Services-profile/Service';
import Internship from './components/Internship/Internship';
function App() {
  return (
    <HashRouter basename="/Deepak-Kumar">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/experience" component={Experience}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path={`/portfolio/:id`} component={PortfolioDetails}></Route>
        <Route exact path={`/portfolio/demo/:id`} component={PortfolioDemo}></Route>
        <Route exact path={`/portfolio/schema/:id`} component={PortfolioSchema}></Route>
        <Route exact path={`/portfolio/images/:id`} component={PortfolioImages}></Route>
        <Route exact path={`/design`} component={Design}></Route>
        <Route exact path={`/services`} component={Service}></Route>
        <Route exact path={`/testimonials`} component={Testimonials}></Route>
        <Route exact path={`/internships`} component={Internship}></Route>


      </Switch>
    </HashRouter >
  );
}
export default App;

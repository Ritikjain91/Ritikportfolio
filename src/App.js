

import NavBar from './Component/NavBar/NavBar';
import Hero from './Component/Hero/Hero'
import About from './Component/About/About';
import Services from './Component/Services/Services';
import MyWork from './Component/MyWork/MyWork'
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
   <MyWork/>
   <Contact/>
   <Footer/>

    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience'
import Servic from './components/servic/servic'
import Portofolio from './components/portofolio/portofolio'
import Testemonial from './components/testemonial/testemonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

 const App = () => {
  return (
      <>
       <Nav />
       <Header />
       <About />
       <Experience />
       <Servic />
       <Portofolio />
       <Testemonial />
       <Contact />
       <Footer />
      </>
  )
}
export default App;
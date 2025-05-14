import React from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/banner';
import ArchitectSection from './Component/ArchitectSection';
import WhatWeDo from './Component/Wwd';
import HomePage from './Component/Homepage';
import Recognition from './Component/recognition';
import RecentProjects from './Component/RecentProjects';
import BlogSection from './Component/blog';
import Contact from './Component/Contact';
import Footer from './Component/footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
       <Banner /> 
       <ArchitectSection /> 
       <WhatWeDo /> 
       <HomePage /> 
       <Recognition /> 
       <RecentProjects /> 
       <BlogSection />
        <Contact />
      </main>
       <Footer />
        
    
      
    </div>
  );
}

export default App;






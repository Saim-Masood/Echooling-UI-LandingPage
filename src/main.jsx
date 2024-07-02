import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Navbar/Nav.jsx'
import { ImageSlider } from './ImageSlider/ImageSlider.jsx'
import { Academics } from './Academics/Academics.jsx'
import { Welcome } from './Welcome/WelcomeSection.jsx'
import { Campus } from './CampusLife/CampusLife.jsx'
import { Courses } from './PopularCourses/Courses.jsx'
import { StudentShow } from './StudentsTrained/StudentsDisplay.jsx'
import { UpcomingEvent } from './UpcomingEvents/UpcomingEvents.jsx'
import { Testimonial } from './TestimonialCard/TestimonialCard.jsx'
import { News } from './NewsBlog/NewsBlog.jsx'
import { Footer } from './Footer/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
     <div> 
  <Nav />
  <ImageSlider/>
  <Academics/>
  <Welcome/>
  <Campus/>
  <Courses/>
  <StudentShow/>
  <UpcomingEvent/>
  <Testimonial/>
  <News/>
  <Footer/>
  </div>
   

)

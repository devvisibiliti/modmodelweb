import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import AboutContainer from '../../Components/AboutContainer/AboutContainer'
import Features from '../../Components/Features/Features'
import Reviewcontainer from '../../Components/Reviewcontainer/Reviewcontainer'
import AccordionCon from '../../Components/AccordionCon/AccordionCon'
// import WhyEOM from '../../Components/WhyEOMCon/WhyEOM'
import FAQ from '../../Components/Faq/Faq'
import EOMGrid from '../../Components/EOM_cards/WhyEom'
import AIConnect from '../../Components/AI/Ai'
import NoSoloJourneys from '../../Components/NoSoloJourneys/NoSoloJourneys'
import NetworkCommunity from '../../Components/NetworkCommunity/NetworkCommunity'
import JoinTheCommunity from '../../Components/JoinTheCommunity/JoinTheCommunity'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import Networking101 from '../../Components/Networking101/Networking101'
import MarqueeCards from '../../Components/MarqueeCards/MarqueeCards'
import MarqueeImages from '../../Components/MarqueeImages/MarqueeImages'
import TestimonialCarousel from '../../Components/Testimonials/Testimonials'
import ScrollPopup from '../../Components/ScrollPopup/ScrollPopup'
import { assets } from '../../assets/assets'


const Home = () => {

  const faqData = [
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      question: "FAQ Headings?",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];


  const imgsrc = assets.group81;
  return (
    <>
      {/* <ScrollPopup/> */}
      <HeroSection />
      <AboutContainer />
      <MarqueeCards />
      <NoSoloJourneys />
      <TestimonialCarousel />
      <AIConnect
        heading={
          <>
            Ask Your Doubts —<br />
            <div className="bg-yellow-400 inline-block p-2 mt-2 rounded-lg">Chat With Me</div>
          </>
        }
        imgsrc={imgsrc}
      />

      <EOMGrid />
      <MarqueeImages />
      <NetworkCommunity />
      <Networking101 />
      <TestimonialsSection />
      <JoinTheCommunity />
      <FAQ faqData={faqData} />
    </>
  )
}

export default Home
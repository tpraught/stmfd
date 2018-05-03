import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


const items = [
  {
    src: "../../../assets/images/04_1929Chevrolet.jpg",
    altText: '1929Chevrolet',
    caption: '1929 Chevrolet Side Mount Pump'
  },
  {
    src: "../../../assets/images/04_Ambulance1999.jpg",
    altText: '1999 Braun Custom',
    caption: '1999 Braun Custom'
  },
  {
    src: "../../../assets/images/04_Engine.jpg",
    altText: '1996 Pierce Saber Custom Chassis',
    caption: '1996 Pierce Saber Custom Chassis'
  },
  {
    src: "../../../assets/images/04_Engine12002.jpg",
    altText: '2002 Pierce Quantum Custom Chassis',
    caption: '2002 Pierce Quantum Custom Chassis'
  },
  {
    src: "../../../assets/images/04_GrassRig.jpg",
    altText: '1999 Chevrolet 3/4-Ton Forestener 500 Gal. Skid',
    caption: '1999 Chevrolet 3/4-Ton Forestener 500 Gal. Skid'
  },
  {
    src: "../../../assets/images/04_RescueVan.jpg",
    altText: '1991 Utilimaster Custom',
    caption: '1991 Utilimaster Custom'
  },
  {
    src: "../../../assets/images/04_Tanker2002.jpg",
    altText: '2002 Central States 2,000 Gal. Tanker',
    caption: '2002 Central States 2,000 Gal. Tanker'
  }
];

class Apparatus extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
   
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="1200"/>
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[4].id}
      src  = {heroImages[4].image}
      alt = {heroImages[4].name}
      />
      <Wrapper>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </Wrapper> 
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default Apparatus;
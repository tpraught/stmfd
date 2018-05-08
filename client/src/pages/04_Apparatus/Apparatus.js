import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col,
  Row
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
    src: "../../../assets/images/04_Apparatus/04_suzy.jpg",
    altText: '1929 Chevrolet',
    caption: '1929 Chevrolet Side Mount Pump'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_engine1.jpg",
    altText: '1999 Braun Custom',
    caption: '1999 Braun Custom'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_engine3.jpg",
    altText: '1996 Pierce Saber Custom Chassis',
    caption: '1996 Pierce Saber Custom Chassis'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_utility11.jpg",
    altText: '2002 Pierce Quantum Custom Chassis',
    caption: '2002 Pierce Quantum Custom Chassis'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_grass11.jpg",
    altText: '1999 Chevrolet 3/4-Ton Forestener 500 Gal. Skid',
    caption: '1999 Chevrolet 3/4-Ton Forestener 500 Gal. Skid'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_t8.jpg",
    altText: '2002 Central States 2,000 Gal. Tanker',
    caption: '2002 Central States 2,000 Gal. Tanker'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_ambulance.jpg",
    altText: '1991 Utilimaster Custom',
    caption: '1991 Utilimaster Custom'
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
          <img src={item.src} alt={item.altText} className="img-fluid" />
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
        <Row className="justify-content-center">
          <Col>
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
          </Col>
        </Row>
      </Wrapper> 
      <QuickLinks />
      <Footer />
    </div>
    )
  }
}

export default Apparatus;
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
    altText: '"Suzy" - 1929 Chevrolet Side Mount Pump Engine',
    caption: '"Suzy" - 1929 Chevrolet Side Mount Pump Engine'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_engine1.jpg",
    altText: 'Engine 1 - 2002 Pierce Quantum Tank',
    caption: 'Engine 1 - 2002 Pierce Quantum Tank'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_engine3.jpg",
    altText: 'Engine 3 - 1995 Pierce Sabre',
    caption: 'Engine 3 - 1995 Pierce Sabre'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_utility11.jpg",
    altText: 'Utility 11 - 2013 Freightline, Custom Fire',
    caption: 'Utility 11 - 2013 Freightline, Custom Fire'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_grass11.jpg",
    altText: 'Grass 11 - 2015 Ford with Polaris 6x6',
    caption: 'Grass 11 - 2015 Ford with Polaris 6x6'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_t8.jpg",
    altText: 'Tender 8 - 2001 Ford, 2,000 Gallon Tanker',
    caption: 'Tender 8 - 2001 Ford, 2,000 Gallon Tanker'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_ambulance.jpg",
    altText: 'Rescue 5 - 1995 Ford, North Central Ambulance',
    caption: 'Rescue 5 - 1995 Ford, North Central Ambulance'
  },
  {
    src: "../../../assets/images/04_Apparatus/04_ambulance2.jpg",
    altText: 'Rescue 9 - 1998 Ford, North Central Ambulance',
    caption: 'Rescue 9 - 1998 Ford, North Central Ambulance'
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
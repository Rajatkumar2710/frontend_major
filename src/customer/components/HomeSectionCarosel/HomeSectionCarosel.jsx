import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
const HomeSectionCarosel = () => {
  const responsive = {
    //if width is between 0 to 568 it will show one item
    0: { items: 1 },
    //if width is between 520 to 720 it will 2 items
    520: { items: 2 },
    //if width is greater than 720 to 1024 it will 3 items
    720: { items: 3 },
    //if width is greater than 1024 it will 5 items
    1024: { items: 5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          //buttons got disabled her
          disableButtonsControls
          infinite
          //this component make it responsive in rendering the no of items
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel;

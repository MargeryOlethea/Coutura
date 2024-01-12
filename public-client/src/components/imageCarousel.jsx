import { Carousel } from "flowbite-react";

export default function ImageCarousel() {
  return (
    <>
      <div className="h-96 mt-28 m-10">
        <Carousel>
          <img src="images/image12.jpeg" alt="fashion image" />
          <img src="images/image8.jpeg" alt="fashion image" />
          <img src="images/image9.jpeg" alt="fashion image" />
          <img src="images/image10.jpeg" alt="fashion image" />
          <img src="images/image11.jpeg" alt="fashion image" />
        </Carousel>
      </div>
    </>
  );
}

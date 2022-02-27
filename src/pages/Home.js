import { CarouselComponent } from '../components/Carousel/Carousel';
import { carousel1, carousel2, carousel3 } from '../images';

const carousel = [carousel1, carousel2, carousel3];

export default function Home() {
  return (
    <>
      <CarouselComponent carousel={carousel} />
    </>
  );
}

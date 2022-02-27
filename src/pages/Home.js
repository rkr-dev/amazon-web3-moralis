import { CardComponent } from '../components/Card/Card';
import { CarouselComponent } from '../components/Carousel/Carousel';
import {
  carousel1,
  carousel2,
  carousel3,
  comics,
  ArtemisFowl,
  MobyDick,
  adventure,
  dictionaries,
  fantasy,
  horror,
} from '../images';

const carousel = [carousel1, carousel2, carousel3];
const categoryCards = [adventure, fantasy, horror, dictionaries];
const style = {
  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'wrap',
  position: 'absolute',
  left: 0,
  top: '450px',
  paddingLeft: '20px',
  paddingRight: '20px',
  width: '100vw',
  gap: '15px',
};

const cards = [
  {
    id: 'shdhjsdhj',
    title: 'Browse Comics',
    image: comics,
    category: 'Comics',
  },
  {
    id: 'dsdljslkd',
    title: 'Artemis Fowl',
    image: ArtemisFowl,
    category: 'Comics',
  },
  {
    id: 'ewewheuw',
    title: 'Moby Dick',
    image: MobyDick,
    category: 'Comics',
  },
  {
    id: 'dhjshds',
    title: 'Shop By Category',
    catCards: categoryCards,
    category: 'Comics',
  },
];

export default function Home() {
  return (
    <>
      <CarouselComponent carousel={carousel} />
      <div className='cards' style={style}>
        {cards.map((card, i) => (
          <CardComponent cardData={card} key={i} />
        ))}
      </div>
    </>
  );
}

import {cards} from '../data/cards';
export const getRandomIndex = () => {
  return Math.floor(Math.random() * cards.length);
}
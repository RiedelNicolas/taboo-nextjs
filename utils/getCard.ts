import { cards } from '../data/cards';

export const getCard = (cardId: string | string[] | undefined) => {
    if (cardId === undefined ) {
        return null;
    }
    if (Array.isArray(cardId)) {
        return null;
    }
    const numCardId = Number(cardId);
    const card = cards.find((card) => card.index === numCardId);
    if(!card) return null;
    const words = card.words.split(',');
    words.splice(-1);
    return {
        index : card.index,
        title : card.title, 
        words : words, // split the words into an array
    }
};
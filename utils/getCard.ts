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
    return {
        index : card.index,
        title : card.title,
        words : card.words.split(','), // split the words into an array
    }
};
export const cardsData = [
    {
        id: 1,
        color: "yellow",
        isTurned: false,
    },
    {
        id: 2,
        color: "yellow",
        isTurned: false,
    },
    {
        id: 3,
        color: "blue",
        isTurned: false,
    },
    {
        id: 4,
        color: "blue",
        isTurned: false,
    },
    {
        id: 5,
        color: "red",
        isTurned: false,
    },
    {
        id: 6,
        color: "red",
        isTurned: false,
    },
    {
        id: 7,
        color: "green",
        isTurned: false,
    },
    {
        id: 8,
        color: "green",
        isTurned: false,
    },
    {
        id: 9,
        color: "orange",
        isTurned: false,
    },
    {
        id: 10,
        color: "orange",
        isTurned: false,
    },
];

export function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

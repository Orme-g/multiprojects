export const cardsData = [
    {
        id: 1,
        color: "yellow",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 2,
        color: "yellow",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 3,
        color: "blue",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 4,
        color: "blue",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 5,
        color: "red",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 6,
        color: "red",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 7,
        color: "green",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 8,
        color: "green",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 9,
        color: "orange",
        isTurned: false,
        isFinished: false,
    },
    {
        id: 10,
        color: "orange",
        isTurned: false,
        isFinished: false,
    },
];

export function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

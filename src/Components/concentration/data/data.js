import star from "../assets/Star.svg";
import pear from "../assets/Pear.svg";
import storm from "../assets/Storm.svg";
import heart from "../assets/Heart.svg";
import ball from "../assets/Ball.svg";
import coffee from "../assets/Coffee.svg";
import icecream from "../assets/Icecream.svg";
import cup from "../assets/Cup.svg";
import triangle from "../assets/Triangle.svg";
import strawberry from "../assets/Strawberry.svg";

export const cardsData = [
    {
        id: 1,
        name: "star",
        isTurned: false,
        isFinished: false,
        image: star,
    },
    {
        id: 2,
        name: "star",
        isTurned: false,
        isFinished: false,
        image: star,
    },
    {
        id: 3,
        name: "pear",
        isTurned: false,
        isFinished: false,
        image: pear,
    },
    {
        id: 4,
        name: "pear",
        isTurned: false,
        isFinished: false,
        image: pear,
    },
    {
        id: 5,
        name: "heart",
        isTurned: false,
        isFinished: false,
        image: heart,
    },
    {
        id: 6,
        name: "heart",
        isTurned: false,
        isFinished: false,
        image: heart,
    },
    {
        id: 7,
        name: "storm",
        isTurned: false,
        isFinished: false,
        image: storm,
    },
    {
        id: 8,
        name: "storm",
        isTurned: false,
        isFinished: false,
        image: storm,
    },
    {
        id: 9,
        name: "ball",
        isTurned: false,
        isFinished: false,
        image: ball,
    },
    {
        id: 10,
        name: "ball",
        isTurned: false,
        isFinished: false,
        image: ball,
    },
    {
        id: 11,
        name: "coffee",
        isTurned: false,
        isFinished: false,
        image: coffee,
    },
    {
        id: 12,
        name: "coffee",
        isTurned: false,
        isFinished: false,
        image: coffee,
    },
    {
        id: 13,
        name: "icecream",
        isTurned: false,
        isFinished: false,
        image: icecream,
    },
    {
        id: 14,
        name: "icecream",
        isTurned: false,
        isFinished: false,
        image: icecream,
    },
    {
        id: 15,
        name: "cup",
        isTurned: false,
        isFinished: false,
        image: cup,
    },
    {
        id: 16,
        name: "cup",
        isTurned: false,
        isFinished: false,
        image: cup,
    },
    {
        id: 17,
        name: "triangle",
        isTurned: false,
        isFinished: false,
        image: triangle,
    },
    {
        id: 18,
        name: "triangle",
        isTurned: false,
        isFinished: false,
        image: triangle,
    },
    {
        id: 19,
        name: "strawberry",
        isTurned: false,
        isFinished: false,
        image: strawberry,
    },
    {
        id: 20,
        name: "strawberry",
        isTurned: false,
        isFinished: false,
        image: strawberry,
    },
];

export function shuffleCards(cards) {
    let cardsCopy = structuredClone(cards);
    // let cardsCopy = [...cards];
    for (let i = cardsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }
    return cardsCopy;
}

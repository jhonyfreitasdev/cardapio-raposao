import { images } from "./images";

export const menu = [
    {
        id: "food",
        list: [
            {
                image: images.hamburguer,
                name: "Hambúrguer",
                desc: "Queijo, alface, tomate, cebola, picles, molho da casa e hamburger 300g.",
                price: 22.50
            },
            {
                image: images.batataFrita,
                name: "Batata Frita",
                price: 14.00
            },
            {
                image: images.frangoFrito,
                name: "Frango Frito",
                price: 20.00
            },
            {
                image: images.miniCoxinhas,
                name: "Mini coxinhas",
                price: 12.50
            },
        ]
    },
    {
        id: "chopp",
        list: [
            {
                image: images.skol,
                name: "Skol 600ml",
                price: 14.00
            },
            {
                image: images.imperio,
                name: "Império 300ml",
                price: 3.00
            },
            {
                image: images.brahma,
                name: "Brahma 350ml",
                price: 23.00
            },
        ]
    },
    {
        id: "drink",
        list: [
            {
                image: images.whisky,
                name: "Copo de Jack Daniels",
                price: 30.00
            },
            {
                image: images.gin,
                name: "Copo de Gin Sabores",
                price: 10.00
            },
            {
                image: images.ginTropical,
                name: "Copo de Gin tropical",
                price: 25.00
            },
            {
                image: images.chevette,
                name: "Chevette",
                price: 10.00
            },
            {
                image: images.jack,
                name: "Jack & Coke",
                price: 35.00
            }
        ]
    },
       
];
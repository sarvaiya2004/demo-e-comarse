import abc from "../image/images/man1.webp";
import m from "../image/images/man2.webp";
import l from "../image/images/man3.webp";
import o from "../image/images/man4.webp";
  
import n from "../image/images/man5.webp";
import p from "../image/images/man6.webp";
import q from "../image/images/man7.webp";
import r from "../image/images/man8.webp";

import d from "../image/images/man9.webp";
import s from "../image/images/man10.webp";
import t from "../image/images/man11.webp";

import e from "../image/images/man12.webp";
import v from "../image/images/man13.webp";
import w from "../image/images/man14.webp";

import f from "../image/images/man16.webp";
import z from "../image/images/man17.webp";
import A from "../image/images/man18.webp";

import g from "../image/images/man19.webp";
import C from "../image/images/man20.webp";
import D from "../image/images/man21.webp";

export const products = [
  {
    id: 1,
    name: "Red Printed T-shirt",
    image: abc,
    price: "$129",
    size: "M",
    moreimage: [
      { id: 1, url: l },
      { id: 2, url: m },
      { id: 3, url: o },
    ],
  },
  {
    id: 2,
    name: "black",
    image: n,
    price: "$299",
    size: "L",
    moreimage: [
      { id: 1, url: p },
      { id: 2, url: q },
      { id: 3, url: r },
    ],
  },
  {
    id: 3,
    name: "Red t- shirt",
    image: d,
    price: "$149",
    size: "M",
    moreimage: [
      { id: 1, url: s },
      { id: 2, url: t },
      { id: 3, url: d },
    ],
  },
  {
    id: 4,
    name: "Sports Shoes For Men",
    image: e,
    price: "$299",
    size: "M",
    moreimage: [
      { id: 1, url: v },
      { id: 2, url: w },
      { id: 3, url: e },
    ],
  },
  {
    id: 5,
    name: "NIKE shoes",
    image: f,
    price: "$249",
    size: "M",
    moreimage: [
      { id: 1, url: f },
      { id: 2, url: z },
      { id: 3, url: A },
    ],
  },
  {
    id: 6,
    name: "Women's woodey",
    image: g,
    price: "$249",
    size: "M",
    moreimage: [
      { id: 1, url: g },
      { id: 2, url: C },
      { id: 3, url: D },
    ],
  },

  // Add more products with reviews and sizes
];

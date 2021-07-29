const upgrades = [
  {
    name: "cursor",
    mirrorImage: false,
    initialPrice: 10,
    increasePerSecond: 0.1,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})", //a(rn - 1)/(r - 1)
    normalImage: require("../assets/img/upgrades/cursor.png"),
    darkImage: require("../assets/img/upgrades/cursor_dark.png"),
  },
  {
    name: "farm",
    mirrorImage: true,
    initialPrice: 100,
    increasePerSecond: 1,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/farm.png"),
    darkImage: require("../assets/img/upgrades/farm_dark.png"),
  },
  {
    name: "mine",
    mirrorImage: true,
    initialPrice: 1000,
    increasePerSecond: 10,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/mine.png"),
    darkImage: require("../assets/img/upgrades/mine_dark.png"),
  },
  {
    name: "factory",
    mirrorImage: true,
    initialPrice: 15000,
    increasePerSecond: 53,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/factory.png"),
    darkImage: require("../assets/img/upgrades/factory_dark.png"),
  },
  {
    name: "bank",
    mirrorImage: true,
    initialPrice: 120000,
    increasePerSecond: 320,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/bank.png"),
    darkImage: require("../assets/img/upgrades/bank_dark.png"),
  },
  {
    name: "portal",
    mirrorImage: true,
    initialPrice: 1300000,
    increasePerSecond: 1600,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/portal.png"),
    darkImage: require("../assets/img/upgrades/portal_dark.png"),
  },
  {
    name: "megatron",
    mirrorImage: true,
    initialPrice: 25000000,
    increasePerSecond: 8250,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/megatron.png"),
    darkImage: require("../assets/img/upgrades/megatron_dark.png"),
  },
  {
    name: "candy_prism",
    mirrorImage: true,
    initialPrice: 325000000,
    increasePerSecond: 56800,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/candy_prism.png"),
    darkImage: require("../assets/img/upgrades/candy_prism_dark.png"),
  },
  {
    name: "candy_planets",
    mirrorImage: true,
    initialPrice: 3000000000,
    increasePerSecond: 320000,
    evalPrice: "{{initialPrice}} * Math.pow(1.15, {{currentLevel}})",
    normalImage: require("../assets/img/upgrades/candy_planets.png"),
    darkImage: require("../assets/img/upgrades/candy_planets_dark.png"),
  },
];

const data = {}

export { upgrades }
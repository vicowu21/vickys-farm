export const inventory = {
  currentStock: {
    "Rhode Island Red": {
      adult: { hens: 500, roosters: 50 },
      juvenile: 300,
      chicks: 450,
    },
    "Plymouth Rock": {
      adult: { hens: 400, roosters: 40 },
      juvenile: 250,
      chicks: 350,
    },
    "Leghorn": {
      adult: { hens: 600, roosters: 60 },
      juvenile: 400,
      chicks: 500,
    },
    "Broiler": {
      growing: 2000,
      chicks: 1500,
    },
  },
  feed: {
    "Layer Feed": {
      inStock: "2000 kg",
      monthly_consumption: "1800 kg",
    },
    "Broiler Feed": {
      inStock: "3000 kg",
      monthly_consumption: "2800 kg",
    },
    "Chick Starter": {
      inStock: "1000 kg",
      monthly_consumption: "800 kg",
    },
  },
  equipment: {
    incubators: {
      total: 12,
      active: 10,
      capacity: "1000 eggs each",
    },
    feeders: {
      automatic: 150,
      manual: 200,
    },
    waterers: {
      automatic: 180,
      manual: 150,
    },
  },
};

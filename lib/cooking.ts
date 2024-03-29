interface Unit {
  key?: string;
  type: "WEIGHT" | "VOLUME" | "COUNT" | "ARBITRARY" | "TEMPERATURE";
  name: string;
  abbreviation: string;
  conversionFactor?: number;
}

const units: Unit[] = [
  { type: "WEIGHT", name: "gram", abbreviation: "g", conversionFactor: 1, key: "g" },
  { type: "WEIGHT", name: "milligram", abbreviation: "mg", conversionFactor: 0.001, key: "mg"},
  { type: "WEIGHT", name: "kilogram", abbreviation: "kg", conversionFactor: 1000, key: "kg"},
  { type: "WEIGHT", name: "ounce", abbreviation: "oz", conversionFactor: 28.3495, key: "oz" },
  { type: "WEIGHT", name: "pound", abbreviation: "lb", conversionFactor: 453.592, key: "lb" },
  { type: "VOLUME", name: "milliliter", abbreviation: "ml", conversionFactor: 1, key: "ml" },
  { type: "VOLUME", name: "liter", abbreviation: "l", conversionFactor: 1000, key: "l" },
  { type: "VOLUME", name: "teaspoon", abbreviation: "tsp", conversionFactor: 4.92892, key: "tsp" },
  { type: "VOLUME", name: "tablespoon", abbreviation: "tbsp", conversionFactor: 14.7868 },
  { type: "VOLUME", name: "cup", abbreviation: "cup", conversionFactor: 236.588 },
  { type: "VOLUME", name: "pint", abbreviation: "pt", conversionFactor: 473.176 },
  { type: "VOLUME", name: "quart", abbreviation: "qt", conversionFactor: 946.353 },
  { type: "VOLUME", name: "gallon", abbreviation: "gal", conversionFactor: 3785.41 },
  { type: "VOLUME", name: "fluid ounce", abbreviation: "fl oz", conversionFactor: 29.5735 },
  { type: "COUNT", name: "count", abbreviation: "ct", conversionFactor: 1 },
  { type: "COUNT", name: "each", abbreviation: "ea", conversionFactor: 1 },
  { type: "COUNT", name: "dozen", abbreviation: "dozen", conversionFactor: 12 },
  { type: "COUNT", name: "bunch", abbreviation: "bunch", conversionFactor: 1 },
  { type: "COUNT", name: "head", abbreviation: "head", conversionFactor: 1 },
  { type: "COUNT", name: "stalk", abbreviation: "stalk", conversionFactor: 1 },
  { type: "COUNT", name: "bulb", abbreviation: "bulb", conversionFactor: 1 },
  { type: "COUNT", name: "clove", abbreviation: "clove", conversionFactor: 1 },
  { type: "COUNT", name: "sprig", abbreviation: "sprig", conversionFactor: 1 },
  { type: "ARBITRARY", name: "pinch", abbreviation: "pinch", conversionFactor: 1 },
  { type: "ARBITRARY", name: "dash", abbreviation: "dash", conversionFactor: 1 },
  { type: "ARBITRARY", name: "smidgen", abbreviation: "smidgen", conversionFactor: 1 },
  { type: "ARBITRARY", name: "drop", abbreviation: "drop", conversionFactor: 1 },
  { type: "ARBITRARY", name: "touch", abbreviation: "touch", conversionFactor: 1 },
  { type: "ARBITRARY", name: "handful", abbreviation: "handful", conversionFactor: 1 },
  { type: "ARBITRARY", name: "fistful", abbreviation: "fistful", conversionFactor: 1 },
  { type: "ARBITRARY", name: "glass", abbreviation: "glass", conversionFactor: 1 },
  {
    type: "ARBITRARY",
    name: "cupped handful",
    abbreviation: "cupped handful",
    conversionFactor: 1,
  },
  { type: "ARBITRARY", name: "palmful", abbreviation: "palmful", conversionFactor: 1 },
  { type: "ARBITRARY", name: "finger", abbreviation: "finger", conversionFactor: 1 },
  { type: "ARBITRARY", name: "knuckle", abbreviation: "knuckle", conversionFactor: 1 },
  { type: "ARBITRARY", name: "fingertip", abbreviation: "fingertip", conversionFactor: 1 },
];

const preparations = [
  "chopped",
  "finely chopped",
  "roughly chopped",
  "minced",
  "sliced",
  "thinly sliced",
  "diced",
  "small diced",
  "medium diced",
  "large diced",
  "julienned",
  "brunoise",
  "grated",
  "zested",
  "peeled",
  "cored",
  "seeded",
  "halved",
  "quartered",
  "cubed",
  "shredded",
  "mashed",
  "pureed",
  "crushed",
  "juiced",
  "battonet",
  "chiffonade",
  "shaved",
  "crushed",
  "pitted",
  "trimmed",
  "deveined",
  "cut into rounds",
  "cut into strips",
  "cut into wedges",
  "cut into cubes",
  "cut into florets",
]



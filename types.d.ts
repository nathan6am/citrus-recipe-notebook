interface Recipe {
  name: string;
  description: string;
  activeTime: number;
  totalTime: number;
  tags: string[];
  images: string[];
  ingredients: Array<{
    ingredientKey: string;
    quantity: Quantity;
    preparation?: string;
  }>;
}

interface DirectionStep {
  title: string;
  text: string;
  ingredients: string[];
  equipment: string[];
  notes: string[];
  timer?: Timer;
  image?: string;
}

interface Timer {
  minDuration?: number;
  maxDuration: number;
  reminder?: number;
}

type UnitSystem = "METRIC" | "IMPERIAL" | "ORIGINAL";
type TemperatureSystem = "CELSIUS" | "FAHRENHEIT" | "ORIGINAL";

interface AppSettings {
  defaultUnits: UnitSystem;
  defaultTemps: TemperatureSystem;
  useVolumeWeightConversion: boolean;
  useFractionalQuantities: boolean;
  autoAdjustServings: boolean;
  defaultServings: number;
  timerSound: string;
  timerVolume: number;
  timerVibrate: boolean;
  notifications: boolean;
  darkMode: boolean;
  language: string;
}

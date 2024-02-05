import { createContext } from "react";

export const defaultSettings: AppSettings = {
  darkMode: false,
  notifications: false,
  defaultUnits: "ORIGINAL",
  defaultTemps: "ORIGINAL",
  useFractionalQuantities: false,
  useVolumeWeightConversion: false,
  autoAdjustServings: false,
  defaultServings: 4,
  timerSound: "ALARM",
  timerVibrate: true,
  timerVolume: 1,
  language: "en",
};

export const SettingsContext = createContext<{
  settings: AppSettings;
  updateSettings: (settings: Partial<AppSettings>) => void;
}>({ settings: defaultSettings, updateSettings: () => {} });

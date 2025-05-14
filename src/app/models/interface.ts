export interface Login {
  email: String;
  password: String;
}

export interface linkItems {
  label: String;
  icon: string;
  path: String;
}

export interface sidebarLinksI {
  section: String;
  items: linkItems[];
}

export interface productI {
  id: number;
  type: string;
  category: string;
  currency: string;
  frequency: string;
  profitLoss: number;
}

export interface transactionsI {
  id: number;
  type: string;
  volume: number;
  category: string;
  currency: string;
  frequency: string;
  colorData: string;
}

export interface productMaturityI {
  id: number;
  label: string;
  value: number;
  colorData: string;
}

export interface costAndRevenueI {
  id: number;
  region: string;
  budget: number;
  actual: number;
}

export interface NetOpeningPosition {
  label: string;
  date: string;
  NGN: number;
  USD: number;
  EURO: number;
  GBP: number;
}

export interface SettingItemI {
  title: string;
  description: string;
  icon: string; // could be a URL, local path, or icon name reference
}

export interface IAdmin {
  title: string;
  description: string;
  icon: string; // could be a URL, local path, or icon name reference
  path: string;
}

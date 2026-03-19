import { useEffect, useState } from "react";

const COINS_KEY = "coins";
const DEFAULT_COINS = 0;

export const readCoins = () => {
  const raw = localStorage.getItem(COINS_KEY);
  const parsed = raw ? Number(raw) : DEFAULT_COINS;
  return Number.isNaN(parsed) ? DEFAULT_COINS : parsed;
};

export const writeCoins = (value) => {
  localStorage.setItem(COINS_KEY, String(value));
  window.dispatchEvent(new Event("coins-updated"));
};

export const addCoins = (delta) => {
  const current = readCoins();
  const next = Math.max(0, current + delta);
  writeCoins(next);
  return next;
};

export const useCoins = () => {
  const [coins, setCoinsState] = useState(readCoins());

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key && event.key !== COINS_KEY) return;
      setCoinsState(readCoins());
    };

    const handleCoinsUpdated = () => {
      setCoinsState(readCoins());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("coins-updated", handleCoinsUpdated);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("coins-updated", handleCoinsUpdated);
    };
  }, []);

  const setCoins = (value) => {
    const next = typeof value === "function" ? value(readCoins()) : value;
    if (Number.isNaN(next)) return;
    writeCoins(next);
    setCoinsState(next);
  };

  return [coins, setCoins];
};

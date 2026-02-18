import React, { useMemo, useState } from "react";
import "./PetShop.css";

const CATEGORIES = [
  { id: "outfits", label: "Outfits", icon: "👕" },
  { id: "accessories", label: "Accessories", icon: "🕶️" },
  { id: "toys", label: "Toys", icon: "🧸" },
  { id: "food", label: "Food", icon: "🍔" },
  { id: "boosts", label: "Boosts", icon: "⚡" },
  { id: "backgrounds", label: "Backgrounds", icon: "🌄" }
];

const ITEMS = [
  { id: "hoodie", cat: "outfits", name: "Hoodie", price: 80, emoji: "🧥", rarity: "rare" },
  { id: "cap", cat: "outfits", name: "Cap", price: 40, emoji: "🧢", rarity: "common" },
  { id: "shades", cat: "accessories", name: "Shades", price: 60, emoji: "🕶️", rarity: "rare" },
  { id: "bone", cat: "food", name: "Treat", price: 15, emoji: "🦴", rarity: "common" },
  { id: "burger", cat: "food", name: "Meal", price: 35, emoji: "🍔", rarity: "common" },
  { id: "rocket", cat: "boosts", name: "Boost", price: 120, emoji: "🚀", rarity: "epic" },
  { id: "mountain", cat: "backgrounds", name: "Mountains", price: 150, emoji: "🏔️", rarity: "epic" }
];

export default function PetShop() {
  const [cat, setCat] = useState("outfits");
  const [coins, setCoins] = useState(120);
  const [selected, setSelected] = useState(null);

  const visibleItems = useMemo(
    () => ITEMS.filter((item) => item.cat === cat),
    [cat]
  );

  const buy = () => {
    if (!selected) return;
    if (coins < selected.price) return;
    setCoins((current) => current - selected.price);
  };

  return (
    <div className="ps-wrap">
      <div className="ps-top">
        <div className="ps-player">
          <div className="ps-avatar">🧒</div>
          <div className="ps-playerText">
            <div className="ps-name">Player</div>
            <div className="ps-sub">Level 2</div>
          </div>
        </div>

        <div className="ps-currencies">
          <div className="ps-pill">🪙 {coins}</div>
          <div className="ps-pill ps-pillBlue">💎 20</div>
        </div>

        <div className="ps-topBtns">
          <button className="ps-topBtn">🎯 Missions</button>
          <button className="ps-topBtn">⚙️ Settings</button>
        </div>
      </div>

      <div className="ps-grid">
        <aside className="ps-panel">
          <div className="ps-panelTitle">Shop</div>

          <div className="ps-catList">
            {CATEGORIES.slice(0, 3).map((category) => (
              <button
                key={category.id}
                className={`ps-catBtn ${cat === category.id ? "active" : ""}`}
                onClick={() => setCat(category.id)}
              >
                <span className="ps-catIcon">{category.icon}</span>
                <span className="ps-catText">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="ps-bonus">
            <div className="ps-bonusTitle">Daily Bonus</div>
            <button className="ps-claim">Claim 🎁</button>
            <div className="ps-timer">Next in 02:15:29</div>
          </div>
        </aside>

        <main className="ps-stage">
          <div className="ps-banner">
            <div className="ps-bannerTitle">PennyPals Pet Shop</div>
            <div className="ps-bannerSub">VIP Pet</div>
          </div>

          <div className="ps-platform">
            <div className="ps-glow" />
            <div className="ps-pet">
              <div className="ps-petFace">🦊</div>
              <div className="ps-petTag">Cool Buddy</div>
            </div>

            <div className="ps-loot ps-lootLeft">🪙🪙🪙</div>
            <div className="ps-loot ps-lootRight">💵💵</div>
          </div>

          <div className="ps-items">
            {visibleItems.map((item) => (
              <button
                key={item.id}
                className={`ps-item ${selected?.id === item.id ? "selected" : ""} ${item.rarity}`}
                onClick={() => setSelected(item)}
              >
                <div className="ps-itemEmoji">{item.emoji}</div>
                <div className="ps-itemPrice">🪙 {item.price}</div>
              </button>
            ))}
          </div>

          <div className="ps-buyBar">
            <div className="ps-selected">
              {selected ? (
                <>
                  <span className="ps-bigEmoji">{selected.emoji}</span>
                  <span className="ps-selectedName">{selected.name}</span>
                </>
              ) : (
                <span className="ps-selectedHint">Pick an item ✨</span>
              )}
            </div>

            <button className="ps-buyBtn" onClick={buy} disabled={!selected}>
              Buy
            </button>
          </div>
        </main>

        <aside className="ps-panel">
          <div className="ps-panelTitle">More</div>

          <div className="ps-catList">
            {CATEGORIES.slice(3).map((category) => (
              <button
                key={category.id}
                className={`ps-catBtn ${cat === category.id ? "active" : ""}`}
                onClick={() => setCat(category.id)}
              >
                <span className="ps-catIcon">{category.icon}</span>
                <span className="ps-catText">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="ps-offer">
            <div className="ps-offerTitle">Special Offer</div>
            <div className="ps-offerChest">🧰✨</div>
            <button className="ps-offerBtn">Open</button>
            <div className="ps-offerNote">Coins only (no real money)</div>
          </div>
        </aside>
      </div>

      <div className="ps-bottom">
        <button className="ps-navBtn ps-navPrimary">▶ Play</button>
        <button className="ps-navBtn">👥 Friends</button>
        <button className="ps-navBtn active">🛍️ Shop</button>
        <button className="ps-navBtn">🎒 Inventory</button>
      </div>
    </div>
  );
}

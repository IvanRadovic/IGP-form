import { useState } from "react";

/*============ IMAGES ============*/
import jackpot from "../../../../assets/images/gamesLogo/jackpot.png";
import dice from "../../../../assets/images/gamesLogo/3d-dice.png";
import casinoChip from "../../../../assets/images/gamesLogo/casino-chip.png";
import casino from "../../../../assets/images/gamesLogo/casino.png";
import cardGame from "../../../../assets/images/gamesLogo/card-game.png";
import pokerTable from "../../../../assets/images/gamesLogo/poker-table.png";
import poker from "../../../../assets/images/gamesLogo/poker.png";
import chip from "../../../../assets/images/gamesLogo/chip.png";
import Search from "../../../../components/UI/serach/Search.tsx";

const CategoryGame = ({ categoryGames }) => {
  const categoryImages: Record<string, JSX.Element> = {
    jackpot: jackpot,
    megaways: dice,
    "bonus-buys": casinoChip,
    popular: casino,
    new: cardGame,
    xmas: chip,
    live: poker,
    "table-games": pokerTable,
  };

  // function which filtrater available categories by name and providers
  const handleSearch = (query: string) => {
    const availableCategories = categoryGames
      ?.filter(
        (category) =>
          category.publishing?.status === "published" &&
          [
            "category",
            "subCategory",
            "tags",
            "type",
            "extraCategories",
          ].includes(category.type) &&
          category.title.toLowerCase().includes(query.toLowerCase()),
      )
      ?.map((category) => ({
        slug: category.slug,
        title:
          category.type === "extraCategories"
            ? category.multilingual.find((m) => m.language === "en")?.title ||
              category.slug
            : category.title,
        icon: categoryImages[category.slug] || categoryImages.jackpot,
      }));
  };

  const availableCategories = categoryGames
    ?.filter(
      (category) =>
        category.publishing?.status === "published" &&
        ["category", "subCategory", "tags", "type", "extraCategories"].includes(
          category.type,
        ),
    )
    ?.map((category) => ({
      slug: category.slug,
      title:
        category.type === "extraCategories"
          ? category.multilingual.find((m) => m.language === "en")?.title ||
            category.slug
          : category.title,
      icon: categoryImages[category.slug] || categoryImages.jackpot,
    }));

  return (
    <>
      <div className="categories-container">
        {availableCategories?.map((category) => (
          <div key={category.slug} className="category">
            <img
              className="img-category"
              src={category.icon}
              alt={category.title}
            />
            <span>{category.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryGame;

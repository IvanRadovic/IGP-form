/*============ IMAGES ============*/
import jackpot from "../../../../assets/images/gamesLogo/jackpot.png";
import dice from "../../../../assets/images/gamesLogo/3d-dice.png";
import casinoChip from "../../../../assets/images/gamesLogo/casino-chip.png";
import casino from "../../../../assets/images/gamesLogo/casino.png";
import cardGame from "../../../../assets/images/gamesLogo/card-game.png";
import pokerTable from "../../../../assets/images/gamesLogo/poker-table.png";
import poker from "../../../../assets/images/gamesLogo/poker.png";
import chip from "../../../../assets/images/gamesLogo/chip.png";

export const CATEGORY_IMAGES: Record<string, string> = {
  jackpot,
  megaways: dice,
  "bonus-buys": casinoChip,
  popular: casino,
  new: cardGame,
  xmas: chip,
  live: poker,
  "table-games": pokerTable,
};

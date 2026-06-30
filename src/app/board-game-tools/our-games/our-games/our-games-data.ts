export interface Game {
  name: string,
  playerCount: string,
  length: GameLength
  gameStyles: Array<GameType>;
  thumbnail?: string;
  bggLink: string
}

enum GameLength {
  Short = 'Short',
  Medium = 'Medium',
  Long = 'Long',
  ExtraLong = 'Extra Long'
}

enum GameType {
  RPG = 'RPG',
  DungeonCrawler = 'Dungeon Crawler',
  AreaControl = 'Area Control',
  Skirmish = 'Skirmish',
  WorkerPlacement = 'Worker Placement',
  ResourceManagement = 'Resource Management',
  Drafting = 'Drafting',
  Deckbuilding = 'Deck Building',
  DeckBattler = "Deck Battler",
  Wargame = 'Wargame',
  Cooperative = "Cooperative",
  BossBattler = "Boss Battler",
  PushYourLuck = "Push Your Luck",
  Strategy = "Strategy",
  GarbageGame = "Complete Garbage Game",
  Betting = "Betting",
  OneVersusMany = "One Versus Many",
  EngineBuilding = "Engine Building",
  DiceCombat = "Dice Combat",
  CardCombat = "Card Combat",
  Dexterity = "Dexterity"
}

export const gameData: Array<Game> = [
  {
    name: 'Heroes of Land, Air, and Sea',
    playerCount: '1-7',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl],
    bggLink: 'https://boardgamegeek.com/boardgame/198830/heroes-of-land-air-and-sea',
    thumbnail: 'https://cf.geekdo-images.com/MAIDRapFcDC08pmZIBM7EQ__itemrep/img/bB9fIJTc34pjIAop4vT9Qo9UQvs=/fit-in/246x300/filters:strip_icc()/pic3315057.png'
  },
  {
    name: 'Uprising',
    playerCount: '1-6',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Wargame],
    bggLink: 'https://deshiken.github.io/#/uprising',
    thumbnail: '../../../assets/uprising248x248.webp'
  },
  {
    name: 'Primal: The Awakening',
    playerCount: '1-4',
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.BossBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/303731/primal-the-awakening',
    thumbnail: 'https://cf.geekdo-images.com/ZaK89ogXLarRb3zRq4lhjg__itemrep/img/FJ8rwv7wR842cFWWyb7lZibvzvw=/fit-in/246x300/filters:strip_icc()/pic5267092.jpg'
  },
  {
    name: 'Spirit Island',
    playerCount: '1-6',
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.Deckbuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/162886/spirit-island',
    thumbnail: 'https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__itemrep/img/7AXozbOIxk5MDpn_RNlat4omAcc=/fit-in/246x300/filters:strip_icc()/pic7013651.jpg'
  },
  {
    name: 'Oak',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/343362/oak',
    thumbnail: 'https://cf.geekdo-images.com/skiu7wU44_3H2pBjstUB9A__itemrep/img/snVILlbVtGguecoStbnznseBCwE=/fit-in/246x300/filters:strip_icc()/pic6739647.jpg'
  },
  {
    name: 'Everdell',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/199792/everdell',
    thumbnail: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__itemrep/img/nyVhVuXdmw-1sigbocTKG81UInM=/fit-in/246x300/filters:strip_icc()/pic3918905.png'
  },
  {
    name: 'Mystic Vale',
    playerCount: '1-6',
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.PushYourLuck],
    bggLink: 'https://boardgamegeek.com/boardgame/194607/mystic-vale',
    thumbnail: 'https://cf.geekdo-images.com/2cf8lebaIrJ8Z62HGEs2wQ__itemrep/img/fHUOINdWuIy88ikjNIVqg-4_Gcw=/fit-in/246x300/filters:strip_icc()/pic3287905.png'
  },
  {
    name: 'War of the Ring',
    playerCount: '1-6',
    length: GameLength.ExtraLong,
    gameStyles: [GameType.Wargame, GameType.PushYourLuck, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/115746/war-of-the-ring-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__itemrep/img/dagUJ0H2LGVIjYaeQ_XVweBZRfI=/fit-in/246x300/filters:strip_icc()/pic1215633.jpg'
  },
  {
    name: 'Cairn',
    playerCount: '2',
    length: GameLength.Short,
    gameStyles: [GameType.Strategy],
    bggLink: 'https://boardgamegeek.com/boardgame/275916/cairn',
    thumbnail: 'https://cf.geekdo-images.com/dT0ephy8PTzXyaM2XWa9KQ__itemrep/img/0xIglRfKbNWoeKUbAabO3zBoNrQ=/fit-in/246x300/filters:strip_icc()/pic7730638.jpg'
  },
  {
    name: 'Ankh: Gods of Egypt',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/285967/ankh-gods-of-egypt',
    thumbnail: 'https://cf.geekdo-images.com/_al0scMG_pQfGVM31Scf1Q__itemrep/img/E60DF99hzvTXPdT9hVuh9u6xXUI=/fit-in/246x300/filters:strip_icc()/pic6107853.jpg'
  },
  {
    name: 'Blood Rage',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/170216/blood-rage',
    thumbnail: 'https://cf.geekdo-images.com/HkZSJfQnZ3EpS214xtuplg__itemrep/img/ZSJhCapvtPoiIQZ1XdfO-qgUuFY=/fit-in/246x300/filters:strip_icc()/pic2439223.jpg'
  },
  {
    name: 'Inis',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting],
    bggLink: 'https://boardgamegeek.com/boardgame/155821/inis',
    thumbnail: 'https://cf.geekdo-images.com/6QE8mnPFmauoj2THsyUYPA__itemrep/img/Ni9BrlYQ43slFAi3I3QWUTsDZTM=/fit-in/246x300/filters:strip_icc()/pic4739757.jpg',
  },
  {
    name: 'Kemet: Blood and Sand',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/297562/kemet-blood-and-sand',
    thumbnail: 'https://cf.geekdo-images.com/IU-az-0jlIpoUxDHCCclNw__itemrep/img/hk01l3YMGIwS85fFnHjmaonYmnM=/fit-in/246x300/filters:strip_icc()/pic6230640.jpg',
  },
  {
    name: 'Catan',
    playerCount: '0 (Do not play it)',
    length: GameLength.Medium,
    gameStyles: [GameType.GarbageGame],
    bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
    thumbnail: 'https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__itemrep/img/6Jf5G-bSvdOIMUSwxsJfZXl29B8=/fit-in/246x300/filters:strip_icc()/pic9156909.png',
  },
  {
    name: 'Tiny Epic Dungeons',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/331787/tiny-epic-dungeons',
    thumbnail: 'https://cf.geekdo-images.com/rDOnDFAwGXi_fVsfp-ZCqw__itemrep/img/oxzDfv6aanu2JhSofxwTIDrw1pk=/fit-in/246x300/filters:strip_icc()/pic6029065.jpg'
  },
  {
    name: 'Descent: Journeys in the Dark',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG, GameType.OneVersusMany],
    bggLink: 'https://boardgamegeek.com/boardgame/104162/descent-journeys-in-the-dark-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/ZN2rpiJ19lg5DZk_iYMMkQ__itemrep/img/41lkbqHPfzqXfXLBYyMZoEpJfBs=/fit-in/246x300/filters:strip_icc()/pic1180640.jpg'
  },
  {
    name: 'Sword and Sorcery: Immortal Souls',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/170771/sword-and-sorcery-immortal-souls',
    thumbnail: 'https://cf.geekdo-images.com/FNVnu-vB8WjyQTf63Ssvig__itemrep/img/wZRuBv2Rvg0ZTyEU_m-laCY9IOU=/fit-in/246x300/filters:strip_icc()/pic2673763.jpg'
  },
  {
    name: 'Sword and Sorcery: Ancient Chronicles',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/262201/sword-and-sorcery-ancient-chronicles',
    thumbnail: 'https://cf.geekdo-images.com/PXC0YrJWddsi7r0z_d3hIw__itemrep/img/1E1aegDOoZgZQc24mzFS0dGei2Y=/fit-in/246x300/filters:strip_icc()/pic4340969.jpg'
  },
  {
    name: 'Hero Realms',
    playerCount: '1-4',
    length: GameLength.Short,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/198994/hero-realms',
    thumbnail: 'https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__itemrep/img/RmwH7iCHWE9wFAVR6uH2FwQ_yGI=/fit-in/246x300/filters:strip_icc()/pic6162556.png',
  },
  {
    name: '7 Wonders',
    playerCount: '2-4',
    length: GameLength.Medium,
    gameStyles: [GameType.Drafting, GameType.EngineBuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/316377/7-wonders-second-edition',
    thumbnail: '',
  },
  {
    name: 'Legendary: A Marvel Deck Building Game',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/129437/legendary-a-marvel-deck-building-game'
  },
  {
    name: 'Dice Wars: Heroes of Polyhedra',
    playerCount: '2-4',
    length: GameLength.Medium,
    gameStyles: [GameType.Skirmish, GameType.DiceCombat, GameType.Wargame],
    bggLink: 'https://boardgamegeek.com/boardgame/242818/dice-wars-heroes-of-polyhedra',
    thumbnail: 'https://cf.geekdo-images.com/KJbbNBK9rKicp46VirvUeQ__itemrep/img/5O7l1bVlYce0x9vpIYeBoVlg1yU=/fit-in/246x300/filters:strip_icc()/pic3924509.jpg'
    
  },
  {
    name: 'Legendary Encounters: An Alien Deck Building Game',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/146652/legendary-encounters-an-alien-deck-building-game'
  },
  {
    name: 'Camel Up',
    playerCount: '2-8',
    length: GameLength.Short,
    gameStyles: [GameType.Betting],
    bggLink: 'https://boardgamegeek.com/boardgame/146652/legendary-encounters-an-alien-deck-building-game'
  },
  {
    name: 'Conquest of Nerath',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.Wargame, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/92044/dungeons-and-dragons-conquest-of-nerath-board-game'
  },
  {
    name: 'King of Tokyo',
    playerCount: '2-6',
    length: GameLength.Short,
    gameStyles: [GameType.PushYourLuck],
    bggLink: 'https://boardgamegeek.com/boardgame/336755/king-of-tokyo-monster-box'
  },
  {
    name: 'Battlelore',
    playerCount: '2',
    length: GameLength.Long,
    gameStyles: [GameType.Skirmish],
    bggLink: 'https://boardgamegeek.com/boardgame/146439/battlelore-second-edition'
  },
  {
    name: 'Gloomhaven: Jaws of the Lion',
    playerCount: '1-4',
    length: GameLength.Long,
    gameStyles: [GameType.RPG, GameType.DungeonCrawler],
    bggLink: 'https://boardgamegeek.com/boardgame/291457/gloomhaven-jaws-of-the-lion'
  },
  {
    name: 'Evolution Climate',
    playerCount: '2-6',
    length: GameLength.Long,
    gameStyles: [GameType.EngineBuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/182134/evolution-climate'
  },
  {
    name: 'Junk Art',
    playerCount: '2-6',
    length: GameLength.Short,
    gameStyles: [GameType.Dexterity],
    bggLink: 'https://boardgamegeek.com/boardgame/193042/junk-art'
  },
  {
    name: 'Burning Banners: Rage of the Witch Queen',
    playerCount: '2-6',
    length: GameLength.Long,
    gameStyles: [GameType.Wargame, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/389820/burning-banners'
  },
  {
    name: 'Arackhan Wars',
    playerCount: '2-4',
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/389820/burning-banners'
  },
  {
    name: 'Mage Wars Academy',
    playerCount: '2-4',
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/172503/mage-wars-academy'
  },
  {
    name: 'Marvel United',
    playerCount: '1-4',
    length: GameLength.Short,
    gameStyles: [GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/298047/marvel-united'
  },
  {
    name: 'Epic Card Game',
    playerCount: '2-4',
    length: GameLength.Short,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler, GameType.Drafting],
    bggLink: 'https://boardgamegeek.com/boardgame/175621/epic-card-game'
  },
]

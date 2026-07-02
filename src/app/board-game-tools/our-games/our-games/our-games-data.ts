export interface Game {
  name: string,
  playerCount: {
    minimumNumberOfPlayers: number,
    maximumNumberOfPlayers: number
  },
  length: GameLength
  gameStyles: Array<GameType>;
  thumbnail?: string;
  bggLink: string
}

export enum GameLength {
  Short = 'Short',
  Medium = 'Medium',
  Long = 'Long',
  ExtraLong = 'Extra Long'
}

export enum GameType {
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
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 7
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl],
    bggLink: 'https://boardgamegeek.com/boardgame/198830/heroes-of-land-air-and-sea',
    thumbnail: 'https://cf.geekdo-images.com/MAIDRapFcDC08pmZIBM7EQ__itemrep/img/bB9fIJTc34pjIAop4vT9Qo9UQvs=/fit-in/246x300/filters:strip_icc()/pic3315057.png'
  },
  {
    name: 'Uprising',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Wargame],
    bggLink: 'https://deshiken.github.io/#/uprising',
    thumbnail: '../../../assets/uprising248x248.webp'
  },
  {
    name: 'Primal: The Awakening',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.BossBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/303731/primal-the-awakening',
    thumbnail: 'https://cf.geekdo-images.com/ZaK89ogXLarRb3zRq4lhjg__itemrep/img/FJ8rwv7wR842cFWWyb7lZibvzvw=/fit-in/246x300/filters:strip_icc()/pic5267092.jpg'
  },
  {
    name: 'Spirit Island',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.Deckbuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/162886/spirit-island',
    thumbnail: 'https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__itemrep/img/7AXozbOIxk5MDpn_RNlat4omAcc=/fit-in/246x300/filters:strip_icc()/pic7013651.jpg'
  },
  {
    name: 'Oak',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/343362/oak',
    thumbnail: 'https://cf.geekdo-images.com/skiu7wU44_3H2pBjstUB9A__itemrep/img/snVILlbVtGguecoStbnznseBCwE=/fit-in/246x300/filters:strip_icc()/pic6739647.jpg'
  },
  {
    name: 'Everdell',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/199792/everdell',
    thumbnail: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__itemrep/img/nyVhVuXdmw-1sigbocTKG81UInM=/fit-in/246x300/filters:strip_icc()/pic3918905.png'
  },
  {
    name: 'Mystic Vale',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.PushYourLuck],
    bggLink: 'https://boardgamegeek.com/boardgame/194607/mystic-vale',
    thumbnail: 'https://cf.geekdo-images.com/2cf8lebaIrJ8Z62HGEs2wQ__itemrep/img/fHUOINdWuIy88ikjNIVqg-4_Gcw=/fit-in/246x300/filters:strip_icc()/pic3287905.png'
  },
  {
    name: 'War of the Ring',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.ExtraLong,
    gameStyles: [GameType.Wargame, GameType.PushYourLuck, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/115746/war-of-the-ring-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__itemrep/img/dagUJ0H2LGVIjYaeQ_XVweBZRfI=/fit-in/246x300/filters:strip_icc()/pic1215633.jpg'
  },
  {
    name: 'Cairn',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 2
    },
    length: GameLength.Short,
    gameStyles: [GameType.Strategy],
    bggLink: 'https://boardgamegeek.com/boardgame/275916/cairn',
    thumbnail: 'https://cf.geekdo-images.com/dT0ephy8PTzXyaM2XWa9KQ__itemrep/img/0xIglRfKbNWoeKUbAabO3zBoNrQ=/fit-in/246x300/filters:strip_icc()/pic7730638.jpg'
  },
  {
    name: 'Ankh: Gods of Egypt',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/285967/ankh-gods-of-egypt',
    thumbnail: 'https://cf.geekdo-images.com/_al0scMG_pQfGVM31Scf1Q__itemrep/img/E60DF99hzvTXPdT9hVuh9u6xXUI=/fit-in/246x300/filters:strip_icc()/pic6107853.jpg'
  },
  {
    name: 'Blood Rage',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/170216/blood-rage',
    thumbnail: 'https://cf.geekdo-images.com/HkZSJfQnZ3EpS214xtuplg__itemrep/img/ZSJhCapvtPoiIQZ1XdfO-qgUuFY=/fit-in/246x300/filters:strip_icc()/pic2439223.jpg'
  },
  {
    name: 'Inis',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting],
    bggLink: 'https://boardgamegeek.com/boardgame/155821/inis',
    thumbnail: 'https://cf.geekdo-images.com/6QE8mnPFmauoj2THsyUYPA__itemrep/img/Ni9BrlYQ43slFAi3I3QWUTsDZTM=/fit-in/246x300/filters:strip_icc()/pic4739757.jpg',
  },
  {
    name: 'Kemet: Blood and Sand',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/297562/kemet-blood-and-sand',
    thumbnail: 'https://cf.geekdo-images.com/IU-az-0jlIpoUxDHCCclNw__itemrep/img/hk01l3YMGIwS85fFnHjmaonYmnM=/fit-in/246x300/filters:strip_icc()/pic6230640.jpg',
  },
  {
    name: 'Catan',
    playerCount: {
      minimumNumberOfPlayers: 0,
      maximumNumberOfPlayers: 0
    },
    length: GameLength.Medium,
    gameStyles: [GameType.GarbageGame],
    bggLink: 'https://boardgamegeek.com/boardgame/13/catan',
    thumbnail: 'https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__itemrep/img/6Jf5G-bSvdOIMUSwxsJfZXl29B8=/fit-in/246x300/filters:strip_icc()/pic9156909.png',
  },
  {
    name: 'Tiny Epic Dungeons',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/331787/tiny-epic-dungeons',
    thumbnail: 'https://cf.geekdo-images.com/rDOnDFAwGXi_fVsfp-ZCqw__itemrep/img/oxzDfv6aanu2JhSofxwTIDrw1pk=/fit-in/246x300/filters:strip_icc()/pic6029065.jpg'
  },
  {
    name: 'Descent: Journeys in the Dark',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG, GameType.OneVersusMany],
    bggLink: 'https://boardgamegeek.com/boardgame/104162/descent-journeys-in-the-dark-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/ZN2rpiJ19lg5DZk_iYMMkQ__itemrep/img/41lkbqHPfzqXfXLBYyMZoEpJfBs=/fit-in/246x300/filters:strip_icc()/pic1180640.jpg'
  },
  {
    name: 'Sword and Sorcery: Immortal Souls',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/170771/sword-and-sorcery-immortal-souls',
    thumbnail: 'https://cf.geekdo-images.com/FNVnu-vB8WjyQTf63Ssvig__itemrep/img/wZRuBv2Rvg0ZTyEU_m-laCY9IOU=/fit-in/246x300/filters:strip_icc()/pic2673763.jpg'
  },
  {
    name: 'Sword and Sorcery: Ancient Chronicles',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/262201/sword-and-sorcery-ancient-chronicles',
    thumbnail: 'https://cf.geekdo-images.com/PXC0YrJWddsi7r0z_d3hIw__itemrep/img/1E1aegDOoZgZQc24mzFS0dGei2Y=/fit-in/246x300/filters:strip_icc()/pic4340969.jpg'
  },
  {
    name: 'Hero Realms',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Short,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/198994/hero-realms',
    thumbnail: 'https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__itemrep/img/RmwH7iCHWE9wFAVR6uH2FwQ_yGI=/fit-in/246x300/filters:strip_icc()/pic6162556.png',
  },
  {
    name: '7 Wonders',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.Drafting, GameType.EngineBuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/316377/7-wonders-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/Naw8y8J_s-8cvq1GoTON6w__itemrep/img/CYKZCsbpZRcpQNvYu4WLIuHC7tw=/fit-in/246x300/filters:strip_icc()/pic7416519.jpg',
  },
  {
    name: 'Legendary: A Marvel Deck Building Game',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/129437/legendary-a-marvel-deck-building-game',
    thumbnail: 'https://cf.geekdo-images.com/ZrRidumkzu62HuwKdgQpHA__itemrep/img/UnyZksyoMMyDktHj5nWWKh-N4Qc=/fit-in/246x300/filters:strip_icc()/pic1430769.jpg'
  },
  {
    name: 'Dice Wars: Heroes of Polyhedra',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.Skirmish, GameType.DiceCombat, GameType.Wargame],
    bggLink: 'https://boardgamegeek.com/boardgame/242818/dice-wars-heroes-of-polyhedra',
    thumbnail: 'https://cf.geekdo-images.com/KJbbNBK9rKicp46VirvUeQ__itemrep/img/5O7l1bVlYce0x9vpIYeBoVlg1yU=/fit-in/246x300/filters:strip_icc()/pic3924509.jpg'
    
  },
  {
    name: 'Legendary Encounters: An Alien Deck Building Game',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/146652/legendary-encounters-an-alien-deck-building-game',
    thumbnail: 'https://cf.geekdo-images.com/jSz_KRUxsjGYitoqx9YH1Q__itemrep/img/ZMljy9r4vIEOH4mt8KIvO6aZqYw=/fit-in/246x300/filters:strip_icc()/pic2225180.jpg'
  },
  {
    name: 'Camel Up',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 8
    },
    length: GameLength.Short,
    gameStyles: [GameType.Betting],
    bggLink: 'https://boardgamegeek.com/boardgame/153938/camel-up',
    thumbnail: 'https://cf.geekdo-images.com/jVr1bGBQpshqVPcwvZ7CPg__itemrep/img/x6MB3P8fBoInmry8wwcgk9RbtKk=/fit-in/246x300/filters:strip_icc()/pic1918028.jpg'
  },
  {
    name: 'Conquest of Nerath',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.Wargame, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/92044/dungeons-and-dragons-conquest-of-nerath-board-game',
    thumbnail: 'https://cf.geekdo-images.com/VZQV_rNlCd2EJiseYY8Ldg__itemrep/img/VbKPpc2lnFYH1mBq3eUzfEvvJ-Y=/fit-in/246x300/filters:strip_icc()/pic994288.jpg'
  },
  {
    name: 'King of Tokyo',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Short,
    gameStyles: [GameType.PushYourLuck],
    bggLink: 'https://boardgamegeek.com/boardgame/336755/king-of-tokyo-monster-box',
    thumbnail: 'https://cf.geekdo-images.com/wXdDbKqKdDpB4pBCWLToQw__itemrep/img/7iifVeuHMoLRdsXdbCCwVvyQf-Q=/fit-in/246x300/filters:strip_icc()/pic6125357.jpg',
  },
  {
    name: 'Battlelore',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 2
    },
    length: GameLength.Long,
    gameStyles: [GameType.Skirmish],
    bggLink: 'https://boardgamegeek.com/boardgame/146439/battlelore-second-edition',
    thumbnail: 'https://cf.geekdo-images.com/CWlHT1QMeB9hXaPcjE7cyw__itemrep/img/TBL1ygcfUS_SEEY6ohLhVKODZ0w=/fit-in/246x300/filters:strip_icc()/pic1854807.jpg'
  },
  {
    name: 'Gloomhaven: Jaws of the Lion',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Long,
    gameStyles: [GameType.RPG, GameType.DungeonCrawler],
    bggLink: 'https://boardgamegeek.com/boardgame/291457/gloomhaven-jaws-of-the-lion',
    thumbnail: 'https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__itemrep/img/a4ec0KY1ksmrKP_2lom7qzCQw_U=/fit-in/246x300/filters:strip_icc()/pic5055631.jpg'
  },
  {
    name: 'Evolution Climate',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Long,
    gameStyles: [GameType.EngineBuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/182134/evolution-climate',
    thumbnail: 'https://cf.geekdo-images.com/hs1P4qPgDKHXct3qs4JWGg__itemrep/img/lzH5SE_WuCSDlKDyVfdyi5pE8-I=/fit-in/246x300/filters:strip_icc()/pic2876816.jpg'
  },
  {
    name: 'Junk Art',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Short,
    gameStyles: [GameType.Dexterity],
    bggLink: 'https://boardgamegeek.com/boardgame/193042/junk-art',
    thumbnail: 'https://cf.geekdo-images.com/5VDnpX_3ykgCjTJSmHdfCA__itemrep/img/Y_D45KylJZR2ZJE2W_pTT2eGogY=/fit-in/246x300/filters:strip_icc()/pic2884509.jpg',
  },
  {
    name: 'Burning Banners: Rage of the Witch Queen',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 6
    },
    length: GameLength.Long,
    gameStyles: [GameType.Wargame, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/389820/burning-banners',
    thumbnail: 'https://cf.geekdo-images.com/XNbpOGwHR2PkoZ3TiIfxaw__itemrep/img/07N0xOAF1zoCpbPtUYlmzYrYe9I=/fit-in/246x300/filters:strip_icc()/pic7545827.png'
  },
  {
    name: 'Arackhan Wars',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/301387/arackhan-wars-rise-of-the-grey-order',
    thumbnail: 'https://cf.geekdo-images.com/7qc9uI131e4V1gDq5RMVYw__itemrep/img/fvg1oxEJnHf1LBK0HnAzcz_t294=/fit-in/246x300/filters:strip_icc()/pic7887827.jpg'
  },
  {
    name: 'Mage Wars Academy',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/172503/mage-wars-academy',
    thumbnail: 'https://cf.geekdo-images.com/BXqdHw39CPenDAKWDm_Vxw__itemrep/img/-saiFdH8PBkiOwiawxME4O9MtGk=/fit-in/246x300/filters:strip_icc()/pic2555236.png'
  },
  {
    name: 'Marvel United',
    playerCount: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Short,
    gameStyles: [GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/298047/marvel-united',
    thumbnail: 'https://cf.geekdo-images.com/-19XPXmTn9QyyvqwpcFkBw__itemrep/img/vhkLyamyEJr6XvNl2WTTCPItISE=/fit-in/246x300/filters:strip_icc()/pic5231006.jpg'
  },
  {
    name: 'Epic Card Game',
    playerCount: {
      minimumNumberOfPlayers: 2,
      maximumNumberOfPlayers: 4
    },
    length: GameLength.Short,
    gameStyles: [GameType.Deckbuilding, GameType.DeckBattler, GameType.Drafting],
    bggLink: 'https://boardgamegeek.com/boardgame/175621/epic-card-game',
    thumbnail: 'https://cf.geekdo-images.com/DfhQjeh-IzvUMFH__QUDXA__itemrep/img/V4v4f8cLLHMX9MUkim67ERCJLSM=/fit-in/246x300/filters:strip_icc()/pic2691347.jpg'
  },
]

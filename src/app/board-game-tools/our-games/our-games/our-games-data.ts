interface Game {
  name: string, 
  playerCount: string,
  length: GameLength
  gameStyles: Array<GameType>;
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
    bggLink: 'https://boardgamegeek.com/boardgame/198830/heroes-of-land-air-and-sea'
  },
  {
    name: 'Uprising',
    playerCount: '1-6',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Wargame],
    bggLink: 'https://deshiken.github.io/#/uprising'
  },
  {
    name: 'Primal: The Awakening',
    playerCount: '1-4',
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.BossBattler],
    bggLink: 'https://boardgamegeek.com/boardgame/303731/primal-the-awakening'
  },
  {
    name: 'Spirit Island',
    playerCount: '1-6',
    length: GameLength.Long,
    gameStyles: [GameType.Cooperative, GameType.Deckbuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/162886/spirit-island'
  },
  {
    name: 'Oak',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/162886/spirit-island'
  },
  {
    name: 'Everdell',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.WorkerPlacement, GameType.ResourceManagement],
    bggLink: 'https://boardgamegeek.com/boardgame/199792/everdell'
  },
  {
    name: 'Mystic Vale',
    playerCount: '1-6',
    length: GameLength.Medium,
    gameStyles: [GameType.Deckbuilding, GameType.PushYourLuck],
    bggLink: 'https://boardgamegeek.com/boardgame/194607/mystic-vale'
  },
  {
    name: 'War of the Ring',
    playerCount: '1-6',
    length: GameLength.ExtraLong,
    gameStyles: [GameType.Wargame, GameType.PushYourLuck, GameType.DiceCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/115746/war-of-the-ring-second-edition'
  },
  {
    name: 'Cairn',
    playerCount: '2',
    length: GameLength.Short,
    gameStyles: [GameType.Strategy],
    bggLink: 'https://boardgamegeek.com/boardgame/275916/cairn'
  },
  {
    name: 'Ankh: Gods of Egypt',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/285967/ankh-gods-of-egypt'
  },
  {
    name: 'Blood Rage',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/170216/blood-rage'
  },
  {
    name: 'Inis',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.Drafting],
    bggLink: 'https://boardgamegeek.com/boardgame/155821/inis'
  },
  {
    name: 'Kemet: Blood and Sand',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.AreaControl, GameType.CardCombat],
    bggLink: 'https://boardgamegeek.com/boardgame/297562/kemet-blood-and-sand'
  },
  {
    name: 'Catan',
    playerCount: '0 (Do not play it)',
    length: GameLength.Medium,
    gameStyles: [GameType.GarbageGame],
    bggLink: 'https://boardgamegeek.com/boardgame/13/catan'
  },
  {
    name: 'Tiny Epic Dungeons',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/boardgame/331787/tiny-epic-dungeons'
  },
  {
    name: 'Descent: Journeys in the Dark',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG, GameType.OneVersusMany],
    bggLink: 'https://boardgamegeek.com/boardgame/104162/descent-journeys-in-the-dark-second-edition'
  },
  {
    name: 'Sword and Sorcery',
    playerCount: '1-4',
    length: GameLength.Medium,
    gameStyles: [GameType.DungeonCrawler, GameType.Cooperative, GameType.RPG],
    bggLink: 'https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=Sword%20and%20sorcery'
  },
  {
    name: 'Hero Realms',
    playerCount: '1-4',
    length: GameLength.Short,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/198994/hero-realms'
  },
  {
    name: '7 Wonders',
    playerCount: '2-4',
    length: GameLength.Medium,
    gameStyles: [GameType.Drafting, GameType.EngineBuilding],
    bggLink: 'https://boardgamegeek.com/boardgame/316377/7-wonders-second-edition'
  },
  {
    name: 'Legendary: A Marvel Deck Building Game',
    playerCount: '2-4',
    length: GameLength.Long,
    gameStyles: [GameType.Deckbuilding, GameType.Cooperative],
    bggLink: 'https://boardgamegeek.com/boardgame/129437/legendary-a-marvel-deck-building-game'
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

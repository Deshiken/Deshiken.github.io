export interface TanaresHero {
  name: string;
  class: TanaresHeroClass;
}

export interface TanaresRelic {
  name: string;
  level: number;
}

export interface TanaresRelicArray {
  level1: Array<TanaresRelic>;
  level2: Array<TanaresRelic>;
  level3: Array<TanaresRelic>;
}

export enum TanaresHeroClass {
  Bruiser = "Bruiser",
  Shooter = "Shooter",
  Brute = "Brute",
  Tactician = "Tactician",
  Healer = "Healer",
  Controller = "Controller",
  Tank = "Tank",
  Commander ="Commander"
}

export const tanaresHeroes: Map<TanaresHeroClass, Array<TanaresHero>> = new Map ([
  [
    TanaresHeroClass.Brute, 
    [
      {name: 'Baolmu, Augur’s Madwalker', class: TanaresHeroClass.Brute},
      {name: 'Count Blake, the Vampire', class: TanaresHeroClass.Brute},
      {name: 'Gaknak, Red Dragonblade', class: TanaresHeroClass.Brute},
      {name: 'Herodotus, the Fallen Titan', class: TanaresHeroClass.Brute},
      {name: 'Katar, The Barbarian', class: TanaresHeroClass.Brute},
      {name: 'Morlogh, the Minotaur', class: TanaresHeroClass.Brute},
      {name: 'Sedrik, the Werewolf', class: TanaresHeroClass.Brute},
    ]
  ],
  [
    TanaresHeroClass.Bruiser, 
    [
      {name: 'Anariel, the Swordmage', class: TanaresHeroClass.Bruiser},
      {name: 'Ascaran, the Archangel', class: TanaresHeroClass.Bruiser},
      {name: "Kor’dal, the Juggernaut", class: TanaresHeroClass.Bruiser},
      {name: 'Lordwrath, the Shadowknight', class: TanaresHeroClass.Bruiser},
      {name: 'Ohris, the Monk', class: TanaresHeroClass.Bruiser},
      {name: 'Renkyr, the Dragon Avenger', class: TanaresHeroClass.Bruiser},
      {name: 'Vanarus, the Demon', class: TanaresHeroClass.Bruiser},
    ]
  ],
  [
    TanaresHeroClass.Shooter, 
    [
      {name: 'Avelum, the Wizard', class: TanaresHeroClass.Shooter},
      {name: 'Jessa, Shepherd Redeemer', class: TanaresHeroClass.Shooter},
      {name: 'Juliet, the Ice Sorcerer', class: TanaresHeroClass.Shooter},
      {name: 'Kelanyah, the Researcher', class: TanaresHeroClass.Shooter},
      {name: 'Niary, the Hunter', class: TanaresHeroClass.Shooter},
      {name: 'Vilani, Air Elementalist', class: TanaresHeroClass.Shooter},
      {name: 'Zanac, the Fire Sorcerer', class: TanaresHeroClass.Shooter},
    ]
  ],
  [
    TanaresHeroClass.Tactician, 
    [
      {name: 'Garion, the Rogue', class: TanaresHeroClass.Tactician},
      {name: 'Harun, the Doppelgänger', class: TanaresHeroClass.Tactician},
      {name: 'Liana, the Pirate', class: TanaresHeroClass.Tactician},
      {name: 'Magenta, the Witch Hunter', class: TanaresHeroClass.Tactician},
      {name: 'Myr, the Assassin', class: TanaresHeroClass.Tactician},
      {name: 'Ravel, Arachne’s Madwalker', class: TanaresHeroClass.Tactician},
      {name: 'Rokaru, the Samurai', class: TanaresHeroClass.Tactician},
    ]
  ],
  [
    TanaresHeroClass.Commander, 
    [
      {name: 'Emperor, the Supreme', class: TanaresHeroClass.Commander},
      {name: 'Khloet, the Summoner', class: TanaresHeroClass.Commander},
      {name: 'Lana, the Valkyrie', class: TanaresHeroClass.Commander},
      {name: 'Oguemir, the Beast Master', class: TanaresHeroClass.Commander},
      {name: 'Orthus, the Warlock', class: TanaresHeroClass.Commander},
      {name: 'Scara, the Weaver of Sorrow', class: TanaresHeroClass.Commander},
    ]
  ],
  [
    TanaresHeroClass.Healer, 
    [
      {name: 'Azriel, Water Elementalist', class: TanaresHeroClass.Healer},
      {name: 'Cheiron, Tycoon Redeemer', class: TanaresHeroClass.Healer},
      {name: 'Jade, the Bard', class: TanaresHeroClass.Healer},
      {name: 'Nyx, Succubus of Greed', class: TanaresHeroClass.Healer},
      {name: 'Taram, the Cleric', class: TanaresHeroClass.Healer},
      {name: 'Thalia, the Druid', class: TanaresHeroClass.Healer},
      {name: 'Uster, the Necromancer', class: TanaresHeroClass.Healer},
    ]
  ],
  [
    TanaresHeroClass.Controller, 
    [
      {name: 'Catharina, the Witch', class: TanaresHeroClass.Controller},
      {name: 'Elarine, the Telepath', class: TanaresHeroClass.Controller},
      {name: 'Gazini, the Ancient Vampire', class: TanaresHeroClass.Controller},
      {name: 'Lizz, the Medusa', class: TanaresHeroClass.Controller},
      {name: 'Nero, the Pyromancer', class: TanaresHeroClass.Controller},
      {name: 'Tsuyoko, the Ninja', class: TanaresHeroClass.Controller},
      {name: 'Vaeraunt, the Mastermind', class: TanaresHeroClass.Controller},
      {name: 'Yemi, the Succubus of Envy', class: TanaresHeroClass.Controller},
      {name: 'Zafara, the Fallen Angel', class: TanaresHeroClass.Controller},
      {name: 'Zund, the Illusionist', class: TanaresHeroClass.Controller},
    ]
  ],
  [
    TanaresHeroClass.Tank,
    [
      {name: 'Grigory, the Guardian', class: TanaresHeroClass.Tank},
      {name: 'Jorana, the Amazon', class: TanaresHeroClass.Tank},
      {name: "M’Bollo, the Warpriest", class: TanaresHeroClass.Tank},
      {name: 'Nakral, the Death Knight', class: TanaresHeroClass.Tank},
      {name: 'Rurik, the Warrior', class: TanaresHeroClass.Tank},
      {name: 'Sedura, Blue Dragonblade', class: TanaresHeroClass.Tank},
      {name: 'Sir Erick, the Paladin', class: TanaresHeroClass.Tank},
    ]
  ]
])

export const tanaresRelics: TanaresRelicArray = {
  level1: [
    {name: 'Ice Sword', level: 1},
    {name: 'Crown of Power', level: 1},
    {name: 'Amulet of Will', level: 1},
    {name: 'Gloves of Accuracy', level: 1},
    {name: 'Mask of the Chameleon', level: 1},
    {name: 'Dragon Talisman', level: 1},
  ],
  level2: [
    {name: 'Sun Orb', level: 2},
    {name: 'Belt of Shadows', level: 2},
    {name: 'Dragon Armor', level: 2},
    {name: 'Arcane Cloak', level: 2},
    {name: 'Lava Axe', level: 2},
  ],
  level3: [
    {name: 'Ring of Invulnerability', level: 3},
    {name: 'Dragon Shield', level: 3},
    {name: 'Boots of Slickness', level: 3},
    {name: 'Spectral Weapon', level: 3},
  ]
};

export const tanaresHeroicActions: Array<string> = [
  'Heroic Magic', 
  'Heroic Magic', 
  'Heroic Seism',
  'Heroic Seism',
  'Heroic Inspiration',
  'Heroic Inspiration',
  'Heroic Ambush',
  'Heroic Ambush',
  'Heroic Revival',
  'Heroic Revival',
  'Heroic Defense',
  'Heroic Defense',
  'Heroic Absorption',
  'Heroic Absorption'
]
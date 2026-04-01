import { IconHtml } from '../uprising/spell-cards/spell-card-data';

export interface uprisingTacticsAction {
    name: string;
    description: string;
}

export const uprisingTacticsActions: Array<uprisingTacticsAction> = [
    {
        name: 'Cast',
        description: `Cast a spell from your hand after paying the mana cost.`,
    },
    {
        name: 'Martial',
        description: `You may move all units you control. After moving you may attack with all units/buildings you control.`,
    },
    {
        name: 'Research',
        description: `You may purchace any number of technology cards and card upgrades.`,
    },
    {
        name: 'Recruit',
        description: `Add a unit adjacent to a capitol or city you control in an unoccupied region after paying its cost.`,
    },
    {
        name: 'Tax',
        description: `Gain 3 ${IconHtml.Gold}, 1 ${IconHtml.Mana}, or 1 ${IconHtml.Research}.` 
    },
    {
        name: 'Build',
        description: `Create a building adjacent to a unit you control in an unoccupied region after paying its cost.` 
    },
    {
        name: 'Harvest',
        description: `Gain the resources shown on from one resource token on a farm you control. Then, flip that token to it's depleted side.` 
    },
    {
        name: 'Study',
        description: `Draw three cards from the spell deck. Then, discard down to your max hand size.`
    },
]
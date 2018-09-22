import { Story } from '../models/story';

export const STORIES: Story[] = [
  {
    title: 'A Dragon\'s Revolt',
    routeUrl: 'a_dragons_revolt',
    cover: './assets/imgs/Covers/DragonRevoltCover.jpg',
    parts: {
      'One': '548',
      'Two': '554',
      'Three': '556',
      'Four': '558',
      'Five': '562',
      'Six': '564',
      'Seven': '566'
    }
  },
  {
    title: 'Heroes of the Past',
    routeUrl: 'heroes_of_the_past',
    cover: './assets/imgs/Covers/Heroes%20of%20the%20Past%20Cover%20My%20Version.jpg',
    parts: null
  },
  {
    title: 'Masks',
    routeUrl: 'masks',
    cover: './assets/imgs/Covers/MaskCover2.jpg',
    parts: {
      'Sparring Practice': '230'
    }
  }
];

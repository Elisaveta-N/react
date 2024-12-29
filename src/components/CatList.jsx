
const cats=[
    {
        id:1,
        name: 'Thai cat',
        imagePath: '/images/thaiCat.png',
        character: 'playful, social'
    },
    {
        id:2,
        name: 'British cat',
        imagePath: '/images/britishCat.jpg',
        character: 'calm, independant'
    },
    {
        id:3,
        name: 'Bengal cat',
        imagePath: '/images/bengalCat.jpg',
        character: 'curious, active'
    },
];

export function getCats() {
    return cats;
}

export function getCat(number) {
    return cats.find(
      (cat) => cat.id === number
    );
  }
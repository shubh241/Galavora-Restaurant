import images from './images';

const wines = [
  {
    title: 'Sauvignon',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Cabernet Franc',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Chernin blanc',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Chinati DOCG',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Culinary Excellence',
    subtitle: 'Masterpieces of flavor, prepared with passion and precision.',
  },
  {
    imgUrl: images.award01,
    title: 'Innovative Fusion',
    subtitle: 'Tradition and innovation to create exceptional, unique dining experiences.',
  },
  {
    imgUrl: images.award05,
    title: 'Local Sourcing:',
    subtitle: 'celebrate community by using locally sourced, seasonal ingredients.',
  },
  {
    imgUrl: images.award03,
    title: 'Memorable Ambiance',
    subtitle: 'offers an inviting atmosphere, where every visit becomes a cherished memory.',
  },
];

export default { wines, cocktails, awards };

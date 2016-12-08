import {stories, bool, string, number, json} from '../duckyStories';
import CalculatorSectionConsumption from './index';

stories(module, CalculatorSectionConsumption, [
  'https://github.com/DuckyTeam/ducky-web/issues/2019'
], {
  caption: string("Klikk på de forskjellige forbruksvanene for å lære mer og velg alternativer som stemmer med ditt personlige forbruk."),
  iconAverageFootprint: string("icon-sentiment_very_satisfied"),
  icon: string("icon-shopping_cart"),
  show: bool(true),
  title: string("Dine forbruksvaner"),
  calcEtics: string(),
  calcProducts: string(),
  calcRecycle: string(),
  calcRepaired: string(),
  calcServicevsprod: string(),
  expandedEtics: bool(false),
  expandedProducts: bool(false),
  expandedRecycle: bool(false),
  expandedRepaired: bool(false),
  expandedServicevsprod: bool(false),
  imageConsumptionMain: string("https://c1.staticflickr.com/7/6042/6355400713_f85dedabe5_b.jpg"),
  inactiveEtics: bool(true),
  inactiveProducts: bool(true),
  inactiveRecycle: bool(true),
  inactiveRepaired: bool(false),
  inactiveServicevsprod: bool(false),
  labelEtics: string("Hvor ofte velger du etisk og miljøvennlig"),
  labelProducts: string("Hvor ofte velger du kvalitetsprodukter?"),
  labelRecycle: string("Resirkulerer du mye av avfallet ditt?"),
  labelRepaired: string("Hvor ofte reparerer du slitte/ødelagte ting?"),
  labelServicevsprod: string("Velger du tjenester fremfor produkter?"),
  captionCo2: string("kg CO2e"),
  captionNumber: string("3,980"),
  carCurrentSlide: string(),
  categorylistHeading: string("Fotavtrykk fordelt på underkategorier:"),
  colorAverageFoorprint: string(),
  currentSlide: number(),
  footprintCaption: string(),
  footprintIcon: string(),
  footprintTitle: string(),
  iconSectionFooter: string("icon-keyboard_arrow_left"),
  sectionFooterButtontext: string("NESTE"),
  sectionFooterText: string("TILBAKE"),
  slideCount: number(),
  sortedCategories: json([
    {
      percent: 77,
      color: 'red',
      label: 'Meiereiprodukter',
      scaledPercent: 100
    },
    {
      percent: 45,
      color: 'blue',
      label: 'Grønnsaker',
      scaledPercent: 59
    },
    {
      percent: 17,
      color: 'green',
      label: 'Kjøtt',
      scaledPercent: 23
    }
  ]),
  theme: string(),
  valueEtics: string("Av og til"),
  valueProducts: string("Av og til"),
  valueRecycle: string("Det meste..."),
  valueRepaired: string("Veldig sjeldent"),
  valueService: string("Vet ikke")
});

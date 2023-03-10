import { AiOutlineDashboard, AiOutlineStar } from 'react-icons/ai';
import { BiBuildingHouse, BiMessageRounded } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import {
  agent1,
  agent2,
  agent3,
  agent4,
  agent5,
  villa1,
  villa2,
  villa3,
  villa4,
  villa5,
  apartment1,
  apartment2,
  apartment3,
  apartment4,
  apartment5,
  sale1,
  sale2,
  sale10,
  sale3,
  sale4,
  sale5,
  sale6,
  sale7,
  sale8,
  sale9,
} from '../assets';

export const navigation = [
  { name: 'Dashboard', path: '/', icon: <AiOutlineDashboard size={24} /> },
  {
    name: 'Property',
    path: '/properties',
    icon: <BiBuildingHouse size={24} />,
  },
  { name: 'Agent', path: '/agents', icon: <BsPeople size={24} /> },
  { name: 'Review', path: '/reviews', icon: <AiOutlineStar size={24} /> },
  { name: 'Message', path: '/messages', icon: <BiMessageRounded size={24} /> },
  {
    name: 'My Profile',
    path: '/profile',
    icon: <MdOutlineAccountCircle size={24} />,
  },
];

export const dashboardStats = [
  {
    title: 'Properties for Sale',
    value: 684,
    series: [75, 25],
    colors: ['#475be8', '#e4e8ef'],
  },
  {
    title: 'Properties for Rent',
    value: 546,
    series: [60, 40],
    colors: ['#FD8539', '#F2F6FC'],
  },
  {
    title: 'Total Customers',
    value: 5732,
    series: [70, 30],
    colors: ['#2ED480', '#F2F6FC'],
  },
  {
    title: 'Total Cities',
    value: 90,
    series: [90, 10],
    colors: ['#FE6D8E', '#F2F6FC'],
  },
];

export const TotalRevenueSeries = [
  {
    name: 'Last Month',
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: 'Running Month',
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

export const TotalRevenueOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: 'KES (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val) {
        return `KES ${val} thousands`;
      },
    },
  },
};

export const propertyReferralsInfo = [
  {
    title: 'Social Media',
    percentage: 64,
    color: '#6C5DD3',
  },
  {
    title: 'Marketplace',
    percentage: 40,
    color: '#7FBA7A',
  },
  {
    title: 'Websites',
    percentage: 50,
    color: '#FFCE73',
  },
  {
    title: 'Digital Ads',
    percentage: 80,
    color: '#FFA2C0',
  },
  {
    title: 'Others',
    percentage: 15,
    color: '#F45252',
  },
];

export const agents = [
  { id: 1, name: 'Jayden Doe', avatar: agent1 },
  { id: 2, name: 'Jillian Doe', avatar: agent2 },
  { id: 3, name: 'Teknomiles Doe', avatar: agent3 },
  { id: 4, name: 'Ayra Doe', avatar: agent4 },
  { id: 5, name: 'Bien Doe', avatar: agent5 },
];

export const latestSales = [
  {
    id: 1,
    name: 'One Bedroom Villa',
    location: 'Karen,Nairobi',
    image: villa1,
    value: 'Ksh. 4.6M',
  },
  {
    id: 2,
    name: 'Three Bedroom Bungalow',
    location: 'Runda,Nairobi',
    image: villa2,
    value: 'Ksh. 13M',
  },
  {
    id: 3,
    name: 'Two Bedroom Villa',
    location: 'Runda,Nairobi',
    image: villa3,
    value: 'Ksh. 9M',
  },
  {
    id: 4,
    name: 'Three Bedroom Villa',
    location: 'Nanyuki,Nanyuki',
    image: villa4,
    value: 'Ksh. 6.7M',
  },
  {
    id: 5,
    name: 'Three Bedroom Villa',
    location: 'Nyali,Mombasa',
    image: villa5,
    value: 'Ksh. 7M',
  },
];

export const lastestRentals = [
  {
    id: 1,
    name: 'One Bedroom,Hope Apartments',
    location: 'Juja,Thika',
    image: apartment1,
    value: 'Ksh. 24k/mon',
  },
  {
    id: 2,
    name: 'Two Bedroom,Miles Apartment',
    location: 'Kilimani,Nairobi',
    image: apartment2,
    value: 'Ksh. 45k/mon',
  },
  {
    id: 3,
    name: 'Two Bedroom, Cloise Apartments',
    location: 'South C,Nairobi',
    image: apartment3,
    value: 'Ksh. 33k/mon',
  },
  {
    id: 4,
    name: 'One Bedroom,Jude Apartments',
    location: 'Kitengela,Kajiado',
    image: apartment4,
    value: 'Ksh. 25k/mon',
  },
  {
    id: 5,
    name: 'Two Bedroom,Limanel Apartments',
    location: 'Kitengela,Kajiado',
    image: apartment5,
    value: 'Ksh. 35k/mon',
  },
];

export const properties = [
  {
    id: 1,
    image: sale1,
    name: 'Star Sun Villa',
    type: 'house',
    price: 14000000,
    location: 'Kilimani',
    county: 'Nairobi',
    beds: 4,
    baths: 2,
    kitchen: 2,
    views: 28129,
    wifi: true,
    smokingArea: true,
    balcony: true,
    parking: true,
    recommended: true,
    popular: false,
    addedOn: '2023-02-12',
    rating: 5,
    agentId: 2,
    forSale: true,
  },
  {
    id: 2,
    image: sale2,
    name: 'Metro Jayakarta Villa',
    type: 'house',
    price: 12600000,
    location: 'Runda',
    county: 'Nairobi',
    beds: 3,
    baths: 2,
    kitchen: 1,
    views: 15456,
    wifi: true,
    smokingArea: true,
    balcony: true,
    parking: true,
    recommended: true,
    popular: false,
    addedOn: '2023-02-01',
    rating: 4,
    agentId: 1,
    forSale: true,
  },
  {
    id: 3,
    image: sale3,
    name: 'Alhemiria Villa',
    type: 'house',
    price: 16000000,
    location: 'Kitengela',
    county: 'Kajiado',
    beds: 4,
    baths: 2,
    kitchen: 2,
    views: 18989,
    wifi: true,
    smokingArea: true,
    balcony: true,
    parking: true,
    recommended: true,
    popular: false,
    addedOn: '2023-01-28',
    rating: 5,
    agentId: 4,
    forSale: true,
  },
  {
    id: 4,
    image: sale4,
    name: 'Malkia Apartments',
    type: 'apartment',
    price: 60000,
    location: 'Nyali',
    county: 'Mombasa',
    beds: 2,
    baths: 1,
    kitchen: 1,
    views: 156767,
    wifi: true,
    smokingArea: false,
    balcony: true,
    parking: true,
    recommended: false,
    popular: true,
    addedOn: '2023-02-14',
    rating: 4,
    agentId: 5,
    forSale: false,
  },
  {
    id: 5,
    image: sale5,
    name: 'Tiffany Villa',
    type: 'house',
    price: 15600000,
    location: 'Nanyuki',
    county: 'Laikipia',
    beds: 3,
    baths: 1,
    kitchen: 1,
    views: 54332,
    wifi: true,
    smokingArea: false,
    balcony: true,
    parking: true,
    recommended: false,
    popular: false,
    addedOn: '2022-12-20',
    rating: 4,
    agentId: 2,
    forSale: true,
  },
  {
    id: 6,
    image: sale6,
    name: 'Almander Apartments',
    type: 'apartment',
    price: 55000,
    location: 'Lavington',
    county: 'Nairobi',
    beds: 2,
    baths: 1,
    kitchen: 1,
    views: 98789,
    wifi: true,
    smokingArea: false,
    balcony: true,
    parking: true,
    recommended: false,
    popular: true,
    addedOn: '2022-12-12',
    rating: 4,
    agentId: 5,
    forSale: false,
  },
  {
    id: 7,
    image: sale7,
    name: 'Myron Villa',
    type: 'house',
    price: 12400000,
    location: 'Naivasha',
    county: 'Nakuru',
    beds: 4,
    baths: 2,
    kitchen: 2,
    views: 167577,
    wifi: true,
    smokingArea: true,
    balcony: true,
    parking: true,
    recommended: false,
    popular: true,
    addedOn: '2022-11-09',
    rating: 5,
    agentId: 1,
    forSale: true,
  },
  {
    id: 8,
    image: sale8,
    name: 'Brizzy & Sevyn Apartments',
    type: 'apartment',
    price: 75000,
    location: 'Tatu City',
    county: 'Kiambu',
    beds: 4,
    baths: 2,
    kitchen: 2,
    views: 65777,
    wifi: true,
    smokingArea: true,
    balcony: true,
    parking: true,
    recommended: false,
    popular: false,
    addedOn: '2022-09-11',
    rating: 5,
    agentId: 2,
    forSale: false,
  },
  {
    id: 9,
    image: sale9,
    name: 'Mabel Villa',
    type: 'house',
    price: 11500000,
    location: 'Nyali',
    county: 'Mombasa',
    beds: 3,
    baths: 1,
    kitchen: 1,
    views: 17677,
    wifi: true,
    smokingArea: false,
    balcony: true,
    parking: true,
    recommended: false,
    popular: false,
    addedOn: '2022-12-11',
    rating: 4,
    agentId: 4,
    forSale: true,
  },
  {
    id: 10,
    image: sale10,
    name: 'Rowland Apartments',
    type: 'apartment',
    price: 50000,
    location: 'Kitusuru',
    county: 'Nairobi',
    beds: 2,
    baths: 1,
    kitchen: 1,
    views: 65778,
    wifi: true,
    smokingArea: false,
    balcony: true,
    parking: true,
    recommended: false,
    popular: false,
    addedOn: '2022-07-21',
    rating: 4,
    agentId: 3,
    forSale: false,
  },
];

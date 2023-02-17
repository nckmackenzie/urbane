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
  { name: 'Jayden Doe', avatar: agent1 },
  { name: 'Jillian Doe', avatar: agent2 },
  { name: 'Teknomiles Doe', avatar: agent3 },
  { name: 'Ayra Doe', avatar: agent4 },
  { name: 'Bien Doe', avatar: agent5 },
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

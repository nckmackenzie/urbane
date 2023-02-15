import { AiOutlineDashboard, AiOutlineStar } from 'react-icons/ai';
import { BiBuildingHouse, BiMessageRounded } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';

export const navigation = [
  { name: 'Dashboard', path: '/', icon: <AiOutlineDashboard /> },
  { name: 'Property', path: '/properties', icon: <BiBuildingHouse /> },
  { name: 'Agent', path: '/agents', icon: <BsPeople /> },
  { name: 'Review', path: '/reviews', icon: <AiOutlineStar /> },
  { name: 'Message', path: '/messages', icon: <BiMessageRounded /> },
  { name: 'My Profile', path: '/profile', icon: <MdOutlineAccountCircle /> },
];

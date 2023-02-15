import { AiOutlineDashboard, AiOutlineStar } from 'react-icons/ai';
import { BiBuildingHouse, BiMessageRounded } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';

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

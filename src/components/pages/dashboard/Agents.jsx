import { BsArrowRight } from 'react-icons/bs';
import { agents } from '../../../data/data';
import { Card } from '../../ui';
import Agent from './Agent';

function Agents() {
  return (
    <Card rounded title="Top Agents" headerAction={<Button />}>
      <div className="flex flex-col gap-2">
        {agents?.map(agent => (
          <Agent key={agent.name} {...agent} />
        ))}
      </div>
    </Card>
  );
}

function Button() {
  return (
    <button className="px-2 py-1 transition-all hover:text-primary hover:scale-110">
      <BsArrowRight size={24} />
    </button>
  );
}

export default Agents;

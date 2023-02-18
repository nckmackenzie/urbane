import { useState } from 'react';
import { useTheme } from '../../../context/ThemeProvider';
import { Card } from '../../ui';
import Listing from './Listing';
import PropertyListFilters from './PropertyListFilters';

const categories = ['popular', 'recommended', 'newest'];
function PropertyList() {
  const { textColor } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('popular');

  return (
    <div className="mt-4">
      <Card rounded>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between mb-6">
          <div className={`${textColor} text-lg font-semibold`}>
            Property List
          </div>
          <PropertyListFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <Listing />
      </Card>
    </div>
  );
}

export default PropertyList;

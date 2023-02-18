import { capitalizeFirstWord } from '../../../utils/utils';
function PropertyListFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const onClickHandler = e => {
    setSelectedCategory(String(e.target.textContent).trim().toLowerCase());
  };
  return (
    <div className="flex gap-2">
      {categories.map(category => (
        <button
          onClick={onClickHandler}
          className={`text-xs py-2 px-4 rounded-md ${
            selectedCategory === category
              ? 'bg-primary text-app-light-bg'
              : 'bg-hover-color text-light-text-secondary'
          }`}
          key={category}
        >
          {capitalizeFirstWord(category)}
        </button>
      ))}
    </div>
  );
}

export default PropertyListFilters;

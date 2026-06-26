type FilterBarProps = {
  cuisines: string[];
  selectedCuisine: string;
  onChange: (value: string) => void;
};

export function FilterBar({ cuisines, selectedCuisine, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {cuisines.map((cuisine) => {
        const isActive = cuisine === selectedCuisine;

        return (
          <button
            key={cuisine}
            type="button"
            onClick={() => onChange(cuisine)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              isActive
                ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-rose-500 hover:ring-rose-200'
            }`}
          >
            {cuisine}
          </button>
        );
      })}
    </div>
  );
}

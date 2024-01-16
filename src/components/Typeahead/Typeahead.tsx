import { useCallback, useRef, useState } from "react";

type Option = {
  title: string;
  id: number;
};

type TypeaheadProps = {
  options: Option[];
};

function useDebounce<T extends unknown[]>(
  func: (...args: T) => void,
  ms = 450
): (...args: T) => void {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: T) => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => func(...args), ms);
    },
    [func, ms]
  );
}

const Typeahead = ({ options }: TypeaheadProps) => {
  const [filterResults, setFilterResults] = useState<Option[]>([]);

  const handleChange = useDebounce((e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;

    setFilterResults(() =>
      options.filter((option) => option.title.indexOf(value) > -1)
    );
  }, 1500);

  return (
    <div>
      <input onChange={handleChange} />
      <ul>
        {filterResults.map((option) => (
          <li key={option.id}>{option.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Typeahead;

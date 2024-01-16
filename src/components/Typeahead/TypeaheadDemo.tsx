import Typeahead from "./Typeahead";

const options = [
  { title: "111", id: 1 },
  { title: "123", id: 2 },
  { title: "333", id: 3 },
];

const TypeaheadDemo = () => {
  return <Typeahead options={options} />;
};

export default TypeaheadDemo;

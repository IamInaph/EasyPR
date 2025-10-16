import React from 'react';
import CreatableReactSelect from 'react-select/creatable';

const MultiSelectTextInput = ({ defaultValue, onChange }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [value, setTextValue] = React.useState(defaultValue);

  const createOption = (label) => ({
    label,
    value: new Date().getTime().toString(),
  });

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setTextValue((prev) => {
          const updatedValue = [...prev, createOption(inputValue)];

          onChange(updatedValue);

          return updatedValue;
        });
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <CreatableReactSelect
      components={{
        DropdownIndicator: null,
      }}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newValue) => {
        setTextValue(newValue);
        onChange(newValue);
      }}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      value={value}
    />
  );
};

export default MultiSelectTextInput;

import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

const TextInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 1rem;
`;

const NumberInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 1rem;
`;

type SearchInputProps = {
  wordLength?: number;
  setWordLength: (length: number) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetContains: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  wordLength,
  setWordLength,
  handleInputChange,
  handleSetContains,
  contains,
  handleFilterToggle,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    handleFilterToggle();
    setIsToggled(!isToggled);
  };
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '0 2rem' }}
    >
      {isToggled ? (
        <div>
          <NumberInput
            type="number"
            min="2"
            max="15"
            value={wordLength}
            onChange={setWordLength}
            placeholder="2"
          />
          <TextInput
            type="text"
            onChange={handleSetContains}
            placeholder="nieks"
          />
        </div>
      ) : (
        <TextInput
          style={{ width: 58 + 16 + 194 }}
          type="text"
          onChange={handleInputChange}
          placeholder="jekclius"
        />
      )}
      <FilterButton isToggled={isToggled} handleClick={handleClick} />
    </div>
  );
};

export default SearchInput;

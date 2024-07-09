import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

interface ContainerProps {
  $isToggled: boolean;
}

const Container = styled.div<ContainerProps>`
  margin: 0 2rem;
  display: flex;
  gap: 10px;
`;

const TextInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 1rem;
  width: 100%;
`;

const NumberInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  /* margin-right: 1rem; */
`;

type SearchInputProps = {
  wordLength?: string;
  setWordLength: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetContains: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterToggle: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  wordLength,
  setWordLength,
  handleInputChange,
  handleSetContains,
  handleFilterToggle,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    handleFilterToggle();
    setIsToggled(!isToggled);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container $isToggled={isToggled}>
        {isToggled ? (
          <>
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
          </>
        ) : (
          <TextInput
            // style={{ maxWidth: 43 + 10 + 194 }}
            type="text"
            onChange={handleInputChange}
            placeholder="jekclius"
          />
        )}
        <FilterButton isToggled={isToggled} handleClick={handleClick} />
      </Container>
    </div>
  );
};

export default SearchInput;

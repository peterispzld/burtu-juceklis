import styled from 'styled-components';
import defaultFilter from './assets/defaultFilter.svg';
import toggledFilter from './assets/toggledFilter.svg';

const StyledButton = styled.button`
  background-color: inherit;
  border: none;
  border-radius: 5px;
`;

interface FilterButtonProps {
  isToggled: boolean;
  handleClick: () => void;
}

const FilterButton = ({ isToggled, handleClick }: FilterButtonProps) => {
  return (
    <StyledButton onClick={handleClick}>
      {!isToggled ? (
        <img src={defaultFilter} alt="Toggled State" width={32} />
      ) : (
        <img src={toggledFilter} alt="Default State" width={32} />
      )}
    </StyledButton>
  );
};

export default FilterButton;

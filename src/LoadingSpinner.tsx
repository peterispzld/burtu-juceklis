import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #a4343a;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

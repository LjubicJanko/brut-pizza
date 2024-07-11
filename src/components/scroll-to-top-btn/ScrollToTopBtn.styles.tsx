import styled from 'styled-components';

export const ScrollToTopBtnContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: var(--color-white);
  color: var(--color-green);
  border-radius: 50%;
  padding: 8px;
  z-index: 1000;
  right: 30px;
  bottom: 50px;

  animation: up 1.5s infinite;
  -webkit-animation: up 1.5s infinite;

  @keyframes up {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(-15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes up {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(-15px);
    }
    40% {
      transform: translate(0);
    }
  }
`;

import styled from 'styled-components';
import Colors from '../../theme/Colors';
import background from '../../assets/img/background.jpeg';

export const LoginContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  /* background: red; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPanel = styled.main`
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background: ${Colors.light};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: fade 3s;

  @media screen and (min-width: 400px) {
    width: 400px;
    height: 500px;
  }
`;

export const LoginForm = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

import styled from 'styled-components';
import Colors from '../../theme/Colors';

export const LoginContainer = styled.div`
  height: 100vh;
  /* background: red; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginPanel = styled.main`
  background: ${Colors.light};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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

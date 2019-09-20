import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import logo from '../../assets/img/logo.svg';
import Button from '../../theme/components/Button';
import InputText from '../../theme/components/InputText';
import { LoginContainer, LoginForm, LoginPanel } from './styles';

const fieldWidth = '300px';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSubmit = useCallback((evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('LOGIN', evt.target);
    history.push('/');
  }, []);

  return (
    <LoginContainer>
      <LoginPanel>
        <img src={logo} alt="Bíblia Vest" />
        <LoginForm onSubmit={handleSubmit} method="post">
          <InputText
            placeholder="Email"
            required
            style={{ width: fieldWidth }}
            type="email"
            name="email"
          />
          <InputText placeholder="Senha" required style={{ width: fieldWidth }} type="password" />
          <Button type="submit" status="warning" style={{ width: fieldWidth }}>
            {`ENTRAR   `}
            <Icon size={20} icon={ic_send} />
          </Button>
        </LoginForm>
      </LoginPanel>
    </LoginContainer>
  );
};

export default Login;

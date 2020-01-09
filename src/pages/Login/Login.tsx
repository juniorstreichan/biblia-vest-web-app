import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import logo from '../../assets/img/logo.svg';
import Button from '../../theme/components/Button';
import InputText from '../../theme/components/InputText';
import { LoginContainer, LoginForm, LoginPanel } from './styles';
import AuthService from '../../services/http/AuthService';

const fieldWidth = '300px';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      console.log(evt);
      console.log(evt.target.value);

      try {
        const user = { email: 'teste@teste.com', password: '12345678' };
        const response = AuthService.doLogin(user);
      } catch (ex) {
        setError(ex);
      } finally {
        setIsLoading(false);
      }
      // console.log('LOGIN', evt.target);
      // history.push('/');
    },
    [history, setError, setIsLoading],
  );

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
          <InputText
            placeholder="Senha"
            required
            style={{ width: fieldWidth }}
            type="password"
            name="password"
          />
          <Button type="submit" status="warning" style={{ width: fieldWidth }}>
            ENTRAR
            <Icon size={20} icon={ic_send} />
          </Button>
        </LoginForm>
      </LoginPanel>
    </LoginContainer>
  );
};

export default Login;

import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import { AxiosError } from 'axios';
import logo from '../../assets/img/logo.svg';
import Button from '../../theme/components/Button';
import InputText from '../../theme/components/InputText';
import { LoginContainer, LoginForm, LoginPanel } from './styles';
import AuthService from '../../services/http/AuthService';
import UserLogin from '../../models/UserLogin';
import Colors from '../../theme/Colors';
import AuthStorage from '../../services/storage/AuthStorage';

const fieldWidth = '300px';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [error, setError] = useState<null | Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserLogin>({ email: '', password: '' });

  const handleSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await AuthService.doLogin(user);
        AuthStorage.setToken(data.token);
        AuthStorage.setUser(data.user);
      } catch (ex) {
        console.log('DEU ERRO', JSON.stringify(ex.response));
        setError(ex.response.data);
      } finally {
        setIsLoading(false);
      }
      // console.log('LOGIN', evt.target);
      // history.push('/');
    },
    [history, setError, setIsLoading, user],
  );

  const handleChangeField = useCallback(
    (evt: React.ChangeEvent<any>) => {
      setUser({ ...user, [evt.target.name]: evt.target.value });
      setError(null);
    },
    [user, setUser],
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
            value={user.email}
            onChange={handleChangeField}
            disabled={isLoading}
          />
          <InputText
            placeholder="Senha"
            required
            style={{ width: fieldWidth }}
            type="password"
            name="password"
            value={user.password}
            onChange={handleChangeField}
            disabled={isLoading}
          />
          {error && <span style={{ color: Colors.status.danger }}>{error.message}</span>}
          <Button type="submit" disabled={isLoading} status="warning" style={{ width: fieldWidth }}>
            ENTRAR
            <Icon size={20} icon={ic_send} />
          </Button>
        </LoginForm>
      </LoginPanel>
    </LoginContainer>
  );
};

export default Login;

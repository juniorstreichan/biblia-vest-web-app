import React, { useCallback, useContext, useEffect, useState } from 'react';
import Icon from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import { RouteComponentProps } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { AuthContext } from '../../context/AuthProvider';
import UserLogin from '../../models/UserLogin';
import Colors from '../../theme/Colors';
import Button from '../../theme/components/Button';
import InputText from '../../theme/components/InputText';
import { LoginContainer, LoginForm, LoginPanel } from './styles';

const fieldWidth = '300px';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [error, setError] = useState<null | Error>();
  const [user, setUser] = useState<UserLogin>({ email: '', password: '' });

  const { authenticated, loading, handleLogin } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      setError(null);
      try {
        await handleLogin(user);
      } catch (ex) {
        console.log('DEU ERRO', ex);

        setError(ex.response.data);
      }
    },
    [setError, user],
  );

  const handleChangeField = useCallback(
    (evt: React.ChangeEvent<any>) => {
      setUser({ ...user, [evt.target.name]: evt.target.value });
      setError(null);
    },
    [user, setUser],
  );

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, [authenticated]);

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
            disabled={loading}
          />
          <InputText
            placeholder="Senha"
            required
            style={{ width: fieldWidth }}
            type="password"
            name="password"
            value={user.password}
            onChange={handleChangeField}
            disabled={loading}
          />
          {error && <span style={{ color: Colors.status.danger }}>{error.message}</span>}
          <Button type="submit" disabled={loading} status="warning" style={{ width: fieldWidth }}>
            ENTRAR
            <Icon size={20} icon={ic_send} />
          </Button>
        </LoginForm>
      </LoginPanel>
    </LoginContainer>
  );
};

export default Login;

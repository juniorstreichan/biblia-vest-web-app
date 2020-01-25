import User from '../../models/User';

const tokenKey = '@biblia-vest:token';
const userKey = '@biblia-vest:user';

class AuthStorage {
  public getUser(): User | null {
    try {
      const userStorage = localStorage.getItem(userKey);
      if (userStorage) {
        const user = JSON.parse(atob(userStorage));
        return user;
      }

      return null;
    } catch (err) {
      this.clear();
      // window.location.reload();
      return null;
    }
  }

  public setUser(user: User): void {
    if (user) {
      localStorage.setItem(userKey, btoa(JSON.stringify(user)));
    } else {
      throw Error('Usuário inválido');
    }
  }

  public getToken(): string {
    try {
      const bToken = localStorage.getItem(tokenKey) || '';

      if (bToken === '') {
        this.clear();
        return '';
      }

      return atob(bToken);
    } catch (error) {
      this.clear();
      // window.location.reload();
      return '';
    }
  }

  public setToken(token = ''): void {
    try {
      localStorage.setItem(tokenKey, btoa(token));
    } catch (error) {
      console.error('setToken', error);
    }
  }

  public isAuth(): boolean {
    return this.getToken() !== '' && this.getUser() !== null;
  }

  public clear() {
    try {
      console.log('clear()');

      localStorage.removeItem(tokenKey);
      localStorage.removeItem(userKey);
    } catch (error) {
      console.log('clear:error', error);
    }
  }
}

export default new AuthStorage();

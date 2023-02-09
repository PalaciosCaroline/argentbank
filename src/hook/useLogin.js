
  import { setToken, setIsAuthentificated, setErrorLogin } from './../store/user.slice';
  

  export async function login(setIsLoading, email, password, dispatch) {
      setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      const res = await data.body;
      dispatch(setToken(res.token));
      dispatch(setIsAuthentificated(true));
    } catch (error) {
      dispatch(setErrorLogin(error));
    } finally {
      setIsLoading(false);
  }
}
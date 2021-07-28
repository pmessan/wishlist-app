import { useState } from 'react';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import Form from '../components/Form';
import Input from '../components/Input';
import Background from '../components/Background';
import Container from '../components/Container';
import Header from '../components/Header';

const Login = () => {
  useUser({ redirectTo: '/add-item', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/add-item');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Background>
      <Header title="Login" />
      <Container>
        <Form title="Login" buttonText="Login" onSubmit={handleSubmit}>
          <Input name="username" title="Email Address" placeholder="JohnDoe@example.com" type="email" />
          <Input name="password" title="Password" placeholder="Password" type="password" />
        </Form>
      </Container>
    </Background>
  );
};

export default Login;

import { useState } from 'react';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import Input from '../components/Input';
import Form from '../components/Form';
import Background from '../components/Background';
import Container from '../components/Container';
import Header from '../components/Header';

const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    if (body.password !== e.currentTarget.repeatpassword.value) {
      setErrorMsg('The passwords don\'t match');
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/login');
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
      <Header title="Create Account" />
      <Container>
        <Form title="Sign Up" buttonText="Create" onSubmit={handleSubmit}>
          <Input name="username" title="Email Address" placeholder="JohnDoe@example.com" type="email" />
          <Input name="password" title="Password" placeholder="Password" type="password" />
          <Input name="repeatpassword" title="Repeat Password" placeholder="Repeat Password" type="password" />
        </Form>
      </Container>
    </Background>
  );
};

export default Signup;

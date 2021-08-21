import { useState } from 'react';
import Router from 'next/router';
import { useAdmin } from '../lib/admin-hooks';
import Form from '../components/Form';
import Input from '../components/Input';
import Background from '../components/Background';
import Container from '../components/Container';
import Header from '../components/Header';
// import { } from 'dotenv/config';

// const { ADMIN_KEY } = process.env;

const Login = () => {
  useAdmin({ redirectTo: '/add-item', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        console.log('here!!!');
        Router.push('/add-item');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  // function adminKey() {
  //   const givenKey = prompt('Enter admin key: ');
  //   if (!(givenKey === ADMIN_KEY)) {
  //     alert('Incorrect.');
  //     Router.push('/add-item');
  //   }
  // }

  return (
    <Background>
      {/* {adminKey} */}
      <Header title="Admin Login" />
      <Container>
        <Form title="Admin Login" buttonText="Login" onSubmit={handleSubmit}>
          <Input name="username" title="Email Address" placeholder="JohnDoe@example.com" type="email" />
          <Input name="password" title="Password" placeholder="Password" type="password" />
        </Form>
      </Container>
    </Background>
  );
};

export default Login;

import React from 'react';
import { useState } from 'react';

const TokenPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setToken(json.token);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
};

export default TokenPost;

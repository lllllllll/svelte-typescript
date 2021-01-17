import { writable, readable } from 'svelte/store';

async function getUsers() {
  const data = await fetch('https://api.github.com/users');

  return await data.json();
}

const cUsers = () => readable([], set => {
  getUsers().then(users => {
    console.log('readable >> ', users);

    set(users);
  });
});

export const users = cUsers();
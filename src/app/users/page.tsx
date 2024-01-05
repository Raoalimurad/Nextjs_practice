import React from 'react';

export async function getUser() {
  let data = await fetch("http://localhost:3000/api/user");
  data = await data.json();
  return data;
}

export default async function Page() {
  const user = await getUser();
  console.log(user);

  return (
    <div>
      <h1>this is userslist</h1>
      {
      user.map((item) => (
        <div>
          {item.id}
        </div>
      ))
      }
    </div>
  );
}



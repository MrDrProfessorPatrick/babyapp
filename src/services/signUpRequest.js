export async function signUpRequest({ url, user }) {
  console.log('signUpRequest args', 'url = ', url, 'user =  ', user);

  let data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  console.log('signUpRequest', data);
  return data;
}

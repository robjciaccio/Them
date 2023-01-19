export const getLocalusers = async () => {
  try {
    const getUsers = await fetch(
      '/Users/robertciaccio/Them/src/helper/dummyUsers.json',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const resData = await getUsers.json();
    if (resData) {
      return resData.users;
    }
    return 'noone lives here bitch';
  } catch (error) {
    console.log(error);
  }
};

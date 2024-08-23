export const listAccounts = () => {
  // Get accounts from localStorage
  const accounts = JSON.parse(localStorage.getItem('users')) || [];

  // console.log('Fetched accounts from localStorage:', accounts);
  
  return { data: accounts }; // Return an object with a `data` property
};

// authService.js

export const registerUser = (userData) => {
  // Get users from localStorage or initialize an empty array
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the user already exists
  const userExists = users.some((user) => user.email === userData.email);
  if (userExists) {
    throw new Error('User already registered with this email.');
  }

  // Add the new user to the users array
  users.push(userData);

  // Save the updated users array back to localStorage
  localStorage.setItem('users', JSON.stringify(users));
};

export const loginUser = (email, password) => {
  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find the user with matching email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    throw new Error('Invalid email or password.');
  }

  // Simulate setting the current user (you can enhance this with JWT, etc.)
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};

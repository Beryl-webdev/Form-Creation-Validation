// Step 1: Define the asynchronous function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> element
    const userList = document.createElement('ul');

    // Step 7: Loop through each user and create <li> items
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append the user list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 9: Handle any errors that occurred during fetch
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Step 10: Invoke fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

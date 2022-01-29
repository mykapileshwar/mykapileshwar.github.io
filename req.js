fetch('https://kapileshwar.herokuapp.com/notices')
  .then(response => response.json())
  .then(data => console.log(data));
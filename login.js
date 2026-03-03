const users = [
  { username: "admin", password: "1234" },
  { username: "john", password: "pass123" },
];

function login(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    console.log(`✅ Login successful! Welcome, ${username}`);
    return true;
  } else {
    console.log("❌ Invalid username or password");
    return false;
  }
}
login("admin", "1234");   
login("john", "wrongpass"); 
login("nobody", "1234");    

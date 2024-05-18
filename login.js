document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Retrieving user data from localStorage (replace this with actual server call in production)
    const userData = JSON.parse(localStorage.getItem(email));
    
    if (!userData) {
      document.getElementById("message").innerText = "Invalid email or password";
      return;
    }
  
    // Check password
    if (userData.password !== password) {
      document.getElementById("message").innerText = "Invalid email or password";
      return;
    }
  
    // Redirect based on role
    if (userData.role === "seller") {
      window.location.href = "Seller/Seller.html";
    } else if (userData.role === "buyer") {
      window.location.href = "Buyer/Buyer.html";
    }
  });
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "Pair" && password === "170950") {
      window.location.href="home.html"
    } else {
      document.getElementById("error").innerText = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }
  
  
  });

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html", "about.html", "composers.html", "performers.html", "series.html", "login.html";
  }
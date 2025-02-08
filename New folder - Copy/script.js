document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector("#back-to-top"); 
  
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  

// চ্যাট বক্স ওপেন করা
document.getElementById("chat-btn").addEventListener("click", function() {
  document.getElementById("chat-box").style.display = "block";
});

// চ্যাট বক্স বন্ধ করা
document.getElementById("close-chat").addEventListener("click", function() {
  document.getElementById("chat-box").style.display = "none";
});

// মেসেজ পাঠানো
document.getElementById("send-msg").addEventListener("click", function() {
  let inputField = document.getElementById("chat-input");
  let message = inputField.value.trim();

  if (message !== "") {
      let chatMessages = document.getElementById("chat-messages");

      // ইউজার মেসেজ
      let userMsg = document.createElement("div");
      userMsg.classList.add("chat-message", "user-message");
      userMsg.innerText = message;
      chatMessages.appendChild(userMsg);

      // ক্লিয়ার ইনপুট
      inputField.value = "";

      // এডমিন রেসপন্স (ডেমো)
      setTimeout(() => {
          let adminMsg = document.createElement("div");
          adminMsg.classList.add("chat-message", "admin-message");
          adminMsg.innerText = "ধন্যবাদ! আমরা শীঘ্রই উত্তর দেব।";
          chatMessages.appendChild(adminMsg);
      }, 1000);

      // স্ক্রল নিচে নেওয়া
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});












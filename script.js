const goBottomButton = document.getElementById("goBottom");
goBottomButton.addEventListener("click", () => {
  const distanceToScroll = window.innerHeight * 0.19;
  window.scrollBy({ top: distanceToScroll, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight * 0.19) {
    goBottomButton.style.bottom = "-50px";
  } else {
    goBottomButton.style.bottom = "20px";
  }
});
window.onscroll = function () {
  if (
    document.body.scrollTop > document.body.scrollHeight * 0.2 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.2
  ) {
    document.getElementById("go-top-btn").style.display = "block";
    document.getElementById("go-top-btn").style.bottom = "20px";
  } else {
    document.getElementById("go-top-btn").style.display = "none";
    document.getElementById("go-top-btn").style.bottom = "-50px";
  }
};
document.getElementById("go-top-btn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function downloadResume() {
    window.open('./assets/Samkit_jain_resume.pdf', '_blank');
}

const toggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const socialIcons = document.querySelectorAll("#socials--list img");
const profilePic = document.getElementById("profile-pic");

// Check for previously saved theme preference
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.classList.toggle("light-mode", currentTheme === "light");
themeIcon.src = currentTheme === "light" ? "assets/moon.svg" : "assets/sun.svg";
updateIconsTint(currentTheme === "light");

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
    const isLightMode = document.documentElement.classList.toggle("light-mode");
    const theme = isLightMode ? "light" : "dark";

    // Update icon
    themeIcon.src = isLightMode ? "assets/moon.svg" : "assets/sun.svg";

    // Update icons tint
    updateIconsTint(isLightMode);

    // Save theme preference in local storage
    localStorage.setItem("theme", theme);
});

function updateIconsTint(isLightMode) {
    socialIcons.forEach(icon => {
        icon.style.filter = isLightMode ? "none" : "invert(1) brightness(2)";
    });
    
    // Update profile picture tint
    profilePic.style.filter = isLightMode ? "none" : "brightness(0.8) contrast(1.2)";
}


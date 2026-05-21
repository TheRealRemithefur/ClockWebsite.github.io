const cursor = document.getElementById("custom-cursor");

cursor.style.position = "fixed";
cursor.style.pointerEvents = "none"; // VERY important
cursor.style.zIndex = "9999";
cursor.style.width = "32px";  // resize here
cursor.style.height = "32px";

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

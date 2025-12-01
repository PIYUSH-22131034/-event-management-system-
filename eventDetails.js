//eventDetails.js
const eventImage = document.querySelector(".event-image");
if (eventImage) {
  const e = JSON.parse(localStorage.getItem("selectedEvent"));
  if (e) {
    document.querySelector(".event-image").src = e.img;
    document.querySelector(".event-title").textContent = e.title;
    document.querySelector(".event-date").innerHTML = `<strong>Date:</strong> ${e.date}`;
    document.querySelector(".event-time").innerHTML = `<strong>Time:</strong> ${e.time}`;
    document.querySelector(".event-place").innerHTML = `<strong>Location:</strong> ${e.location}`;
    document.querySelector(".event-descp").textContent = e.description;
  } else {
    document.querySelector(".event-title").textContent = "No event selected!";
  }
}
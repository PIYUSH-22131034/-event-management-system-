//script.js
const events = [
  {
    img: "tech1.jpg",
    title: "Tech Fest",
    date: "December 10, 2025",
    time: "9:00 AM – 6:00 PM",
    location: "Innovation Center, Downtown City",
    description:
      "Explore cutting-edge technologies, AI showcases, and robotics competitions. Meet top developers, attend coding marathons, and witness groundbreaking inventions at the ultimate technology celebration."
  },
  {
    img: "food.jpg",
    title: "Food Carnival",
    date: "December 15, 2025",
    time: "11:00 AM – 9:00 PM",
    location: "Central Park, City Square",
    description:
      "A vibrant food fiesta featuring international cuisines, live cooking shows, and gourmet stalls. Taste flavors from around the world and enjoy an unforgettable food experience for all ages."
  },
  {
    img: "cultural.jpg",
    title: "Cultural Fest",
    date: "December 20, 2025",
    time: "10:00 AM – 8:00 PM",
    location: "Heritage Grounds, City Center",
    description:
      "Celebrate diversity through traditional dance, music, crafts, and performances. Experience the beauty of different cultures coming together in one spectacular festival."
  },
  {
    img: "art.jpg",
    title: "Art Expo",
    date: "January 5, 2026",
    time: "10:00 AM – 7:00 PM",
    location: "Modern Art Gallery, Riverside Avenue",
    description:
      "An artistic showcase featuring contemporary painters, sculptors, and digital creators. Enjoy immersive installations and live art demonstrations from renowned artists."
  },
  {
    img: "music1.jpg",
    title: "Music Night",
    date: "January 20, 2026",
    time: "6:00 PM – 12:00 AM",
    location: "Open Air Stadium, City Arena",
    description:
      "An electrifying night with live performances from top bands and DJs. Dance under the stars and feel the rhythm in an atmosphere full of lights, beats, and energy."
  },
  {
    img: "sports.jpg",
    title: "Sports Meet",
    date: "February 10, 2026",
    time: "8:00 AM – 5:00 PM",
    location: "National Sports Complex, East Campus",
    description:
      "A thrilling day of athletic spirit and teamwork featuring track events, football matches, and more. Cheer for your teams and witness records being broken in an inspiring sports extravaganza."
  }
];


document.querySelectorAll(".more-details").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const card = link.closest(".card");
    const cardTitle = card.querySelector(".card-title").textContent.trim();

    const selectedEvent = events.find(
      event => event.title.toLowerCase() === cardTitle.toLowerCase()
    );

    if (selectedEvent) {
      localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
      window.location.href = "eventDetails.html";
    } else {
      alert("Event details not found for " + cardTitle);
    }
  });
});
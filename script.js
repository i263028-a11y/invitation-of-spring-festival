// Muhammad Jawad Ahmad | Roll No: 26i-3028 | Section: SE-A
// Spring Festival — Lab 12

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Spring Festival RSVP form submitted.");
    window.alert("Thank you for your RSVP! We look forward to seeing you at the Spring Festival.");
    rsvpForm.reset();
  });
}

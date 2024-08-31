//document.addEventListener('DOMContentLoaded', function() {
//     // Function to show a message
//     function showNotAvailableMessage(event) {
//         event.preventDefault(); // Prevent default link behavior
//         alert('Not yet available');
//     }

//     // Select the "Timetable" and "News" buttons
//     const timetableButton = document.querySelector('.dropbtn.timetable');
//     const newsButton = document.querySelector('.dropbtn.news');

//     // Select the links inside the "Timetable" and "News" dropdowns
//     const timetableLinks = document.querySelectorAll('.timetable-link');
//     const newsLinks = document.querySelectorAll('.news-link');

//     // Attach click event to the "Timetable" and "News" buttons
//     timetableButton.addEventListener('click', showNotAvailableMessage);
//     newsButton.addEventListener('click', showNotAvailableMessage);

//     // Attach click event to each link in the "Timetable" and "News" dropdowns
//     timetableLinks.forEach(link => {
//         link.addEventListener('click', showNotAvailableMessage);
//     });

//     newsLinks.forEach(link => {
//         link.addEventListener('click', showNotAvailableMessage);
//     });
// });

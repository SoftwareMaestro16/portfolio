// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('themeToggle');
//     const html = document.documentElement;
//     const icon = themeToggle.querySelector('i');

//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
//         html.classList.add('dark');
//         icon.classList.replace('fa-moon', 'fa-sun');
//         document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
//     }

//     themeToggle.addEventListener('click', function() {
//         html.classList.toggle('dark');

//         if (html.classList.contains('dark')) {
//             icon.classList.replace('fa-moon', 'fa-sun');
//             localStorage.setItem('theme', 'dark');
//             document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
//         } else {
//             icon.classList.replace('fa-sun', 'fa-moon');
//             localStorage.setItem('theme', 'light');
//             document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0070f3');
//         }
//     });
// });
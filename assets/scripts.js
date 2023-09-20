const holidays = [
    {
        date: '2023-09-28',
        day: 'Kamis',
        name: 'Maulid Nabi Muhammad SAW',
    },
    {
        date: '2023-12-25',
        day: 'Senin',
        name: 'Hari Raya Natal',
    },
    {
        date: '2023-12-26',
        day: 'Selasa',
        name: 'Cuti Bersama Natal',
    },
    {
        date: '2024-01-01',
        day: 'Senin',
        name: 'Tahun Baru 2024 Masehi',
    },
    {
        date: '2024-02-08',
        day: 'Kamis',
        name: "Isra Mi'raj Nabi Muhammad SAW 1445 H",
    },
    {
        date: '2024-02-10',
        day: 'Sabtu',
        name: 'Tahun Baru Imlek 2575 Kongzili',
    },
    {
        date: '2024-03-11',
        day: 'Senin',
        name: 'Hari Suci Nyepi Tahun Baru Saka 1946',
    },
    {
        date: '2024-03-29',
        day: 'Jumat',
        name: 'Wafatnya Isa Almasih',
    },
    {
        date: '2024-03-31',
        day: 'Minggu',
        name: 'Hari Paskah',
    },
    {
        date: '2024-04-10',
        day: 'Rabu',
        name: 'Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-04-11',
        day: 'Kamis',
        name: 'Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-05-01',
        day: 'Rabu',
        name: 'Hari Buruh Internasional',
    },
    {
        date: '2024-05-09',
        day: 'Kamis',
        name: 'Kenaikan Isa Almasih',
    },
    {
        date: '2024-05-23',
        day: 'Kamis',
        name: 'Hari Raya Waisak 2568 BE',
    },
    {
        date: '2024-06-01',
        day: 'Sabtu',
        name: 'Hari Lahir Pancasila',
    },
    {
        date: '2024-06-17',
        day: 'Senin',
        name: 'Hari Raya Idul Adha 1445 H',
    },
    {
        date: '2024-07-07',
        day: 'Minggu',
        name: 'Tahun Baru Islam 1446 H',
    },
    {
        date: '2024-08-17',
        day: 'Sabtu',
        name: 'Hari Kemerdekaan Republik Indonesia',
    },
    {
        date: '2024-09-16',
        day: 'Senin',
        name: 'Maulid Nabi Muhammad SAW',
    },
    {
        date: '2024-12-25',
        day: 'Rabu',
        name: 'Hari Raya Natal',
    },
    {
        date: '2024-02-09',
        day: 'Jumat',
        name: 'Cuti Bersama Tahun Baru Imlek 2575 Kongzili',
    },
    {
        date: '2024-03-12',
        day: 'Selasa',
        name: 'Cuti Bersama Hari Suci Nyepi Tahun Baru Saka 1946',
    },
    {
        date: '2024-04-08',
        day: 'Senin',
        name: 'Cuti Bersama Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-04-09',
        day: 'Selasa',
        name: 'Cuti Bersama Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-04-12',
        day: 'Jumat',
        name: 'Cuti Bersama Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-04-15',
        day: 'Senin',
        name: 'Cuti Bersama Hari Raya Idul Fitri 1445 H',
    },
    {
        date: '2024-05-10',
        day: 'Jumat',
        name: 'Cuti Bersama Kenaikan Isa Almasih',
    },
    {
        date: '2024-05-24',
        day: 'Jumat',
        name: 'Cuti Bersama Hari Raya Waisak',
    },
    {
        date: '2024-06-18',
        day: 'Selasa',
        name: 'Cuti Bersama Idul Adha 1445 H',
    },
    {
        date: '2024-12-26',
        day: 'Kamis',
        name: 'Cuti Bersama Hari Raya Natal',
    },
];


// Get the current date
const currentDateElement = document.getElementById('currentDate');
const currentDate = new Date();

currentDateElement.innerHTML = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

// Function to format a date as 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Get the current date formatted as 'YYYY-MM-DD'
const currentDateFormatted = formatDate(new Date());

// Find a holiday for today's date
const todayHoliday = holidays.find(holiday => holiday.date === currentDateFormatted);

// Get the currentEvent element
const currentEventElement = document.getElementById('currentEvent');

if (todayHoliday) {
    // If there is a holiday, display its name
    currentEventElement.innerHTML = todayHoliday.name;
} else {
    // If there is no holiday, display "Tidak Ada Tanggal Merah"
    currentEventElement.innerHTML = "Tidak Ada Tanggal Merah";
}


// Function to toggle between sun and moon icons
function toggleThemeIcon() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Check the current theme
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');

    if (currentTheme === 'dark') {
        // If dark theme is active, show the moon icon and hide the sun icon
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        // If light theme is active, show the sun icon and hide the moon icon
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
}

// Initial call to set the correct icon based on the current theme
toggleThemeIcon();

// Add a click event listener to the themeToggle link
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating

    // Toggle the 'data-bs-theme' attribute between 'dark' and 'light'
    document.documentElement.setAttribute('data-bs-theme',
        document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
    );

    // Call the function to toggle the icons based on the updated theme
    toggleThemeIcon();
});

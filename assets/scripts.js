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
        date: '2024-02-14',
        day: 'Rabu',
        name: 'Hari Pemilihan Umum',
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
    {
        "date": "2025-01-01",
        "day": "Rabu",
        "name": "Tahun Baru 2025 Masehi"
    },
    {
        "date": "2025-01-27",
        "day": "Senin",
        "name": "Isra Mikraj Nabi Muhammad S.A.W."
    },
    {
        "date": "2025-01-28",
        "day": "Selasa",
        "name": "Tahun Baru Imlek 2576 Kongzili"
    },
    {
        "date": "2025-01-29",
        "day": "Rabu",
        "name": "Tahun Baru Imlek 2576 Kongzili"
    },
    {
        "date": "2025-03-28",
        "day": "Jumat",
        "name": "Hari Suci Nyepi (Tahun Baru Saka 1947)"
    },
    {
        "date": "2025-03-29",
        "day": "Sabtu",
        "name": "Hari Suci Nyepi (Tahun Baru Saka 1947)"
    },
    {
        "date": "2025-03-31",
        "day": "Senin",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-01",
        "day": "Selasa",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-02",
        "day": "Rabu",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-03",
        "day": "Kamis",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-04",
        "day": "Jumat",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-07",
        "day": "Senin",
        "name": "Idul Fitri 1446 Hijriah"
    },
    {
        "date": "2025-04-18",
        "day": "Jumat",
        "name": "Wafat Yesus Kristus"
    },
    {
        "date": "2025-04-20",
        "day": "Minggu",
        "name": "Kebangkitan Yesus Kristus (Paskah)"
    },
    {
        "date": "2025-05-01",
        "day": "Kamis",
        "name": "Hari Buruh Internasional"
    },
    {
        "date": "2025-05-12",
        "day": "Senin",
        "name": "Hari Raya Waisak 2569 BE"
    },
    {
        "date": "2025-05-13",
        "day": "Selasa",
        "name": "Hari Raya Waisak 2569 BE"
    },
    {
        "date": "2025-05-29",
        "day": "Kamis",
        "name": "Kenaikan Yesus Kristus"
    },
    {
        "date": "2025-05-30",
        "day": "Jumat",
        "name": "Kenaikan Yesus Kristus"
    },
    {
        "date": "2025-06-01",
        "day": "Minggu",
        "name": "Hari Lahir Pancasila"
    },
    {
        "date": "2025-06-06",
        "day": "Jumat",
        "name": "Idul Adha 1446 Hijriah"
    },
    {
        "date": "2025-06-09",
        "day": "Senin",
        "name": "Idul Adha 1446 Hijriah"
    },
    {
        "date": "2025-06-27",
        "day": "Jumat",
        "name": "1 Muharam Tahun Baru Islam 1447 Hijriah"
    },
    {
        "date": "2025-08-17",
        "day": "Minggu",
        "name": "Proklamasi Kemerdekaan"
    },
    {
        "date": "2025-09-05",
        "day": "Jumat",
        "name": "Maulid Nabi Muhammad S.A.W."
    },
    {
        "date": "2025-12-25",
        "day": "Kamis",
        "name": "Kelahiran Yesus Kristus"
    },
    {
        "date": "2025-12-26",
        "day": "Jumat",
        "name": "Kelahiran Yesus Kristus"
    }
];

// Function to toggle between sun and moon icons
function toggleThemeIcon() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Check the current theme from localStorage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        // If dark theme is active, show the sun icon and hide the moon icon
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        // If light theme is active, show the moon icon and hide the sun icon
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
}

// Function to set the theme preference in localStorage
function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Function to check and set the theme preference initially
function checkAndSetTheme() {
    const currentTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Use the system theme if there's no theme preference in localStorage
    const initialTheme = currentTheme || systemTheme;

    document.documentElement.setAttribute('data-bs-theme', initialTheme);
    toggleThemeIcon(); // Set the icon based on the initial theme
    setThemePreference(initialTheme);
}

// Initial call to check and set the theme
checkAndSetTheme();

// Add a click event listener to the themeToggle link
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating

    // Toggle the 'data-bs-theme' attribute between 'dark' and 'light'
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);

    // Set the theme preference in localStorage
    setThemePreference(newTheme);

    // Call the function to toggle the icons based on the updated theme
    toggleThemeIcon();
});



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


// Function to find the closest upcoming holiday
function findClosestUpcomingHoliday() {
    const currentDate = new Date();
    const currentDateFormatted = formatDate(currentDate);

    // Sort the holidays by date in ascending order
    holidays.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
    });

    // Find the closest upcoming holiday
    for (const holiday of holidays) {
        if (holiday.date >= currentDateFormatted) {
            return holiday;
        }
    }

    return null; // If there are no upcoming holidays
}

// Function to calculate the time difference between two dates
function getTimeDifference(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return {
        days,
        hours,
        minutes,
        seconds,
    };
}


function formatDateWithDay(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

const upcomingHoliday = findClosestUpcomingHoliday();

const upcomingEventNameElement = document.getElementById('upcomingEventName');
const upcomingEventDateElement = document.getElementById('upcomingEventDate');
const upcomingEventCountdownElement = document.getElementById('upcomingEventCountdown');

if (upcomingHoliday) {
    const formattedDate = formatDateWithDay(upcomingHoliday.date);

    upcomingEventNameElement.innerHTML = `${upcomingHoliday.name}`;
    upcomingEventDateElement.innerHTML = `${formattedDate}`;
} else {
    upcomingEventNameElement.innerHTML = "Tidak Ada Tanggal Merah";
    upcomingEventDateElement.innerHTML = "";
}

// Function to update the countdown
function updateCountdown() {
    const upcomingEventCountdownElement = document.getElementById('upcomingCountDown');

    if (upcomingHoliday) {
        const targetDate = new Date(upcomingHoliday.date);
        const currentDate = new Date();

        // Calculate the time difference
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // Update the countdown element
            upcomingEventCountdownElement.textContent = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
        } else {
            // If the target date has passed, display a message
            upcomingEventCountdownElement.textContent = "Libur Telah Berlalu";
        }
    } else {
        // If there are no upcoming holidays, display an empty message
        upcomingEventCountdownElement.textContent = "";
    }
}

// Call the updateCountdown function initially
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

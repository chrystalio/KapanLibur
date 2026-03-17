// State management
let currentHoliday = null;
let nextHoliday = null;
let suggestions = [];
let countdownInterval = null;

// API response cache per language (to avoid rate limiting on language switch)
const apiCache = {
    id: { today: null, next: null, suggestions: null },
    en: { today: null, next: null, suggestions: null }
};

// ============ Theme Management ============

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;

    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
    updateThemeIcons(theme);
}

// Toggle between light and dark themes
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
    updateAriaPressed('themeToggle', isDark);
}

// Update theme icon visibility based on current theme
function updateThemeIcons(theme) {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (theme === 'dark') {
        sunIcon.style.display = '';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = '';
    }
}

// ============ Language Management ============

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'id';
    document.documentElement.lang = savedLang;
    updateTranslations();
}

// Toggle between Indonesian and English
function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'id';
    const newLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    updateAriaPressed('langToggle', newLang === 'en');
    updateTranslations();
    updateSkipLink();
    // Load data for new language (uses cache if available)
    loadData(newLang);
}

// Update aria-pressed state for toggle buttons
function updateAriaPressed(buttonId, isPressed) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.setAttribute('aria-pressed', isPressed.toString());
    }
}

// Update skip link text based on language
function updateSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        const lang = getLang();
        skipLink.textContent = lang === 'id' ? 'Langsung ke konten utama' : 'Skip to main content';
    }
}

// ============ UI Updates ============

// Update the UI with fetched holiday data
function updateUI() {
    const lang = getLang();

    // Update current date display
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
        currentDateEl.textContent = formatCurrentDate(lang);
    }

    // Update today's holiday section
    const currentEventEl = document.getElementById('currentEvent');
    if (currentEventEl) {
        if (currentHoliday && currentHoliday.data) {
            currentEventEl.textContent = currentHoliday.data.name;
            currentEventEl.style.color = 'var(--text-primary)';
        } else if (currentHoliday && currentHoliday.message) {
            // Use API message when no holiday
            currentEventEl.textContent = currentHoliday.message;
            currentEventEl.style.color = 'var(--text-tertiary)';
        } else {
            currentEventEl.textContent = '—';
            currentEventEl.style.color = 'var(--text-tertiary)';
        }
    }

    // Update upcoming holiday section
    const upcomingNameEl = document.getElementById('upcomingEventName');
    const upcomingDateEl = document.getElementById('upcomingEventDate');

    if (nextHoliday && nextHoliday.data) {
        if (upcomingNameEl) upcomingNameEl.textContent = nextHoliday.data.name;
        if (upcomingDateEl) upcomingDateEl.textContent = formatDate(nextHoliday.data.date, lang);
        startCountdown();
    } else if (nextHoliday && nextHoliday.message) {
        if (upcomingNameEl) upcomingNameEl.textContent = nextHoliday.message;
        if (upcomingDateEl) upcomingDateEl.textContent = '';
        stopCountdown();
        resetCountdown();
    } else {
        if (upcomingNameEl) upcomingNameEl.textContent = t('noUpcomingHoliday');
        if (upcomingDateEl) upcomingDateEl.textContent = '';
        stopCountdown();
        resetCountdown();
    }
}

// Update structured data (JSON-LD) for SEO
function updateStructuredData() {
    const lang = getLang();
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "KapanLibur",
        "alternateName": lang === 'id' ? "KapanLibur - Informasi Hari Libur Nasional Indonesia" : "KapanLibur - Indonesian National Holidays Information",
        "url": "https://kapanlibur.krisdev.my.id",
        "description": lang === 'id'
            ? "Cek informasi hari libur nasional Indonesia dengan mudah. Dapatkan update libur nasional, cuti bersama, dan hitung mundur ke hari libur berikutnya."
            : "Check Indonesian national holidays easily. Get updates on national holidays, joint holidays, and countdown to upcoming holidays.",
        "inLanguage": lang,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "IDR"
        },
        "publisher": {
            "@type": "Person",
            "name": "Kristoff",
            "url": "https://kriscode.space/"
        }
    };

    // Add next holiday as Event if available
    if (nextHoliday && nextHoliday.data) {
        const holidayDate = new Date(nextHoliday.data.date);
        schema.about = {
            "@type": "Event",
            "name": nextHoliday.data.name,
            "startDate": nextHoliday.data.date,
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
                "@type": "Country",
                "name": "Indonesia"
            }
        };
    }

    // Remove old script element if exists
    const oldScript = document.getElementById('structured-data');
    if (oldScript) oldScript.remove();

    // Create and insert new script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

// ============ Countdown ============

// Start the countdown timer
function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Stop the countdown timer
function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// Reset countdown display to zeros
function resetCountdown() {
    document.getElementById('countDays').textContent = '0';
    document.getElementById('countHours').textContent = '0';
    document.getElementById('countMinutes').textContent = '0';
    document.getElementById('countSeconds').textContent = '0';
}

// Update the countdown display
function updateCountdown() {
    if (!nextHoliday || !nextHoliday.data) return;

    const now = new Date();
    const target = new Date(nextHoliday.data.date);
    // Set target to midnight (start of the holiday day)
    target.setHours(0, 0, 0, 0);

    const diff = target - now;

    // If countdown has reached zero or passed
    if (diff <= 0) {
        stopCountdown();
        resetCountdown();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countDays').textContent = days;
    document.getElementById('countHours').textContent = hours;
    document.getElementById('countMinutes').textContent = minutes;
    document.getElementById('countSeconds').textContent = seconds;
}

// ============ Data Loading ============

// Filter suggestions to only show nearby upcoming ones
function filterNearbySuggestions(suggestionsData) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter: only show suggestions where the holiday is within 7 days
    const sevenDaysLater = new Date(today);
    sevenDaysLater.setDate(today.getDate() + 7);

    return suggestionsData.filter(s => {
        const holidayDate = new Date(s.holiday.date);
        holidayDate.setHours(0, 0, 0, 0);
        return holidayDate >= today && holidayDate <= sevenDaysLater;
    }).slice(0, 3); // Max 3 suggestions
}

// Render suggestions to the DOM
function renderSuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');

    // Filter to only show nearby suggestions
    const nearbySuggestions = filterNearbySuggestions(suggestions);

    if (!nearbySuggestions || nearbySuggestions.length === 0) {
        if (suggestionsList) {
            suggestionsList.innerHTML = `
                <div class="empty-state">
                    <i class='bx bx-calendar-x'></i>
                    <p>${t('noNearbySuggestions')}</p>
                </div>
            `;
        }
        return;
    }

    if (suggestionsList) {
        suggestionsList.innerHTML = nearbySuggestions.map((s, index) => {
            const holidayDate = new Date(s.holiday.date);
            return `
                <div class="suggestion-card" role="listitem" style="animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + (index * 0.1)}s both;">
                    <div class="suggestion-header">
                        <div class="suggestion-date-badge">
                            <span class="suggestion-date-month">${holidayDate.toLocaleDateString(getLang() === 'id' ? 'id-ID' : 'en-US', { month: 'short' }).toUpperCase()}</span>
                            <span class="suggestion-date-day">${holidayDate.getDate()}</span>
                        </div>
                        <div class="suggestion-content">
                            <div class="suggestion-title">${s.holiday.name}</div>
                            <div class="suggestion-meta">
                                <i class='bx bx-time-five'></i>
                                <span>${formatDateRange(s.period.start, s.period.end, getLang())} | <i class='bx bx-briefcase-alt'></i> ${s.leave_days_required} ${t('leaveDays')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="suggestion-reason">${s.reason}</div>
                </div>
            `;
        }).join('');
    }
}

// Show error state with retry button
function showErrorState(containerId, messageKey = 'error') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = getLang();
    const errorMessages = {
        id: {
            title: 'Gagal Memuat Data',
            message: 'Terjadi kesalahan saat memuat data. Silakan coba lagi.',
            retry: 'Coba Lagi'
        },
        en: {
            title: 'Failed to Load Data',
            message: 'An error occurred while loading data. Please try again.',
            retry: 'Retry'
        }
    };

    const msg = errorMessages[lang];
    container.innerHTML = `
        <div class="error-state">
            <i class='bx bx-error-circle'></i>
            <p>${msg.message}</p>
            <button class="retry-btn" onclick="retryLoadData()" aria-label="${msg.retry}">
                ${msg.retry}
            </button>
        </div>
    `;
}

// Retry loading data
function retryLoadData() {
    // Clear cache to force refresh
    const lang = getLang();
    apiCache[lang] = { today: null, next: null, suggestions: null };
    loadData(lang);
}

// Load holiday data from the API (with caching per language)
async function loadData(langParam) {
    const lang = langParam || getLang();
    const cache = apiCache[lang];

    // Show loading state only if we don't have cached data
    const currentEventEl = document.getElementById('currentEvent');
    const upcomingNameEl = document.getElementById('upcomingEventName');
    const suggestionsListEl = document.getElementById('suggestionsList');

    const needsFetch = cache.today === null || cache.next === null || cache.suggestions === null;

    if (needsFetch) {
        if (currentEventEl) currentEventEl.textContent = t('loading');
        if (upcomingNameEl) upcomingNameEl.textContent = t('loading');

        // Show loading state for suggestions only if it's the initial load
        if (suggestions.length === 0 && suggestionsListEl) {
            suggestionsListEl.innerHTML = `
                <div class="empty-state">
                    <div class="spinner" aria-label="${lang === 'id' ? 'Memuat data' : 'Loading data'}"></div>
                </div>
            `;
        }
    }

    try {
        // Use cached data or fetch from API
        const today = cache.today !== null ? cache.today : await fetchTodayHoliday(lang);
        const next = cache.next !== null ? cache.next : await fetchNextHoliday(lang);
        const suggestionData = cache.suggestions !== null ? cache.suggestions : await fetchSuggestions(lang);

        // Check if any request failed (returned error object instead of data)
        if (today === 'error' || next === 'error' || suggestionData === 'error') {
            throw new Error('API request failed');
        }

        // Cache the fetched data
        if (cache.today === null) cache.today = today;
        if (cache.next === null) cache.next = next;
        if (cache.suggestions === null) cache.suggestions = suggestionData;

        currentHoliday = today;
        nextHoliday = next;
        suggestions = suggestionData;

        updateUI();
        renderSuggestions();
        updateStructuredData();
    } catch (error) {
        console.error('Error loading data:', error);
        showErrorState('suggestionsList');
    }
}

// ============ Event Listeners ============

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// ============ Initialize ============

initTheme();
initLanguage();
updateSkipLink();
updateAriaPressed('themeToggle', document.body.classList.contains('dark'));
updateAriaPressed('langToggle', localStorage.getItem('lang') === 'en');
loadData();

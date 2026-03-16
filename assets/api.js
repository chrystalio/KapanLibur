// API Base URL
const API_BASE = 'https://kapanlibur-api.krisdev.my.id';

// Get current language preference from localStorage
function getLang() {
    return localStorage.getItem('lang') || 'id';
}

// Fetch today's holiday from the API
async function fetchTodayHoliday(langOverride) {
    const lang = langOverride || getLang();
    try {
        const response = await fetch(`${API_BASE}/v1/holidays/current?lang=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.success ? { data: result.data, message: result.message } : null;
    } catch (error) {
        console.error('Error fetching today holiday:', error);
        return 'error';
    }
}

// Fetch next holiday from the API
async function fetchNextHoliday(langOverride) {
    const lang = langOverride || getLang();
    try {
        const response = await fetch(`${API_BASE}/v1/holidays/next?lang=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.success ? { data: result.data, message: result.message } : null;
    } catch (error) {
        console.error('Error fetching next holiday:', error);
        return 'error';
    }
}

// Format a date string based on the current language
function formatDate(dateString, lang) {
    const date = new Date(dateString);
    const locale = lang === 'id' ? 'id-ID' : 'en-US';
    return date.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Format the current date (shorter format, no weekday)
function formatCurrentDate(lang) {
    const date = new Date();
    const locale = lang === 'id' ? 'id-ID' : 'en-US';
    return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Fetch leave suggestions from the API
async function fetchSuggestions(langOverride) {
    const lang = langOverride || getLang();
    try {
        const response = await fetch(`${API_BASE}/v1/holidays/suggestions?lang=${lang}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.success ? result.data.suggestions : [];
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        return 'error';
    }
}

// Format date range for suggestions
function formatDateRange(startDate, endDate, lang) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const locale = lang === 'id' ? 'id-ID' : 'en-US';

    const startFormatted = start.toLocaleDateString(locale, { day: 'numeric', month: 'short' });
    const endFormatted = end.toLocaleDateString(locale, { day: 'numeric', month: 'short' });

    return `${startFormatted} - ${endFormatted}`;
}

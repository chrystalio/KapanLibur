// Translation strings for Indonesian and English
const translations = {
    id: {
        today: 'Hari Ini',
        upcoming: 'Libur Yang Akan Datang',
        suggestions: 'Saran Cuti',
        noHolidayToday: 'Bukan Hari Libur',
        noUpcomingHoliday: 'Tidak Ada Libur Mendatang',
        noNearbySuggestions: 'Tidak ada saran cuti untuk waktu dekat',
        days: 'Hari',
        leaveDays: 'hari cuti',
        hours: 'Jam',
        minutes: 'Menit',
        seconds: 'Detik',
        loading: 'Memuat...',
        footer: 'Dibuat dengan ☕ oleh'
    },
    en: {
        today: 'Today',
        upcoming: 'Upcoming Holiday',
        suggestions: 'Leave Suggestions',
        noHolidayToday: 'Not a Holiday',
        noUpcomingHoliday: 'No Upcoming Holiday',
        noNearbySuggestions: 'No nearby leave suggestions',
        days: 'Days',
        leaveDays: 'leave days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        loading: 'Loading...',
        footer: 'Made with ☕ by'
    }
};

// Get translation for a key
function t(key) {
    const lang = localStorage.getItem('lang') || 'id';
    return translations[lang][key] || key;
}

// Update all translated elements in the DOM
function updateTranslations() {
    const todayLabel = document.getElementById('todayLabel');
    const upcomingLabel = document.getElementById('upcomingLabel');
    const labelDays = document.getElementById('labelDays');
    const labelHours = document.getElementById('labelHours');
    const labelMinutes = document.getElementById('labelMinutes');
    const labelSeconds = document.getElementById('labelSeconds');
    const suggestionsLabel = document.getElementById('suggestionsLabel');
    const langText = document.getElementById('langText');
    const footerText = document.getElementById('footerText');

    if (todayLabel) todayLabel.textContent = t('today');
    if (upcomingLabel) upcomingLabel.textContent = t('upcoming');
    if (labelDays) labelDays.textContent = t('days');
    if (labelHours) labelHours.textContent = t('hours');
    if (labelMinutes) labelMinutes.textContent = t('minutes');
    if (labelSeconds) labelSeconds.textContent = t('seconds');
    if (suggestionsLabel) suggestionsLabel.textContent = t('suggestions');
    if (langText) {
        const currentLang = localStorage.getItem('lang') || 'id';
        langText.textContent = currentLang === 'en' ? 'ID' : 'EN';
    }
    if (footerText) footerText.textContent = t('footer');
}

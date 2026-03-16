# KapanLibur

[![wakatime](https://wakatime.com/badge/user/7a61dce4-9247-4e92-88ad-5adb69d3bb0f/project/e3b8ef74-acc5-4b42-8e7e-20f96c00824a.svg)](https://wakatime.com/badge/user/7a61dce4-9247-4e92-88ad-5adb69d3bb0f/project/e3b8ef74-acc5-4b42-8e7e-20f96c00824a)

## Overview

KapanLibur is a simple web application that provides information about Indonesian public holidays. It displays today's holiday status, upcoming holidays with a live countdown, leave suggestions for planning long weekends, and supports both Indonesian and English languages.

## Features

- **Today's Holiday Status** - Shows if today is a holiday or a regular day with API-provided messages
- **Upcoming Holiday** - Displays the next holiday with a live countdown (days, hours, minutes, seconds)
- **Leave Suggestions** - Smart suggestions for taking leave days to maximize long weekends
- **Bilingual Support** - Switch between Indonesian (Bahasa Indonesia) and English with persistent preference
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Live API Data** - Fetches holiday data from [KapanLibur API](https://kapanlibur-api.krisdev.my.id) with per-language caching
- **Accessibility** - Skip links, ARIA labels, keyboard navigation, and screen reader support
- **Error Handling** - Graceful error states with retry functionality

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Styling**: Custom CSS with CSS variables for theming
- **Icons**: Boxicons 2.1.4
- **Fonts**: Manrope (display/headings), Space Grotesk (body)
- **API**: [KapanLibur API](https://kapanlibur-api.krisdev.my.id)

## Usage

Visit [KapanLibur](https://kapanlibur.krisdev.my.id) to use the application.

### Features

1. **Language Toggle** - Click the language button (EN/ID) to switch between English and Indonesian
2. **Theme Toggle** - Click the sun/moon icon to switch between light and dark mode
3. **Live Countdown** - See the exact time remaining until the next holiday
4. **Leave Suggestions** - Get suggestions for taking leave days to extend weekends

## Development

This project uses pure HTML, CSS, and JavaScript for the frontend. No build process required - just open `index.html` in a browser.

### Local Development

```bash
# Simply open the HTML file in your browser
open index.html

# Or use a simple HTTP server
python -m http.server 8000
# Then visit http://localhost:8000

# Or with PHP
php -S localhost:8000
```

### Project Structure

```
KapanLibur/
├── index.html          # Main HTML file
├── assets/
│   ├── styles.css      # Custom styles with CSS variables
│   ├── i18n.js         # Translation strings (ID/EN)
│   ├── api.js          # API client functions with caching
│   ├── app.js          # Main application logic
│   └── calendar.ico    # Favicon
|   images/
|   └── og-image.png    # og-image
└── README.md           # This file
└── robots.txt          # Robots.txt
└── sitemap.xml         # sitemap
```

## API

This application uses the [KapanLibur API](https://kapanlibur-api.krisdev.my.id) for holiday data.

For complete API documentation, visit: [https://kapanlibur-api.krisdev.my.id/docs](https://kapanlibur-api.krisdev.my.id/docs)

### API Caching

The application implements per-language API response caching to minimize API calls and provide a smoother experience when switching languages.

## Accessibility

- **Skip Link** - Keyboard users can skip to main content
- **ARIA Labels** - All interactive elements have descriptive labels
- **Semantic HTML** - Proper use of landmarks (`banner`, `main`, `contentinfo`)
- **Focus Indicators** - Visible focus states for keyboard navigation
- **Screen Reader Support** - `aria-live` regions for dynamic content
- **Reduced Motion** - Respects `prefers-reduced-motion` preference

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.

## Issues

If you encounter any issues or have suggestions, please open an issue.

## License

This project is open-source.

// Wait for the page to load and call this
function plugDarkModButton(pathToCss) {
    document.addEventListener('DOMContentLoaded', () => {
        const themeStylesheet = document.getElementById('theme');
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            themeStylesheet.href = storedTheme;
            
        }
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            // if it's light -> go dark
            if(themeStylesheet.href.includes('light')){
                themeStylesheet.href = pathToCss + 'dark-theme.css'
                themeToggle.className = 'fas fa-toggle-on';
            } else {
                // if it's dark -> go light
                themeStylesheet.href = pathToCss + 'light-theme.css'
                themeToggle.className = 'fas fa-toggle-off';
            }
            // save the preference to localStorage
            localStorage.setItem('theme',themeStylesheet.href)
        })
    })
}
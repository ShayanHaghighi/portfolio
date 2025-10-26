;(function initTheme() {
    var theme = localStorage.getItem('theme') || 'light'
    console.log('dark')

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme','dark')
    }
})()
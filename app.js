// 1. Hamburger Menu Logic
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('open');
}

// 2. Page Navigation Logic
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Close menu after clicking on mobile
    toggleMenu();
}

// 3. Sub-Tab Logic (for Booking & Finance)
function switchTab(pageContext, tabId) {
    // Find the specific section (Finance or Booking)
    const section = document.getElementById(pageContext);
    
    // Remove 'active' from all buttons in this section
    const buttons = section.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Hide all tab content in this section
    const contents = section.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Add 'active' to clicked button (event.target is the element clicked)
    event.target.classList.add('active');

    // Show the specific tab content
    document.getElementById(tabId).classList.add('active');
}

// 4. Register Service Worker (Required for PWA offline features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Error', err));
    });
}

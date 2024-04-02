export const router = () => {
    let doc = document.querySelector('html');
    
    // Making routes
    const routes = {
        '/' : 'index.html',
        '/home' : 'home.html',
    }
    
    // Fetching the page
    const getPage = async (url) => {
        let response = await fetch(url);
        let page = await response.text();
        doc.innerHTML = `${page} <script src="./app.js"><script>`;
    }

    // looping through each route
    for (const route in routes) {
        const path = routes[route];
        console.log(`Route: ${route}, Path: ${path}`);
    }
    

    let route = window.location.pathname;
    
    if(route == '/index.html' || route == '/app.html' || route == '/home.html' || route == '/') {
        history.pushState(null, null, '/');
    }
    
    if(routes[route]) {
        history.pushState(null, null, route);
    }

    window.addEventListener('popstate', () => {
        console.log('State is poped');
    });

    getPage(routes[route]);
    
}
export const router = () => {
    // Variables
    const linkElements = document.querySelectorAll('[href]') ?? null;
    const routerElements = document.querySelectorAll('[route]') ?? null;
    
    // Rendering the page through route name
    const render = (element, attribute, route, path) => {
        if(element != null) {
            for(let i=0; i<element.length; i++) {
                let e = element[i].getAttribute(attribute);
                
                if(e == route) {
                    element[i].addEventListener('click', (event) => {
                        event.preventDefault();
                        window.location.href = path;
                    });
                    break;
                }
            }
        }
    }

    let routes = window.routes;


    // looping through each route
    function checkRoute () {
        for (const route in routes) {
            const path = routes[route];
    
            if(window.location.pathname == path || window.location.pathname == `/${path}` || `/${window.location.pathname}` == path) {
                history.pushState(null, null, route);
            }
    
            // console.log(`route : ${route}, path : ${path}`)
    
            render(linkElements, 'href', route, path);
            render(routerElements, 'route', route, path);
        }
    }

    checkRoute();
}
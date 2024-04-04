export class Router {
    constructor() {
        this.routes = {};
        window.onpopstate = () => this.routeChanged();
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    routeChanged() {
        const currentPath = window.location.pathname;
        const handler = this.routes[currentPath] || this.routes['*'];
        
        if (typeof handler === 'function') {
            handler();
        } else {
            console.error(`No route handler found for path '${currentPath}'.`);
        }
    }

    navigate(path) {
        window.history.pushState(null, null, path);
        this.routeChanged();
    }
}

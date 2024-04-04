import { component } from "./component.js";
// import { router } from "./router.js";
import { Router } from './routes.js'

component();
// router();

const router = new Router;

let app = document.querySelector('html');
router.addRoute('/', () => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', (e) => {
        e.preventDefault;
        app.innerHTML = `index.html`;
    });
});


router.routeChanged();
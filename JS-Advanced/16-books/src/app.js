import { MainView } from './views/main/main';
import { FavoritesView } from './views/favorites/favorites';
import { Error404 } from './views/main/404';

class App {
    routes = [
        { path: '', view: MainView },
        { path: 'favorites', view: FavoritesView },
    ];

    appState = { favorites: [] };

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }
    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }

        const view = this.routes.find((r) => r.path == location.hash.replace('#', ''))?.view ?? Error404;

        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}

new App();

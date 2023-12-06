import { AbstractView } from '../../common/view';
import onChange from 'on-change';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';
import { CardList } from '../../components/card-list/card-list';
import { PaginationView } from '../../components/pagination/pagination';

export class MainView extends AbstractView {
    state = {
        list: [],
        numFound: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }
    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    async stateHook(path) {
        console.log(path);
        if (path === 'offset') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.list = data.docs;
        }
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.numFound = data.numFound;
            this.state.loading = false;
            this.state.list = data.docs;
        }

        if (path === 'loading' || path === 'list') {
            this.render();
        }
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}&limit=9`);
        return res.json();
    }

    render() {
        this.app.innerHTML = '';
        const main = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerHTML = `Найдено книг - ${this.state?.numFound}`;
        main.append(new Search(this.state).render());
        main.append(h1);
        main.append(new CardList(this.appState, this.state).render());
        main.append(new PaginationView(this.state).render());
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}

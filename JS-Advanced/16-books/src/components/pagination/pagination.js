import { DivComponent } from '../../common/div-component';
import './pagination.css';

export class PaginationView extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add('pagination');
        const prevItem = document.createElement('button');
        prevItem.setAttribute('data-action', 'prev');
        prevItem.classList.add('button', 'button_prev');
        prevItem.innerHTML = this.state.offset > 0 ? `<span class="pagination__icon">←</span>Предыдущая страница` : '';

        const nextItem = document.createElement('button');
        nextItem.setAttribute('data-action', 'next');
        nextItem.classList.add('button', 'button_next');
        nextItem.innerHTML = this.state.offset < this.state.numFound ? `<span class="pagination__icon">→</span>Следующая страница` : '';

        prevItem.addEventListener('click', this.prevLoad.bind(this));
        nextItem.addEventListener('click', this.nextLoad.bind(this));

        this.el.append(prevItem, nextItem);
        return this.el;
    }

    prevLoad() {
        this.state.offset = this.state.offset - 9 > 0 ? this.state.offset - 9 : 0;
    }
    nextLoad() {
        this.state.offset = this.state.offset + 9 > this.state.numFound ? this.state.numFound : this.state.offset + 9;
    }
}

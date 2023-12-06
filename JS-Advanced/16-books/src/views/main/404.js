import { AbstractView } from '../../common/view';

export class Error404 extends AbstractView {
    constructor() {
        super();
        this.setTitle('Ошибка 404');
    }

    render() {
        const main = document.createElement('div');
        const image = new Image();
        image.src = 'https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png';
        main.append(image);
        super.render();
        this.app.append(main);
    }
}

import { ImageComponent } from './item/image.js';
import { PageComponenet } from './components/page/page.js';

class App {
  private readonly page: PageComponenet;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponenet();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);

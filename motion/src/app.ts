import { VideoComponent } from './item/video.js';
import { TodoComponent } from './item/todo.js';
import { NoteComponent } from './item/note.js';
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
    const note = new NoteComponent('Note Title', 'hi~!');
    note.attachTo(appRoot, 'beforeend');
    const todo = new TodoComponent('Todo Title', 'hi~!');
    todo.attachTo(appRoot, 'beforeend');
    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/3nVmnY1l-4k'
    );
    video.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);

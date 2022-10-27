import { VideoComponent } from './item/video.js';
import { TodoComponent } from './item/todo.js';
import { NoteComponent } from './item/note.js';
import { ImageComponent } from './item/image.js';
import {
  Composable,
  PageComponenet,
  PageItemComponent,
} from './components/page/page.js';
import { Component } from './components/component.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponenet(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);
    const note = new NoteComponent('Note Title', 'hi~!');
    this.page.addChild(note);
    const todo = new TodoComponent('Todo Title', 'hi~!');
    this.page.addChild(todo);
    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/3nVmnY1l-4k'
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);

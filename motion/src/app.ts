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
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InpuComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponenet(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent(
    //   'Image Title',
    //   'https://picsum.photos/600/300'
    // );
    // this.page.addChild(image);
    // const note = new NoteComponent('Note Title', 'hi~!');
    // this.page.addChild(note);
    // const todo = new TodoComponent('Todo Title', 'hi~!');
    // this.page.addChild(todo);
    // // const video = new VideoComponent(
    //   'Video Title',
    //   'https://youtu.be/3nVmnY1l-4k'
    // );
    // this.page.addChild(video);

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );
    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );
    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InpuComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);

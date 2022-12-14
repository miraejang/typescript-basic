import { BaseComponent } from './../components/component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
              <h2 class="page-item__title note__title"></h2>
              <pre class="note__body"></pre>
            </section>`);

    const titleElement = this.element.querySelector(
      '.note__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      '.note__body'
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}

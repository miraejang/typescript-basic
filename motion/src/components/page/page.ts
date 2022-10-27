import { BaseComponent } from './../component.js';

export class PageComponenet extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent!</ul>');
  }
}

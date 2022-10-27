import { BaseComponent } from './../components/component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<sectin class="video">
              <div class="video__playere">
                <iframe class="video__iframe"></iframe>
                <h2 class="video__title"></h2>
              </div>
            </sectin>`);
    const iframeElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframeElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

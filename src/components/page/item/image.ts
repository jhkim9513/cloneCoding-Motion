import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement>{

  constructor(title: string, url: string) {
    // 사용자에게 입력받은 내용을 사용할 경우에는 그것을 innerHTML로 사용하는것은 위험하다
    super(`<section class="image">
          <div class="image__holder"><img class="image__thumbnail"></div>
          <h2 class="image__title"></h2>
          </section>`);

    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

}
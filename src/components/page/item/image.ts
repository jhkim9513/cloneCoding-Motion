export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    // 사용자에게 입력받은 내용을 사용할 경우에는 그것을 innerHTML로 사용하는것은 위험하다
    const template = document.createElement('template');
    template.innerHTML = `<section class="image">
    <div class="image__holder"><img class="image__thumbnail"></div>
    <p class="image__title"></p>
  </section>`;

    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
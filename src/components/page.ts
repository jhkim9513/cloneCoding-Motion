export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    /**
     * <ul class="page">This is PageComponent</ul>
     */
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    // element를 해당하는 position에 추가
    parent.insertAdjacentElement(position, this.element);
  }
}
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}
/**
 * Encapsulate the HTMl element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    // element를 해당하는 position에 추가
    parent.insertAdjacentElement(position, this.element);
  }
}
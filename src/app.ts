import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');
  }
}

// querySelector는 element 또는 null을 리턴하기 때문에 타입 어썰션을 사용해준다.
new App(document.querySelector('.document')! as HTMLElement);
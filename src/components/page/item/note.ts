import { BaseComponent } from "./../../component.js";
export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section>
        <h2 class="page-item__title note__title"></h2>
        <p class="note__body"></p>
      </section>`);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      ".note__body"
    )! as HTMLElement;
    bodyElement.textContent = body;
  }
}

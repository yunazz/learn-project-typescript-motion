import { BaseComponent } from "./../../component.js";
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section>
        <h2 class="todo__title"></h2>
        <input type="checkbox" class="todo-checkbox">
      </section>`);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo-checkbox"
    )! as HTMLElement;
    todoElement.textContent = todo;
  }
}

class ItemFormComponent {
  htmlElement;

  constructor({ onSubmit }) {
    this.htmlElement = document.createElement("form");
    this.htmlElement.className = "item-form shadow p-4 ";
    this.htmlElement.innerHTML = `
    <h2 class="text-center mb-4 fw-normal">Create Travel checklist</h2>
      <div class="mb-3">
        <label for="item-title" class="form-label">Title</label>
        <input type="text" class="form-control" id="item-title" name="title">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="item-done" name="done">
        <label class="form-check-label" for="item-done">Is done</label>
      </div>
      <button type="submit" class="btn btn-primary w-100">Create</button>`;

    this.htmlElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const title = formData.get("title");
      const done = formData.get("done") === "on";

      onSubmit({ title, done });
    });
  }
}

export default ItemFormComponent;

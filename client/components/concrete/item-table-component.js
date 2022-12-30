class ItemsTableComponent {
  htmlElement;
  tbodyHtmlElement;

  onDeleteItems;
  onUpdateItems;

  constructor({ items, onDeleteItems, onUpdateItem }) {
    this.htmlElement = document.createElement("table");
    this.htmlElement.className = "table table-striped shadow-sm";
    this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
      <tr>
        <th>ID</th>
        <th>Item</th>
        <th>Is done</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;
    this.onDeleteItems = onDeleteItems;
    this.onUpdateItem = onUpdateItem;
    this.tbodyHtmlElement = this.htmlElement.querySelector("tbody");
    this.renderItems(items);
  }

  enableRowEditAction = ({
    tr,
    doneCheckbox,
    cancelEditing,
    enableEditing,
    doneLabel,
    editButton,
    isBeingEdited,
    initialState
  }) => {
    document.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!tr.contains(event.target)) cancelEditing();
    });

    doneCheckbox.addEventListener("change", () => {
      doneLabel.textContent = doneCheckbox.checked ? "Yes" : "No";
    });

    editButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (initialState.isBeingEdited) cancelEditing();
      else enableEditing();
    });
  };

  enableRowDeleteAction = ({ id, initialState, delButton }) => {
    delButton.addEventListener("click", () =>
      this.onDeleteItems({ id, title: initialState.title })
    );
  };

  enableRowUpdateAction = ({
    id,
    titleColumn,
    doneCheckbox,
    initialState,
    updateButton,
    cancelEditing,
  }) => {
    updateButton.addEventListener("click", () => {
      const props = {
        id,
        title: titleColumn.textContent,
        done: doneCheckbox.checked,
      };

      if (
        initialState.title !== props.title ||
        initialState.done !== props.done
      ) {
        this.onUpdateItem({ id, props });
      } else {
        cancelEditing();
      }
    });
  };

  enableRowAction = ({ tr, id, title, done }) => {
    let isBeingEdited = false;
    const initialState = { title, done, isBeingEdited };

    const delButton = tr.querySelector(".btn-danger");
    const updateButton = tr.querySelector(".btn-success");
    const editButton = tr.querySelector(".btn-warning");
    const doneLabel = tr.querySelector(".js-done-col label");
    const titleColumn = tr.querySelector(".js-title-col");
    const doneCheckbox = tr.querySelector(".js-done-col input[type=checkbox]");

    const cancelEditing = () => {
      tr.classList.remove("item-table__row--editable");
      editButton.innerHTML = "✎";
      editButton.classList.replace("btn-info", "btn-warning");
      initialState.isBeingEdited = false;
      titleColumn.setAttribute("contenteditable", "false");
      titleColumn.textContent = initialState.title;
      doneCheckbox.checked = initialState.done;
      doneLabel.textContent = initialState.done ? "Yes" : "No";
    };

    const enableEditing = () => {
      tr.classList.add("item-table__row--editable");
      editButton.innerHTML = "cancel";
      editButton.classList.replace("btn-warning", "btn-info");
      initialState.isBeingEdited = true;
      titleColumn.setAttribute("contenteditable", "true");
      doneCheckbox.checked = initialState.done;
    };

    const actionProps = {
      // Props
      id,
      initialState,
      // Elements
      tr,
      titleColumn,
      doneCheckbox,
      doneLabel,
      delButton,
      updateButton,
      editButton,
      // Functions
      cancelEditing,
      enableEditing,
    };

    this.enableRowDeleteAction(actionProps);
    this.enableRowEditAction(actionProps);
    this.enableRowUpdateAction(actionProps);
  };

  createRowHtmlElement = ({ id, title, done }) => {
    const tr = document.createElement("tr");
    tr.className = "item-table__row";
    tr.innerHTML = `
  <th>${id}</th>
  <td class="js-title-col">${title}</td>
  <td class="js-done-col">
  <input type="checkbox" id="${id}"></input>
    <label for="${id}">${done ? "yes" : "No"}</label>
  </td>
  <td class="d-flex justify-content-end gap-2">
  <button class="btn btn-success btn-sm p-1">✔</button>
  <button class="btn btn-warning btn-sm p-1">✎</button>
  <button class="btn btn-danger btn-sm">✕</button>
  </td>`;

    this.enableRowAction({ tr, id, title, done });

    return tr;
  };

  renderItems = (items) => {
    this.tbodyHtmlElement.innerHTML = null;
    const rowsHtmlElements = items.map(this.createRowHtmlElement);
    this.tbodyHtmlElement.append(...rowsHtmlElements);
  };
}

export default ItemsTableComponent;

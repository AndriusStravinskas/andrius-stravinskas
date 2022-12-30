import ApiService from "./api.js";
import HeaderComponent from "./components/concrete/header-component.js";
import ItemsTableComponent from "./components/concrete/item-table-component.js";
import ContainerComponent from "./components/wrappers/container-component.js";
import ItemFormComponent from "./components/concrete/item-form-component.js";

const rootHtmlElement = document.querySelector("#root");

let itemsTableComponent;

const onDeleteItems = async ({ id, title }) => {
  try {
    await ApiService.deleteItem({ id, title });
  } catch (error) {
    alert(error);
  } finally {
    const items = await ApiService.getItems();
    itemsTableComponent.renderItems(items);
  }
};

const onCreateItem = async ({ title, done }) => {
  try {
    await ApiService.createItem({ title, done });
  } catch (error) {
    alert(error);
  } finally {
    const items = await ApiService.getItems();
    itemsTableComponent.renderItems(items);
  }
};

const onUpdateItem = async ({ id, props }) => {
  try {
    await ApiService.updateItem({ id, props });
  } catch (error) {
    alert(error);
  } finally {
    const items = await ApiService.getItems();
    itemsTableComponent.renderItems(items);
  }
};

ApiService.getItems()
  .then((items) => {
    itemsTableComponent = new ItemsTableComponent({
      items,
      onDeleteItems,
      onUpdateItem,
    });
    const headerComponent = new HeaderComponent({
      text: "Travel Checklist",
      className: "text-center my-4",
    });
    const itemsFormComponent = new ItemFormComponent({
      onSubmit: onCreateItem,
    });

    const container = new ContainerComponent({
      children: [
        headerComponent.htmlElement,
        itemsFormComponent.htmlElement,
        itemsTableComponent.htmlElement,
      ],
    });

    rootHtmlElement.append(container.htmlElement);
  })
  .catch((error) => {
    alert(error)
  });

const SERVER_ADDRESS = "http://localhost:5000";
const ITEMS_COLLECTION_NAME = "Items"

const formatError = (error) => {
  return error.message;
};

const ApiService = {
  async getItems() {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${ITEMS_COLLECTION_NAME}`);
      const items = await response.json();

      return items;
    } catch (error) {
      return formatError(error);
    }
  },

  async deleteItem({ id, title }) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${ITEMS_COLLECTION_NAME}/${id}`, {
        method: "DELETE",
      });

      if (response.status === 404) {
        throw new Error(`Element ${title} no longer exists.`);
      }

      const deletedItem = await response.json();

      return deletedItem;
    } catch (error) {
      return formatError(error);
    }
  },

  async createItem(itemData) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${ITEMS_COLLECTION_NAME}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      if (response.status === 404) {
        throw new Error(`Failed to Create new Item`);
      }
    } catch (error) {
      return formatError(error);
    }
  },

  async updateItem({ id, props }) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${ITEMS_COLLECTION_NAME}/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
      });

      if (response.status === 404) {
        throw new Error(`Failed to Update new Item`);
      }
    } catch (error) {
      return formatError(error);
    }
  },
};

export default ApiService;

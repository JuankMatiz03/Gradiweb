class ApiService {
  /**
   * fetch products from the API
   * @returns {Promise<any>} response data from the API
   * @throws will throw an error if the fetch operation fails
   */
  async fetchProducts() {
    try {
      const response = await fetch(
        'https://gradistore-spi.herokuapp.com/products/all',
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;

import './home.scss';
import ApiService from './../../services/apiService.js';

class HomeView {
  constructor() {
    this.apiService = new ApiService();
  }

  /**
   * Initialize home view by loading and rendering the HTML and fetching products
   */
  async initialize() {
    try {
      const html = await this.loadView();
      this.renderView(html);
      await this.getProducts();
    } catch (error) {
      console.error('Error initializing HomeView:', error);
    }
  }

  /**
   * Load HTML content from a remote file
   * @returns {Promise<string>} HTML content as a string
   * @throws {Error} If the fetch operation fails
   */
  async loadView() {
    const response = await fetch('./home.html');
    if (!response.ok) {
      throw new Error(`Failed to load home.html file, status: ${response.status}`);
    }
    return await response.text();
  }

  /**
   * Render the HTML content in the DOM
   * @param {string} html - The HTML content to render
   */
  renderView(html) {
    const appSection = document.getElementById('app');
    if (appSection) {
      appSection.innerHTML = html;
    } else {
      console.error('App container not found');
    }
  }

  /**
   * Fetch products from the API and handle them
   */
  async getProducts() {
    try {
      const products = await this.apiService.fetchProducts();
      this.handleProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  /**
   * Handle the fetched products
   * @param {Array} products - Array of product objects
   */
  handleProducts(products) {
    console.log('Products:', products);
  }
}

export default HomeView;

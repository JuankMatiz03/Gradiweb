import './home.scss';
import ApiService from './../../services/apiService.js';
import { loadComponent } from './../../utils/helpers.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

class HomeView {
  constructor() {
    this.apiService = new ApiService();
  }

  /**
   * initialize home view and rendering the HTML and fetching products
   */
  async initialize() {
    try {
      await this.renderView();
      await this.renderCarouselComponent();
    } catch (error) {
      console.error('Error initializing HomeView:', error);
    }
  }

  /**
   * render view page home
   */
  async renderView() {
    const template = await loadComponent('./home.html');
    const section = 'app';
    const appSection = document.getElementById(section);
    if (appSection) {
      appSection.innerHTML = template;
    } else {
      console.error('App container not found');
    }
  }

  /**
   * Initialize Swiper for the carousel component
   * @param {Array} products - Array of product objects
   */
  async renderCarouselComponent() {
    // Ensure DOM is updated before initializing Swiper
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: 'auto',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        this.htmlCarousel();
      }, 0); // Use setTimeout to ensure DOM is updated
    });
  }

  /**
   * Add carousel slides dynamically
   */
  htmlCarousel() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let i = 0; i < 10; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
        <div class="card">
          <!-- <img src="imagen${i + 1}.jpg" class="card-img-top" alt="Imagen del Producto ${i + 1}"> -->
          <div class="card-body">
            <h5 class="card-title">Producto ${i + 1}</h5>
            <p class="card-text">Descripción breve del Producto ${i + 1}.</p>
          </div>
        </div>
      `;
      swiperWrapper.appendChild(slide);
    }
  }

  /**
   * fetch products from the API and handle them
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
   * handle the fetched products and call renderCarouselComponent
   * @param {Array} products - array of product objects
   */
  handleProducts(products) {
    this.renderCarouselComponent(products);
  }
}

export default HomeView;

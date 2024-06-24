import HomeView from './views/home/home.js';

/**
 * function to initialize the application
 */
async function initApp() {
  try {
    const homeView = new HomeView();
    await homeView.initialize();
  } catch (error) {
    console.error('Error initializing the application:', error);
  }
}

document.addEventListener('DOMContentLoaded', initApp);

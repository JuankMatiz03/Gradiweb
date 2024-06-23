import HomeView from './views/home/home.js';

/**
 * Function to initialize the application by loading the home view
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

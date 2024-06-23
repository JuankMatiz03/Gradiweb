import HomeView from './views/home/home.js';

const APP_CONTAINER_ID = 'app';

/**
 * function for initApp, loading home view
 */
async function initApp() {
  try {
    const homeView = new HomeView();
    const html = await homeView.initializeView();
    renderView(html);
  } catch (error) {
		throw error;
  }
}

/**
 * render view in container ID
 * @param {*} html html to render
 */
function renderView(html) {
  const appSection = document.getElementById(APP_CONTAINER_ID);
  appSection.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', initApp);

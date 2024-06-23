import './home.scss';

class HomeView {

  /**
   * method to load HTML content from a remote file
   * @returns file home
   */
  async loadView() {
    try {
      const response = await fetch('./home.html');
      if (!response.ok) {
        throw new Error('Failed to load home.html file');
      }
      return await response.text();
    } catch (error) {
      throw new Error(`Error loading Home view: ${error.message}`);
    }
  }

  /**
   * method to initialize the view by loading the HTML
   * @returns html home
   */
  async initializeView() {
    try {
      const html = await this.loadView();
      return html;
    } catch (error) {
      throw error;
    }
  }
}

export default HomeView;

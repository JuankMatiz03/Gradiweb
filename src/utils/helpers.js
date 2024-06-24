/**
 * load HTML content from a remote file
 * @param {string} url - URL archive to charger
 * @returns {Promise<string>} Content html in a string template
 */
export async function loadComponent(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}, status: ${response.status}`);
  }

  return await response.text();
}

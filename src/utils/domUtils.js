/**
 * transform template string to template document DOM
 * @param {string} template - html template string
 * @returns {Document} document for the DOM
 */
export function transformArchiveToDOMElement(template) {
  const htmlText = template;
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlText, 'text/html');
  return document;
}

/**
 * Convert DOM document to HTML string
 * @param {Document} doc - DOM document to convert
 * @returns {string} HTML string representation of the document
 */
export function convertDOMToHTMLString(doc) {
  if (!doc || !(doc instanceof Document)) {
    console.error('Invalid document provided.');
    return '';
  }

  const serializer = new XMLSerializer();
  const htmlString = serializer.serializeToString(doc);

  return htmlString;
}

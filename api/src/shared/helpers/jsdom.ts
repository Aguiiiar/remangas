import { JSDOM } from 'jsdom';

export class JSDOMHelper {
  private dom: JSDOM;
  private document: Document;

  constructor(html: string) {
    this.dom = new JSDOM(html);
    this.document = this.dom.window.document;
  }

  getElement(selector: string): Element | null {
    return this.document.querySelector(selector);
  }

  getAllElements(selector: string): NodeListOf<Element> {
    return this.document.querySelectorAll(selector);
  }

  getElementText(selector: string): string | null {
    const element = this.getElement(selector);
    return element ? element.textContent : null;
  }

  getAttribute(selector: string, attributeName: string): string | null {
    const element = this.getElement(selector);
    return element ? element.getAttribute(attributeName) : null;
  }
}

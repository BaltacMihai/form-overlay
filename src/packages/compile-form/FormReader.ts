import IFormReader from './FormReader'
import { ATTRIBUTES } from './utils/attributes'
import isHTMLDocument from './utils/isHTMLDocs'
import { TAGS } from './utils/tags'

export default class FormReader implements IFormReader {
  private document: Document

  /**
   * Constructs a new FormReader instance.
   * @param {string} _body - The HTML content to parse.
   * @throws {Error} Throws an error if the provided HTML content is invalid.
   */
  constructor(_body: string) {
    if (!isHTMLDocument(_body)) throw new Error('Invalid HTML content')
    this.document = new DOMParser().parseFromString(_body, 'text/html')
  }

  private _getHTMLElement(_tagName: string): HTMLCollectionOf<Element> {
    return this.document.getElementsByTagName(_tagName)
  }

  /**
   * Retrieves the action attribute value of the first form element found in the HTML content.
   * @returns {string|null} The action attribute value, or null if no form element or a valid action is found.
   */
  getAction(): string | null {
    const _form = this._getHTMLElement(TAGS.FORM)

    const _forms: Element[] = Array.from(_form)

    if (_forms.length === 0) return null

    if (!/\/formResponse$/.test(_forms[0].getAttribute('action') || '')) return null

    return _forms[0].getAttribute(ATTRIBUTES.ACTION) || null
  }

  /**
   * Retrieves the names of input elements that include the substring "entry" in their name attribute.
   * @returns {(string|null)[]|null} An array of input names, or null if no input elements or matching names are found.
   */
  getInputsName(): (string | null)[] | null {
    const _inputsElements = this._getHTMLElement(TAGS.INPUT)

    const _inputs: Element[] = Array.from(_inputsElements)

    if (_inputs.length === 0) return null

    const _inputNames = _inputs
      .filter((_input) => {
        const _attributeName: string | null = _input.getAttribute(ATTRIBUTES.NAME)
        return _attributeName && _attributeName.includes('entry')
      })
      .map((_input) => _input.getAttribute(ATTRIBUTES.NAME))

    if (_inputNames.length === 0) return []

    return _inputNames
  }

  compileForm(): string {
    if (!(this.getAction() && this.getInputsName())) {
      return ''
    }

    return `<form action="${this.getAction()}" method="post" target="hidden_iframe" onsubmit="submitted=true;" >
      ${this.getInputsName()
        ?.map((input, index) => {
          const _name = `{{Label_${index + 1}}}`
          return `
          <label>${_name}</label>
          <input type="text" name="${input}" placeholder = "${_name}" />
          `
        })
        .join('')}
      </form>`
  }
}

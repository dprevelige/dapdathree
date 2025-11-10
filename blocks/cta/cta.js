import {
    div, a, span, img, video, source, button,
    h1,
  } from '../../scripts/dom-helpers.js';
  import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log("cta", block);

    const properties = readBlockConfig(block);
    const rteElementTag = Array.from(block.querySelectorAll('p'))
    .find((el) => el.textContent.trim() === 'keyhere');
    const rteElement = rteElementTag?.parentElement?.nextElementSibling;
    const rteContent = rteElement?.querySelector('p')?.innerHTML;
    console.log("rteContent", rteContent);
    console.log("properties", properties);

}
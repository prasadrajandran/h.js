import type { ElementRef } from '../h';
/**
 * Ref directive type generator.
 */
export type RefDirective<NODE_REFS extends {
    [P in keyof NODE_REFS]: NODE_REFS[P];
}> = {
    [P in keyof NODE_REFS]: ElementRef<NODE_REFS[P]>;
};
/**
 * Create a reference to an element.
 *
 * Example:
 * const tpl = html`
 * 	 <form>
 *     <div>
 *       <label>Name:</label>
 *       <input type="text">
 *     </div>
 *     <div>
 *       <button type="submit" ${$ref('submitBtn')}>Submit</button>
 *     </div>
 *   </form>
 * `;
 * tpl.submitBtn.node.click();
 * tpl.submitBtn.attrMap({ disable: true });
 */
export declare const $ref: (args_0: string) => {
    id: string;
    type: string;
    callback: import("../helpers/create-template-directive").TemplateDirectiveCallback<[string], HTMLElement, import("../h").ParsedTemplate>;
    args: [string];
};

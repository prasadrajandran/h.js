import type { ParsedTemplate } from '../h';
import { createNodeTemplateDirective } from '../helpers/create-template-directive';

/**
 * Merge directive options.
 * @internal
 */
type MergeOptions = {
  /**
   * Merge template callback expressions? The default is false.
   */
  callbacks?: boolean;
  /**
   * Merge template directive properties? The default is true.
   */
  directives?: boolean;
};

/**
 * Merge directive type generator.
 */
export type MergeDirective<
  M_TEMPLATE extends { [P in keyof M_TEMPLATE]: ParsedTemplate },
> = M_TEMPLATE;

/**
 * Combines all properties of another parsed template into this parsed template.
 *
 * ! Note: If there is a property collision, the template parser will generate !
 * ! an exception.                                                             !
 *
 * Example:
 *
 * const Input = (name, label) => html`
 *   <div>
 *     <label>${label}</label>
 *     <input type="text" ${{ name }} ${$ref(name)}>
 *   </div>
 * `;
 *
 * const tpl = html`
 *   <form>
 *     ${Input('firstName', 'First name')}
 *     ${Input('lastName', 'Last name')}
 *     <button type="submit" ${$ref('submitBtn')}>Submit</button>
 *   </form>
 * `;
 *
 * tpl.firstName.node.value = 'John';
 * tpl.lastName.node.value = 'Smith';
 * tpl.submitBtn.node.click();
 */
export const $merge = createNodeTemplateDirective<
  [ParsedTemplate, MergeOptions?]
>((template, instances) => {
  instances.forEach(({ node, args: [templateToMerge, opts = {}] }) => {
    node.replaceWith(templateToMerge.$.node);

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      $,
      ...directives
    } = Object.getOwnPropertyDescriptors(templateToMerge);

    if (opts.directives !== false) {
      Object.defineProperties(template, directives);
    }

    if (opts.callbacks === true) {
      templateToMerge.$.callbacks.forEach((callback) => {
        template.$.callbacks.add(callback);
      });
    }
  });
});

/**
 * Combines all properties of another parsed template into this parsed template.
 *
 * This directive will merge everything from the template (including its
 * template callback expressions).
 *
 * ! Note: If there is a property collision, the template parser will generate !
 * ! an exception.                                                             !
 *
 * Example:
 *
 * const Input = (name, label) => html`
 *   <div>
 *     <label>${label}</label>
 *     <input type="text" ${{ name }} ${$ref(name)}>
 *   </div>
 * `;
 *
 * const tpl = html`
 *   <form>
 *     ${Input('firstName', 'First name')}
 *     ${Input('lastName', 'Last name')}
 *     <button type="submit" ${$ref('submitBtn')}>Submit</button>
 *   </form>
 * `;
 *
 * tpl.firstName.node.value = 'John';
 * tpl.lastName.node.value = 'Smith';
 * tpl.submitBtn.node.click();
 */
export const $mergeAll = (template: ParsedTemplate) =>
  $merge(template, { callbacks: true, directives: true });

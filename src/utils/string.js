export default {
  /**
   * Converts a string to kebab case.
   *
   * @example toKebabCase(camelCase) // 'camel-case'
   */
  toKebabCase: str => str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-'),

  /**
   * Converts a string to snake case.
   *
   * @example toSnakeCase(camelCase) // 'camel_case'
   */
  toSnakeCase: str => str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_'),

  /**
   * Converts a string to title case.
   *
   * @example toTitleCase('camelCase') // 'Camel Case'
   * @example toTitleCase('snake-case') // 'Snake Case'
   */
  toTitleCase: str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' '),
};

import { map } from 'lodash';

export function unpackAutocomplete(response) {
  return map(response.suggestions, (suggestion) => ({ value: suggestion, label: suggestion }));
}

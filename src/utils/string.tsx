import { Indexable } from "../types/common";

export const jsonPretty = (obj: Indexable) => JSON.stringify(obj, null, 2);

export const camelize = (str: string) => (
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (
    index === 0
      ? word.toLowerCase()
      : word.toUpperCase()
  )).replace(/\s+/g, '')
);
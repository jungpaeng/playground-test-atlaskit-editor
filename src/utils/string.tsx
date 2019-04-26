import { Indexable } from "../types/common";

export const jsonPretty = (obj: Indexable) => JSON.stringify(obj, null, 2);
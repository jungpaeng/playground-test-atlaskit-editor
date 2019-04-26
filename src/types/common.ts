interface StringIndexable {
  [key: string]: any;
}

interface NumberIndexable {
  [key: number]: any;
}

export type Indexable = StringIndexable & NumberIndexable;
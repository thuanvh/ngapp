export class Hero {
  id: number;
  name: string;
  content: Sentence[];
}
export class Sentence{
  id: number;
  content: string[];
}
export class Kj{
  kj: string;
  detail: KjDetail;
  kjstrokegif: string;
}
export class KjDetail{
  constituent: string;
  hanviet: string;
  kanji: string;
  keyword: string;
  kunYomi: string;
  myStory: string;
  onYomi: string;
  readingExamples: string;
  strokeDiagram: string;
  words: string[][];
}
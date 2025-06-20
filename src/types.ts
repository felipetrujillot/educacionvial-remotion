export interface Alternative {
  texto: string;
  correcta: boolean;
}

export interface QuizData {
  introText: string;
  titleText: string;
  alternativas: Alternative[];
}

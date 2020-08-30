export interface OptionModel{
    text: string;
    isCorrect: boolean;
}
export interface QuestionModel{
    questionNo: number;
    questionText: string;
    options: Array<OptionModel>;
    explain: string;
}


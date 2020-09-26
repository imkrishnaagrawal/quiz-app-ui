import * as data1 from './assets/set (1).json';
import * as data2 from './assets/set (2).json';
import * as data3 from './assets/set (3).json';
import * as data4 from './assets/set (4).json';
import * as data5 from './assets/set (5).json';
import * as data6 from './assets/set (6).json';

function initState(){
  return [
    ...Array.from(data1.values()),
    ...Array.from(data2.values()),
    ...Array.from(data3.values()),
    ...Array.from(data4.values()),
    ...Array.from(data5.values()),
    ...Array.from(data6.values()),
    ]
}

export const state = { questions: initState() };


// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394970/result/373017870#overview
// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394972/result/379191070#overview
// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394976/result/385165794#overview
// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394974/result/372561892#overview
// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394978/result/385181362#overview
// https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/learn/quiz/4394980/result/385182596#overview

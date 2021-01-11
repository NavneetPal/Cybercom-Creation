let johnScore=[89,95,103];
let mikeScore=[89,95,103];
let maryScore=[89,97,103];

let johnAverage,mikeAverage,maryAverage;

johnAverage=(johnScore[0]+johnScore[1]+johnScore[2])/3;
mikeAverage=(mikeScore[0]+mikeScore[1]+mikeScore[2])/3;
maryAverage=(maryScore[0]+maryScore[1]+maryScore[2])/3;

if(johnAverage>mikeAverage && johnAverage>maryAverage)
   console.log(`John wins the match and the average score is: ${johnAverage}`);
else if(mikeAverage>johnAverage && mikeAverage>maryAverage)
   console.log(`Mike wins the match and the average score is: ${mikeAverage}`);
else if(maryAverage>johnAverage && maryAverage>mikeAverage)
   console.log(`Mary wins the match and the average score is: ${maryAverage}`);
else
 console.log(`Either any two avgScore or all the three avgScore are equal`);
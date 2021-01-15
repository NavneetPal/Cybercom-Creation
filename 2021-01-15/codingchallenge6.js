//Recursive approach to find fiboannci of a particular position
const fibonacci=num=> (num<=1)?num:fibonacci(num-1)+fibonacci(num-2);

let n=10 //The number upto wwhich you want the fibonacci series
for(let i=0;i<n;i++){
    console.log(fibonacci(i));
}
/* The output will be
0
1 
1 
2 
3 
5 
8 
13
21
34 */
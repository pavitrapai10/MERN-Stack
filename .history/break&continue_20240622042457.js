//break is used to stop the loop for the condition where break keyword is used.
//continue is used to skip the current iteration and move to the next iteration.
//in js i++ and i=i+1 are almost same slight difference, and its ok 
for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i); // will print 1, 2, 4, 5
}
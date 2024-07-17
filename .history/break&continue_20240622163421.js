//break is used to stop the loop for the condition where break keyword is used.
//continue is used to skip the current iteration and move to the next iteration.
//in js i++ and i=i+1 are almost same slight difference, and its ok to use or skip ; at the end
for(let i=1;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i); // will print 1,2
}

for(let i=1;i<=5;i++){
    if(i==3){
        continue
    }
    console.log(i); // will print 1, 2, 4, 5
}

for(let i=1; i<=5;i++){
    console.log(i)
    break    //1 after that break so loop stopped
}

for(let i=1; i<=5;i++){
    console.log(i)
    continue   //12345 (anyways without continue also 12345 will print)
}

let i =1
while(i<=5){
    console.log(i)
    i++
    if(i==3)
}
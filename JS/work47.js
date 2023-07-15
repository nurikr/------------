let a=[5,98,57,3,0,2,4,5,1,75,63,21,32,76,91,10,33,54,65]
let b=[]
for(let i = 0;i<a.length;i++){
    if(a[i]%2==0){
        b.push(a[i])
    }
}

console.log(b)
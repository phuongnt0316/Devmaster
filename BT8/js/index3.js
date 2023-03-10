var arr=[1,2,3,'3a'];
function summArr(arr){
    sum=0;
    for( var i=0;i<arr.length;i++){
        sum+=arr[i];

    }
    return sum;
}
console.log(summArr(arr));
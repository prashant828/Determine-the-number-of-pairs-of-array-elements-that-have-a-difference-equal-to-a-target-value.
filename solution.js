var checkPairs = (arr, targetValue) => {
  var pairs = 0;
  for (var i =0; i < arr.length; i++){
    for(var j=0; j < arr.length; j++ ){
      if(arr[j] < arr[i]){
        var value = arr[i]-arr[j];
        if(value === targetValue){
          pairs +=1;
        }
      }
    }
  }
  console.log(pairs)
}

checkPairs([2,2,3,4,7,6], 2);

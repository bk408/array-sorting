/* let data = [40,30,12,25];

for( i=0; i<data.length; i++){
    for( j=0; j<data.length; j++){
        console.log(data)
        if(data[j]>data[j+1]){
            let temp = data[j]
            data[j]= data[j+1]
            data[j+1]= temp
        }
    }
}  */

let data = [7, 14, 2, 56, 26, 69, 85, 19, 212, 999, 0];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    console.log(data);
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

// 1.Declare an array of 3 tourist destinations
// 2.Add a new tourist destination to your tourist array
// 3.Add two more to your array
// 4.Remove the last tourist destination you have added
// 5.display the final array as output


let array= ['Dinajpur','Rangpure', 'saidpure'];
console.log(array);
array[3]='Dimla';
console.log(array);
array.push('Domar'); //array[4]='Domar'  ;
array.push('Manikgonj'); //array[5]='Manikgonj';
console.log(array);
//delete array[5];
array.pop();
console.log(array);
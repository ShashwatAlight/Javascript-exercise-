//  find perfect square in array

 var arr = [2, 4, 5, 20, 16];
  
 for (let  i = 0;  i <  arr.length;  i++) {
     const  b = Math.sqrt( arr[ i]);
       
       if (  Number.isInteger(b) ==true) {
        var e = arr[i];
        console.log(e); 
           
       }
      
     
 }
  
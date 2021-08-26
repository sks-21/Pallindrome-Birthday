let dateEl = document.querySelector('#input-bdate');
let output = document.querySelector('#output');
let btn = document.querySelector('button');

function checkPallindrome( str){

    let left, right, l, flag=1;
    l = str.length ;
    left =0 ; 
    right = l-1 ;
   while(left <= right){

       if(str[left] === str[right])
       {
           left++ ;
           right --;
       }

       else
       {
           flag=0 ; 
           break;
       }
   }

   if(!flag)
   return 0 ;

   else 
   return 1 ;
}

btn.addEventListener('click', ()=>{

    let date = dateEl.value ;
    let year = date.substr(0,4);
    let month = date.substr(5,2);
    let day= date.substr(8,2);

    console.log(year);
    console.log(month);
    console.log(day);

    let str1 = day + month + year ;
    let str2 = year + month + day ;
    let str3 = day + month + year[2] + year[3] ;
    let str4 = year[2] + year[3] + day + month  ;

    let val1 = checkPallindrome(str1);
    let val2 = checkPallindrome(str2);
    let val3 = checkPallindrome(str3);
    let val4 = checkPallindrome(str4);

    if(val1 || val2 || val3 || val4){
        msg="Congratulations!, your birthday is pallindrome"
        console.log(msg);
    }

    else{
        console.log("not a pallindrome date ")
        // let ans = findNearestPallindrome()
    }

    dateEl.value ="";
});



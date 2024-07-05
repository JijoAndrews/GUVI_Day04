
//------------------------------------------------1.print odd elements from-------------------------------------------------\\

var numbers=[1,2,2,3,5,6,6,7];//input data
//-----output: [1,3,5,7];

var oddnumber=function(arr){// anonymous  function
    if(arr.length===0)
    return "Empty";
    
    var returnodd=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            returnodd.push(arr[i]);
        }
    }
    return returnodd;
};

console.log( "the odd numbers from input:",oddnumber(numbers));


var oddnumber2= (function(arr){// IIFE function

    if(arr.length===0)    
    return  console.log("given input data is empty");
        
    let returnedodd=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            returnedodd.push(arr[i]);
        }
    }
    return returnedodd;
})(numbers);

console.log("the odd numbers in given input:",oddnumber2);

//------------------------------------------------2.convert array of strings to capital titles-------------------------------------------------\\
var titles=["hello","world","This","is","a","test"];//input data
//-----output:  ['Hello', 'World', 'This', 'Is', 'A', 'Test'];


var capitalletters=function(arr)// anonymous  function
{
    if(arr.length===0)
    return "Empty";
    
    var frstletter="";
    var titlecopy=arr.slice();

    for(var i=0;i<titlecopy.length;i++)
    {
        frstletter=titlecopy[i][0];

        if(frstletter!==undefined && frstletter!==frstletter.toUpperCase())
        {
            titlecopy[i]=titlecopy[i].replace(frstletter,frstletter.toUpperCase());
        }
    }
    return titlecopy;
};

console.log("the capital strings:",capitalletters(titles));


var capitalletters2= (function(arr){// IIFE function

    if(arr.length===0)    
    return  console.log("given input data is empty");
    
    let frstletter="";
    let titlecopy=arr.slice();

    for(let i=0;i<titlecopy.length;i++)
    {
        frstletter=titlecopy[i][0];
        if(frstletter!==undefined && frstletter!==frstletter.toUpperCase())
        {
            titlecopy[i]=titlecopy[i].replace(frstletter,frstletter.toUpperCase());
        }
    }
    return titlecopy;
})(titles);

console.log("the capital strings:",capitalletters2);

//------------------------------------------------3.sum of all numbers in array-------------------------------------------------\\
var numberstosum=[0,1,1,1];
//-----output: the sum is:3

var sum=function(arr)// anonymous  function
{
    if(arr.length===0)
    return "the input array is empty";

    var sumval=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]!==undefined)
        sumval+=arr[i];
    }
    return sumval;
}
  console.log("the sum value:",sum(numberstosum));


var value=(function(arr){// IIFE function

    if(arr.length===0)    
    return  console.log("given input data is empty");
    
    let sumval=0;
    
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]!==undefined)
            sumval+=arr[i];
        }
    
    return sumval;
})(numberstosum);

console.log("the sum value:",value);


//------------------------------------------------4.finding prime numbers in given array-------------------------------------------------\\
var inputdata=[1,1,1,1,1,3,2];//input
// the output:[3,2];

var allprime=function(arr)// anonymous function
{
    if(arr.length===0)
    return "the input array is empty";

    var sumval=0;
    var primenumbers=[];

    for(var i=0;i<arr.length;i++)
    {
        for(var j=1;j<=arr[i];j++)
        {
            if(arr[i]%j==0)
            {
                sumval++;
            }

            if(sumval>2)
            {
                break;
            }

        }

        if(sumval==2)
        {
            primenumbers.push(arr[i]);
        }

        sumval=0;

    }
    return primenumbers;
}

var allprime2 =(function(arr)// IIFE function
{
    if(arr.length===0)
        return "the input array is empty";
    
        var sumval=0;
        var primenumbers=[];
    
        for(var i=0;i<arr.length;i++)
        {
            for(var j=1;j<=arr[i];j++)
            {
                if(arr[i]%j==0)
                {
                    sumval++;
                }
    
                if(sumval>2)
                {
                    break;
                }
    
            }
    
            if(sumval==2)
            {
                primenumbers.push(arr[i]);
            }
    
            sumval=0;
    
        }
        return primenumbers;

})(inputdata);

console.log(allprime(inputdata),allprime2);

//------------------------------------------------5.palindrome in array-------------------------------------------------\\
var inputpalindrom=["Hello","lol",101,"000",NaN,121,1000];// input
// the output:[lol,101,000,NaN,121];

var palindormval=function(arr)//// anonymous function
{

    if(arr.length===0)
    return "the input array is empty";


    var val=[];
    var element=[];
    for(var i=0;i<arr.length;i++)
    {
      
        if(arr[i]==undefined)
        {
            continue;
        }

       element =arr[i].toString().split("").reverse().join("");

       if(arr[i].toString()===element)
        {
            val.push(arr[i]);
        }

    }


    if(val.length===0)
    {
        return "the is no palindrome from the given input";
    }else
    {
        return `The palindrome present in array:${val}`;
    }

}
console.log(palindormval(inputpalindrom));


var palindormval2=(function(arr)// IIFE function
{

    if(arr.length===0)
    return "the input array is empty";

    let val=[];
    let element=[];

    for(let i=0;i<arr.length;i++)
    {  
        if(arr[i]==undefined)
        {
            continue;
        }

       element =arr[i].toString().split("").reverse().join("");

       if(arr[i].toString()===element)
        {
            val.push(arr[i]);
        }

    }


    if(val.length===0)
    {
        return "the is no palindrome from the given input";
    }else
    {
        return `The palindrome present in array:${val}`;
    }

})(inputpalindrom);

console.log(palindormval2);

//------------------------------------------------6.madien from two sorted arrays-------------------------------------------------\\

var inputarry=[1, 12, 15, 26, 38];//input array 1
var inputarry2=[2, 13, 17, 30, 45];//input array 2
//output--> maiden for the two sorted arrays for above input arrays is 16

var findinmaiden=function(arr,arr1)//// anonymous function
{

    if(arr.length+arr1.length<2)
    {
        return "the input array is not equal";
    }else
    {
        var sortedarry=(arr.concat(arr1).sort(function(a,b){return a - b}));//normal sort method dosent work for number inputs since the sort method sorts based on string unicodes
        console.log(sortedarry);
        var maidenindex =(sortedarry.length-2)/2;
        var maidenval=(sortedarry[maidenindex] + sortedarry[maidenindex+1])/2;
        return maidenval.toFixed(1);
    }


}
console.log(findinmaiden(inputarry,inputarry2));


var findinmaiden2=(function(arr,arr1)//// IIFE function
{

    if(arr.length+arr1.length<2)
    {
        return "the input array is not equal";
    }else
    {
        let sortedarry=(arr.concat(arr1).sort(function(a,b){return a - b}));//normal sort method dosent work for number inputs since the sort method sorts based on string unicodes
        console.log(sortedarry);
        let maidenindex =(sortedarry.length-2)/2;
        let maidenval=(sortedarry[maidenindex] + sortedarry[maidenindex+1])/2;
        return maidenval.toFixed(1);
    }


})(inputarry,inputarry2);

console.log(findinmaiden2);

//------------------------------------------------7.remove duplicates from array-------------------------------------------------\\
var inputarrayelements=[1,2,3,3,1,2,1,3,4,5,6,6,0,-1,22,0,-1];
//output--> array after duplicates removed is [1, 2, 3, 4, 5, 6, 0, -1, 22]

var removelements = function(arr)//// anonymous function
{
    if(arr.length==0)
    return "input array is empty";

    var elementobj={};
    var removedelement=[];
    for(var i=0;i<arr.length;i++)
    {
        if(elementobj[arr[i]])
        {
            elementobj[arr[i]]+=1;
        }else
        {
            elementobj[arr[i]]=1;
            removedelement.push(arr[i]);
        }

    }

    return removedelement;
}

console.log(removelements(inputarrayelements));


var removelements2 = (function(arr)// IIFE function
{
    if(arr.length==0)
    return "input array is empty";

    let elementobj={};
    let removedelement=[];
    for(let i=0;i<arr.length;i++)
    {
        if(elementobj[arr[i]])
        {
            elementobj[arr[i]]+=1;
        }else
        {
            elementobj[arr[i]]=1;
            removedelement.push(arr[i]);
        }
    }

    return removedelement;
})(inputarrayelements);

console.log(removelements2);

//------------------------------------------------8.rotate array "n" times-------------------------------------------------\\
var elementstorotate=[1,2,3,4,5];
//output-->>>----the rotatd array:[2,3,4,5,1]---------------------------------------------------------------\\
var rotatedarray = function(arr,n)//// anonymous function
{
    if(arr.length==0)
    return "input array is empty";

    var lastval=0;
    var rotarry=arr.slice();
    console.log(`the array before rotation:${rotarry}`);

    for(var i=0;i<n;i++)
    {
       lastval=rotarry[rotarry.length-1];
       rotarry.unshift(lastval);
       rotarry.pop();
       console.log(`the array after ${i+1}, rotation:${rotarry}`);

    }
    return rotarry;
}

console.log(`the final rotated array :${rotatedarray(elementstorotate,4)},the intial array:${elementstorotate}`);



var rotatedarray2 = (function(arr,n)// IIFE function
{
    if(arr.length==0)
        return "input array is empty";
    
        let lastval=0;
        let rotarry=arr.slice();
        console.log(`the array before rotation:${rotarry}`);

        for(let i=0;i<n;i++)
        {
           lastval=rotarry[rotarry.length-1];
           rotarry.unshift(lastval);
           rotarry.pop();
           console.log(`the array after ${i+1}, rotation:${rotarry}`);
        }
        return rotarry;
})(elementstorotate,4);

console.log(`the final rotated array:${rotatedarray2},,the intial array:${elementstorotate}`);

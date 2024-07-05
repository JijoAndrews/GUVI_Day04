//------------------------------------------------1.print odd elements from-------------------------------------------------\\
var numbers=[1,2,2,3,5,6,6,7];//input data
//-----output: [1,3,5,7];

var oddnumber=(arr)=>{// arrow  function
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

//------------------------------------------------2.convert array of strings to capital titles-------------------------------------------------\\
var titles=["hello","world","This","is","a","test"];//input data
//-----output:  ['Hello', 'World', 'This', 'Is', 'A', 'Test'];

var capitalletters=(arr)=>// arrow  function
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

//------------------------------------------------3.sum of all numbers in array-------------------------------------------------\\
var numberstosum=[0,1,1,1];
//-----output: the sum is:3

var sum=(arr)=>// arrow  function
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

//------------------------------------------------4.finding prime numbers in given array-------------------------------------------------\\
var inputdata=[1,1,1,1,1,3,2];//input
// the output:[3,2];

var allprime=(arr)=>// arrow function
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
console.log(allprime(inputdata));


//------------------------------------------------5.palindrome in array-------------------------------------------------\\
var inputpalindrom=["Hello","lol",101,"000",NaN,121,1000];// input
// the output:[lol,101,000,NaN,121];

var palindormval=(arr)=>//// arrow function
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
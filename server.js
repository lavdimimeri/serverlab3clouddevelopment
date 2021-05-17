var express = require('express')
var app = express()



var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;
 str="";
 string="";
 var resultStr = "";
 var result = new Array(MAX_LENGTH_WORD);
 myArray=new Array(11);
 number=0;
 secondArray=new Array(11);
 thirdArray=new Array(11);

app.post('/getWordLengthFrequency', function (req, res) {
	console.log("post requested received with data: ");
  
    var data = req.body.data;
    str=data;
    splitString(str);
    
    
    //console.log(myArray);
  //  console.log(number);
    
    console.log("Data Received from the client: " + data);
    
     
    
    
    const WordsContaining1Letter=secondArray.filter(i=>i===1).length;
    const WordsContaining2Letter=secondArray.filter(i=>i===2).length;
    const WordsContaining3Letter=secondArray.filter(i=>i===3).length;
    const WordsContaining4Letter=secondArray.filter(i=>i===4).length;
    const WordsContaining5Letter=secondArray.filter(i=>i===5).length;
    const WordsContaining6Letter=secondArray.filter(i=>i===6).length;
    const WordsContaining7Letter=secondArray.filter(i=>i===7).length;
    const WordsContaining8Letter=secondArray.filter(i=>i===8).length;
    const WordsContaining9Letter=secondArray.filter(i=>i===9).length;
    const WordsContaining10Letter=secondArray.filter(i=>i===10).length;
   

    //console.log('Words Containing 1 letters ' + WordsContaining1Letter);
    //console.log('Words Containing 2 letters ' + WordsContaining2Letter);
    //console.log('Words Containing 3 letters ' + WordsContaining3Letter);
    //console.log('Words Containing 4 letters ' + WordsContaining4Letter);
    //console.log('Words Containing 5 letters ' + WordsContaining5Letter);
    //console.log('Words Containing 6 letters ' + WordsContaining6Letter);
    //console.log('Words Containing 7 letters ' + WordsContaining7Letter);
    //console.log('Words Containing 8 letters ' + WordsContaining8Letter);
    //console.log('Words Containing 9 letters ' + WordsContaining9Letter);
    //console.log('Words Containing 10 letters ' + WordsContaining10Letter);

    thirdArray[0]=WordsContaining1Letter;
    thirdArray[1]=WordsContaining2Letter;
    thirdArray[2]=WordsContaining3Letter;
    thirdArray[3]=WordsContaining4Letter;
    thirdArray[4]=WordsContaining5Letter;
    thirdArray[5]=WordsContaining6Letter;
    thirdArray[6]=WordsContaining7Letter;
    thirdArray[7]=WordsContaining8Letter;
    thirdArray[8]=WordsContaining9Letter;
    thirdArray[9]=WordsContaining10Letter;
  //  console.log("This is third ARRAY: " + thirdArray);

   
     result=thirdArray;
    
   // result.fill(0); 
    
  

    for (var i = 0; i < MAX_LENGTH_WORD; i++) {
        resultStr = resultStr + result[i] + " ";
        
    }
  
    console.log("sending response");
    console.log("Data sent to the client: " + resultStr);

    res.send(resultStr);
    res.end();
    
    //The lines of code here return the arrays and different variables to the initial state,
    //kind of playing the role of "threads".
    myArray.splice(0, myArray.length);
    secondArray.splice(0, secondArray.length);
    thirdArray.splice(0, thirdArray.length);
    result.splice(0, result.length);
    number=0;
    resultStr="";
    
    
 
})


function splitString(str){
    string=str.split(" ");
    
        myArray=string;
        

        for(var b=0;b<string.length;b++){
            
          number=myArray[b].length;
           secondArray.push(number);
            //console.log(number);
           // console.log(secondArray);
            
        }
      //  console.log(secondArray);
       
        
        

    

}



app.listen(SERVER_PORT, () => {
	console.log("Server listening on port: " + SERVER_PORT);
  
})

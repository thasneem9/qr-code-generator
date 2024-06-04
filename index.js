import inquirer from 'inquirer';
//var qr = require('qr-image');
import qr from 'qr-image'


import fs from 'fs'
inquirer
  .prompt([
    /* Pass your questions in here                                                       >> *docs:*message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).*/
    {message:"Enter your URL: ", name:"entered_url"}
  ])
  .then((answers) => {
    
    // Use user feedback for... whatever!!
    //1----- console.log(answers);.....to check
    var url = answers.entered_url


    //qr-docs:
    
    // 2---url-----var qr_svg = qr.image('I love QR!', { type: 'svg' }); TURNEDINTOPNG TOO not svg
    var qr_svg = qr.image(url, { type: 'png' });
    //3---fs---qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    
    var svg_string = qr.imageSync('I love QR!', { type: 'svg' });


    //---4--saving--from fsdocs---add fs. before writefilr,change data to url
    fs.writeFile('message.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })










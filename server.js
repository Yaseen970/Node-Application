const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

const questions = [{qid:1,question:'Node.js is written in',answer:'javascript',options:{a:'javascript',b:'java',c:'c++',d:'python'}},
{qid:2,question:'How modules in Node.js can be connected from one component to another ?',answer:'EXports',options:{a:'Expose',b:'Module',c:'Exports',d:'All of the above'}},
{qid:3,question:'Which of the below Which of the below modules is not a built-in module in Node.js ?',answer:'fsread',options:{a:'zlib',b:'HTTPS',c:'dgram',d:'fsread'}},
{qid:4,question:'Which of the below fs module is used to truncate a file ?',answer:'npm ls',options:{a:'fs.delete(fd)',b:'fs.remove(fd,len,callback)',c:'fs.fruct',d:'fs.ftruncate(fd, len, callback)'}},
{qid:5,question:'Which template engines can be used with Node.js ?',answer:'Jade',options:{a:'Jade',b:'vash',c:'handlebars',d:'all of the above'}},
{qid:6,question:'How do we return a path string from the given path object in Node.js ?',answer:'path.format()',options:{a:'path.get()',b:'path.set()',c:'path.format()',d:'path.return()'}},
{qid:7,question:'What is the default scope in the Node.js application ?',answer:'Local',options:{a:'Global',b:'Loca',c:'Global Function',d:'Local to Object'}},
{qid:8,question:'Which of the below method is used to return the current working directory of the process ?',answer:'cwd();',options:{a:'cwd();',b:'cmd();',c:'pwd();',d:'none of the above'}},
{qid:9,question:'Which below method is used to check whether the given path is an absolute path or not in Node.js ?',answer:'path.isAbsolute()',options:{a:'path.query()',b:'path.render()',c:'path.isAbsolute()',d:'path.Absolute()'}},
{qid:10,question:' Which method of fs module is used to close a file?',answer:'fs.close(fd, callback)',options:{a:'fs.close(fd, callback)',b:'fs.closeFile(fd, callback)',c:' fs.closePath(fd, callback)',d:'None of the above.'}},
]
app.get('/questions',(req,res)=>{
  try{
    console.log("requeste came");
    res.send({que:questions}).status(200);
  }
catch(e)
{
  res.send(e)
}
})

app.post('/submitAnswers',(req,res)=>{
  try{
  const Body = req.body
  console.log("BODY",Body);
  let score = 0;
  questions.map((quest)=>{
    if(quest.answer==req.body[quest.qid]){
      console.log('answer',req.body[quest.qid])
      return score = score+1;
    }
  })
  console.log("FINAL SCORE",score);
  res.send({score:score}).status(200);
}
catch(e){
console.log(e)
res.send(e)
}
})
let express = require('express');
let path = require('path');
let port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname,'../dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port,()=>{
  console.log('[SERVER] -- Server is running on port: ',port);
});
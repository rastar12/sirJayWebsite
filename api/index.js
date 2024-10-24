import express from 'express'
import path from 'path'

const app = express();

const __dirname=path.resolve()

app.listen(3000,()=>{
  console.log('server running on pot 3000')
} )

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });

    
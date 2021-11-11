const express = require('express')

const app =express();
app.use(express.json());

// Generate numbers as per the game
const generate = (values, line) => {
   let data = '';
   let ans = [];
   for(let i=1 ; i<=values; i++)
   {
      if(i%4 == 0 && i%7 == 0)
      {
          data += 'marcopolo'
      }
      else if(i%7 == 0)
      {
          data += 'polo'
      }
      else if(i%4 == 0)
      {
          data += 'marco'
      }
      else
      {
          data += String(i)
      }
      data += ',' 
      if(i%line == 0)
      {
        ans.push(data.substring(0 , data.length-1));
        data = '';
      }
   }
   return ans; 
}

app.get('/' , (req, res) => {
    const data = generate(30 , 10);
    res.send(data);
})

app.listen(8000, () => {
    console.log("Sever has started!")
})
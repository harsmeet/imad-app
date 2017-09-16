var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' : {
    title:'Article One|Hars',
    heading:'ARTICLE ONE',
    date:'Sep 5,2017',
    content:` <P> Hellllllllllllllllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooo</p>
            <P>
            How Are You ? 
            </p>
            <P> 
            Have A NICE DAY
            </p>
            <P>
            Good BYE! 
            </p> `
},
'article-two' :{    title:'Article Two|Hars',
    heading:'ARTICLE TWO',
    date:'Sep 10,2017',
    content:` <P> Hellllllllllllllllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooo</p>
            <P>
            How Are You ? 
            </p>
            <P> 
            Have A NICE DAY
            </p>
            <P>
            Good BYE! 
            </p> `
},
'article-three':{    title:'Article Three|Hars',
    heading:'ARTICLE THREE',
    date:'Sep 15,2017',
    content:` <P> Hellllllllllllllllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooo</p>
            <P>
            How Are You ? 
            </p>
            <P> 
            Have A NICE DAY
            </p>
            <P>
            Good BYE! 
            </p> `
},
};

function createTemplate(data){
    
    var title= data.title;
     var date= data.date;
      var heading= data.date;
       var content= data.content;
       
var htmlTemplate =`

<html>
    <head>
        <title>
            ${title}
            </title>
            <meta name="viewport" content="width=device-width ,initial-scale=1"/>
            
           <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class= "container">
                            <div>
                                <a href="/">HOME</a>
                            </div>
                            <hr/> <h3>  ${heading} </h3>
                            <div>  ${date}</div>
                            <div>
                        ${content}
                            </div>
                </div>
                </body>

</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

const fs=require('fs');

exports.requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>HomePage</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Submit</button> </form>');
        res.write('<body>');
        res.write('</html>');
       return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
       return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            fs.writeFile('new.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end(); 
            }); 
        });
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Navneet Pal</title></head>');
    res.write('<body>');
    res.write('<h1>Navneet Pal</h1>');
    res.write('<h2>Cybercom creation</h2>');
    res.write('<body>');
    res.write('</html>');
    res.end();
}


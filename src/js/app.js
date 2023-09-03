const express= require("express") //require 를쓰면 자동으로 node_modules를보기떄문에 경로지정이 불필요
const http= require("http");//node에서 http모듈을 불러옴
const { connect } = require("http2");
const app =express();
const path=require("path")//url을 만들기 쉽게? 도와주는 도구
const server =http.createServer(app);//express로 만든 app을 서버로담아 express가 http로 실행되도록만듬

const socketIO= require("socket.io")//라이브러리를 불러옴
const io= socketIO(server); //변수에 서버를 담음 이변수로 메시지를 주고 받음
app.use(express.static(path.join(__dirname,"SRC/doc")))//보여줄 폴더 지정 ,path join을 쓰는이유는 운영체제 마다 경로지정이 다르기 때문에

const PORT = process.env.PORT || 5000;


server.listen(PORT, ()=>console.log(`server is running${PORT}`))

io.on("connection",(socket)=>{
    socket.on("abc", (data)=>{
    io.emit("abc", data)//오브젝트로 받은걸 보내준다?
    })
    
})//connection이 일어나면 모든 정보를 socket에 담는다
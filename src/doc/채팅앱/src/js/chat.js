"use strict"
const socket = io();
//const nickname=document.querySelector("#nickname");
const chatlist=document.querySelector(".chatting-list");
const chatinput=document.querySelector(".chatting-input");
const sendbutton=document.querySelector(".send-button");
sendbutton.addEventListener("click",()=>{
    const param={
        name: nickname.value,
        msg:chatinput.value,
    }
    
    socket.emit("abc", param)
})
socket.on("abc",(data)=>{
    const{name, msg, time}=data;
    const item= new LiModel(name,msg,time);
    item.makeli()
})
function LiModel(name,msg,time){
    this.name=name;
    this.msg=msg;
    this.time=time;
    this.makeli=()=>{
        const li= document.createElement("li");
        const dom=` <span class="profile">
        <img class="image" src="새 폴더/캡처.PNG" alt="any">
        <span class="user">${this.name}</span>
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`
    li.innerHTML = dom;
    chatlist.appendChild(li)

    }
}







socket.emit("abc","from front")//채널이름 문자열로 보내기
socket.on("abc", (data)=>{
    console.log(data)
})
//console.log("socket") 
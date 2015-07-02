window.onload=function(){

};
var unitWidth=1050;

var wrapper=document.getElementById("wrapper");
var slideBtns=document.getElementsByClassName("slide-btn")[0];
var mylist=document.getElementById("list");
var prev=document.getElementsByClassName("prev")[0];
var post=document.getElementsByClassName("post")[0];
var timeHandle=""
//    console.log(post);

//直接定位到设置坐标
function animateTo(position){
    var left=Math.abs(parseInt(mylist.style.left));
    var position=Math.abs(position);
    animate(left-position);
}
function animate(offset){
    var time = unitWidth;
    var inteval = 10;
    var speed = offset/(time/inteval);

//        var speed=offset/10;
    console.log(speed);
//        var speed=50;
    var left=parseInt(mylist.style.left)+offset;
    var go=function(){
        if((speed<0 && parseInt(mylist.style.left)>left)||(speed>0 && parseInt(mylist.style.left)<left)){
            mylist.style.left=parseInt(mylist.style.left)+speed+"px";
            console.log(mylist.style.left);

            setTimeout(go,10);
        }else{
            changeDots();
            console.log(mylist.style.left+"out of go");

        }
    };
    go();
//        console.log(mylist.style.left+"out of go");

//        mylist.style.left=parseInt(mylist.style.left)+parseInt(offset)+"px";
}
prev.onclick=function(e){
    if(mylist.style.left=="0px"){
        animate(-unitWidth*4);

    }else{
//        mylist.style.left=parseInt(mylist.style.left)+350+"px";
        animate(unitWidth);
    }
};
post.onclick=function (){
    if(mylist.style.left=="-"+unitWidth*4+"px"){
        animate(unitWidth*4);
    }else{
        animate(-unitWidth);
    }
//        mylist.style.left=parseInt(mylist.style.left)-350+"px";

};

/*变化dots
 * */
function changeDots(){
    console.log(mylist.style.left);
    var offset=parseInt(mylist.style.left);
    var index=Math.abs(offset/unitWidth);
    console.log(index);
    if(index!=null){
        var dots=slideBtns.getElementsByTagName("a");
        for(var i=0;i<dots.length;i++){
            if(i==index){
                dots[i].className="active";
            }else{
                dots[i].className="";

            }
        }
    }
}
/*
 * 点击下方按钮切换
 *
 * */
function switchImg(){
    console.log(event);
//        console.log(event.toElement);
    var target=event.target;
    if(event.toElement.nodeName.toLowerCase()!="div"){
        var index=target.getAttribute("data-index");
        animateTo(index*unitWidth);
//        mylist.style.left="-"+index*350+"px";
        changeDots();
    }
    //        animate(index*350);/
    //        console.log(index);
    //        console.log(event);
}
/*
 * 自动播放功能
 * */
var play=function(){
    timeHandle=setInterval(function(){
        post.onclick();
    },2000);
};
play();

/*
 * 鼠标悬浮停止播放
 * */
//    $()
wrapper.onmouseover=function(){
//        cleanItimeHandle
    clearInterval(timeHandle);
};
wrapper.onmouseout=function(){
    play();
}/**
 * Created by mac on 15-7-2.
 */

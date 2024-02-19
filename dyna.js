


function build(title,time,author,views,monthsOld)
{
var a=document.querySelector(".title").innerHTML=`${title}`;
var b=document.querySelector(".time").innerHTML=`${time}`;
var c=document.querySelector(".monthsOld").innerHTML=`${monthsOld} months ago`;
var d=document.querySelector(".author").innerHTML=`${author} //`;

if ((views%1000000)==0) {
    views=views/1000000;
    var v=document.querySelector(".views").innerHTML=`${views}M views`;
}
else if((views%1000)==0){
    views=views/1000;
    var v=document.querySelector(".views").innerHTML=`${views}K views //`;
}
else
{var v=document.querySelector(".views").innerHTML=`${views} views //`;}

}

build("Web development Course","31:20","Havyaka",72000,3);

function filesGetting(file,callback){
            var ajaxCall=new XMLHttpRequest();
            ajaxCall.overrideMimeType("aplication/json");
            ajaxCall.open("GET",file,true);
            ajaxCall.onreadystatechange=function(){
                if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
                    callback(ajaxCall.responseText);
                }
            }
            ajaxCall.send(null);

        }
filesGetting("data.json",function(jsondata){
            var data=JSON.parse(jsondata);
            console.log(data);
            details(data.personaldata);
            carrier(data.carrier);
            details1(data.mydata);

        })

var body=document.getElementById('root');

var d= document.createElement("div");
d.classList.add("main");
body.appendChild(d);

var left =document.createElement("div");
left.classList.add("left");
d.appendChild(left);

var right =document.createElement("div");
right.classList.add("right");
d.appendChild(right);

function details(da) {
var name = document.createElement("h2");
name.setAttribute("id","name");
name.textContent=da.name;
left.appendChild(name);

var name1 = document.createElement("h2");
name1.setAttribute("id","mobile");
name1.textContent=da.mobile;
left.appendChild(name1);

var email = document.createElement("h2");
email.setAttribute("id","email");
email.textContent=da.email;
left.appendChild(email);
}
function carrier(d) {
var d2 = document.createElement("div");
d2.classList.add("carrier");
var h1 = document.createElement("h1");
h1.textContent="Carrier Objective";
d2.appendChild(h1)
h1.appendChild(document.createElement("HR"));
var p = document.createElement("p");
p.classList.add("carrier");
p.textContent=d.carr;
d2.appendChild(p);
right.appendChild(d2)
}

var d1 = document.createElement("div");
d1.classList.add("edu");
right.appendChild(d1);
var h1=document.createElement("h1");
h1.textContent="Educational Details";
d1.appendChild(h1);
d1.appendChild(document.createElement("HR"));

function details1(sdc){
for (i in sdc) {
  var ul = document.createElement("ul");
  ul.classList.add("myprofile");
  var li =document.createElement("li");
  li.textContent = sdc[i].name;
  ul.appendChild(li);
  right.appendChild(ul);
  var li =document.createElement("li");
  li.textContent = sdc[i].percentage;
  ul.appendChild(li);
  right.appendChild(ul);
  var li =document.createElement("li");
  li.textContent = sdc[i].yop;
  ul.appendChild(li);
  d1.appendChild(ul);
}
}
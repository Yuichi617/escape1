/*変数宣言*/
var flg = 0;
var id =  Math.floor(Math.random() * 5) +1;
var mix_btn = document.getElementById("mix_btn");
var omikujibox = document.getElementById("omikujibox");
var post_btn = document.getElementById("post_btn");

/*関数定義*/
function mix(){
    if(flg==0){
        id =  Math.floor(Math.random() * 5) +1;
        mix_btn.textContent="止める";
        omikujibox.classList.add("mix");
        flg = 1;
    } else {
        mix_btn.textContent="混ぜる";
        omikujibox.classList.remove("mix");
        flg = 0;
    }
}

function postid() {
 
    var form = document.createElement('form');
    var request = document.createElement('input');
 
    form.method = 'POST';
    form.action = "/submit";
 
    request.type = 'hidden';
    request.name = 'id';
    request.value = id;
 
    form.appendChild(request);
    document.body.appendChild(form);
 
    form.submit();
 
}

/*イベント*/
mix_btn.addEventListener("click", mix);
post_btn.addEventListener("click", postid);
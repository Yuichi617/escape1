var imgList = [
    "picture/daikiti.jpg",
    "picture/tyuukiti.jpg",
    "picture/kiti.jpg",
    "picture/syoukiti.jpg",
    "picture/kyou.jpg"
];

var omikuji_result = document.getElementById("omikuji_result");
omikuji_result.innerHTML = "<img id='result_img' src='" + imgList[id] + "'>";
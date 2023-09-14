const button = document.getElementById("spantext");
let countnum = 0;

function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = "https://kaengee.github.io/PROFILE_kaengEE/";
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크가 복사되었습니다! \n링크를 공유해보세요❤\n ");
}

function count() {
  countnum += 1;
  spantext.innerText = `좋아요: ${countnum}`;
}

button.addEventListener("click", count);

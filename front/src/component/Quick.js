import React from 'react';
import {Nav, NavItem,NavLink, } from 'reactstrap';



var cnt =1; 
export default function Navbar() {
  function toggleImg(){ 
    // document.getElementById("img").src="/img/m1.jpg";
    var img1 = document.getElementById("img");
      if(cnt%2==1){
        img1.src="/img/Qafter.svg";
        } else{
          img1.src="/img/Qbefore.svg";
        }
        cnt++;
  }
  // 퀵메뉴 문이 클릭시마다 이미지 변경 하는 자바스크립트 !!!!!


  return (
<div id ="quick">
  <div class="dropup">
    <button onClick={toggleImg} class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <img id="img" src="/img/Qbefore.svg" alt="quick메뉴"/>
    </button>
    <ul class="dropdown-menu quickbox" aria-labelledby="dropdownMenuButton1">
      <li><a class="kakao dropdown-item" href="#"></a></li>
      <li><a class="Tistory dropdown-item" href="#"></a></li>
      <li><a class="github dropdown-item" href="#"></a></li>
    </ul>
  </div>
</div>
  )
}

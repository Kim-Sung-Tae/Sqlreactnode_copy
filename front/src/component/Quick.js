import React from 'react';
import {Nav, NavItem,NavLink, } from 'reactstrap';




export default function Navbar() {

  // var img1 = document.getElementById("img");
  // var toggle = true;

  // function toggleImg( obj, tf ){ 
  //   // document.getElementById("img").src="/img/m1.jpg";
  //     if( tf ){
  //       obj.src="/img/Qafter.svg";
  //       tf= false;
  //       } else{
  //         obj.src="/img/Qbefore.svg";
  //         tf = true;
       
  //       }
       
  // }
  // 퀵메뉴 문이 클릭시마다 이미지 변경 하는 자바스크립트 !!!!!
  
  return (
<div id ="quick">
  <div class="dropup">
    <button  class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <img id="quickimg" src="" alt=""/>
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

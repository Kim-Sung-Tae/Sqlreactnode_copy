import React from 'react';
import {Nav, NavItem,NavLink, } from 'reactstrap';




export default function Navbar() {
  return (
<div id ="quick">
  
  <div class="dropup">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Quick
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

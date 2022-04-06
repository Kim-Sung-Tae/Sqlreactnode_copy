import React from 'react'

import '../css/kst.scss'

function Header() {
  return (
    <div>
        <ul class="nav justify-content-center" id="header">
            <li class="nav-item pills-tap">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>


    </div>
  )
}

export default Header

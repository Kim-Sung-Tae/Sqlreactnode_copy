import React from 'react'


export default function Modal_2() {
  return (



<div id ="mainCard" class="container ">
    <div class="row  text-center p-5">
            <div class="col-lg-6 col-sm-12 p-5">
            {/* <!-- Button trigger modal --> */}
            <button  type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal1">
             <div class="cardBox p-4">
                 <img src="img/m1.jpg" alt='img'></img>
                <table class="table table-striped">
                     나는
                </table>
        
             </div>
            </button>

        {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      22
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
         </div>

    

        <div class="col-lg-6 col-sm-12 p-5">      
                {/* <!-- Button trigger modal --> */}
                <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
             <div class="cardBox p-4">
                 <img src="img/m2.jpg" alt='img'></img>
                <table class="table table-striped">
                   포트폴리오 
                </table>
        
             </div>
            </button>

            {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...222
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-sm-12 p-5">
            {/* <!-- Button trigger modal --> */}
            <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
             <div class="cardBox p-4">
                 <img src="img/m3.jpg" alt='img'></img>
                <table class="table table-striped">
                    작업방식& 프로세스
                </table>
        
             </div>
            </button>

        {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...333
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
         </div>
         
         <div class="col-lg-6 col-sm-12 p-5">
            {/* <!-- Button trigger modal --> */}
            <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
             <div class="cardBox p-4">
                 <img src="img/m4.jpg" alt='img'></img>
                <table class="table table-striped">
                     최종적으로 
                </table>
        
             </div>
            </button>

        {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...444
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
         </div>

         

         


    
         </div>
    </div>
    


   






  )
}

import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';




const clickMe =()=>{
  document.location.href('./Modal_1.js')
}


export default function Main_2(props) {
  return (

    

    <div id="Main_2" className="col-sm-12 col-lg-6" >

    <div> 
        
        <Card > 
            <CardImg alt={props.altsrc} /> 
            <CardBody className="d-flex flex-column align-items-center">
              <CardTitle>{props.title}</CardTitle>
                {/* <CardSubtitle>Card 부제목</CardSubtitle> */}
                <CardText>Card 내용</CardText>
                    <Button onclick={clickMe}>버튼</Button>            
            </CardBody> 
        </Card> 


        
      </div>
    </div>
  )
}

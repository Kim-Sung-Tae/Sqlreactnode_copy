import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function interviewform(props) { 

  
    const submitClick = async (type, e) => {    
        
        // 안에 비동식이 있다는걸 유추,  첫번쨰인자가 , xml까지 -sql 선택의 key 
        // 두번째인자는 마우스피드백
        // 이벤트리스ㅓ -> 함수저장 -> 객체의 이벤트에 저장
        // function ccc (){

        // }
        // button.onClick = ccc
        // <button onClick = {ccc()}>

        // button.onclick = function(){}    함수가 저장된다.


        const  fnValidate = (e) =>{

                if(!$('#agreeTerm').is(':checked')){   
                    alert("동의하시게나");
                    $('label[for="agreeTerm"]').addClass('notice');                 
                    return false;
                }
                // if(){
                //     return false;         // 
                // } 

                   return true;      //유효성 검사 제일 아래에 있는 return true;
                
                        
              }
          var time = new Date(); 
         
          if(fnValidate()){ // 동의했기때문에 데이터 모아서 이제 비동기로 노드한테 보내야겟다
           
            // 폼필드에 내가 원하는대로 사용자가 데이터를 삽입했음
            var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());     // name=value&name2=value2      
            var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"')  
            json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}" 
        // json 화 시킴  -> 노드 
        
        // 노드 -> xml -> sql 
            try{
                axios({
                    url :`/prointerview?type=${props.botable}`,       // 요청 
                    header:{
                        "Content-Type" : 'application/json',
                    },
                    method :"POST",
                    body : json_form
                })
                .then(
                    //성공되었다라고 노출시켜준다.
                    
                )

            }
            catch(err){
                console.log(" 서버통신 문제가 있네 좀있다가 다시 시도해: "+err)

            }
            
            

          }
           // e.preventDefault();     
       

    }
  return (
    <div>
         <h2>{ props.titlenm }</h2>
                 <form  action=''  method='post' name={props.botable}>
                    <div className='formStyle'>
                        <dl>                            
                            <dt><label htmlFor='wr_subject'>인터뷰제목</label></dt>
                            <dd>
                                <input type='text' name='wr_subject' id="wr_subject" required />
                            </dd>
                        </dl>
                        <dl>
                            <dt><label htmlFor="wr_content">인터뷰내용</label></dt>
                            <dd>
                                <textarea rows={5} name="wr_content" id="wr_content"  required >

                                </textarea>
                            </dd>
                        </dl>
                        <div className="agree">
                            <input type="checkbox" id="agreeTerm" />
                            <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                        </div>
                        <a href="#none" onClick={e => { submitClick(props.botable, e) }}  className='btn' > 인터뷰올리기 </a>
                    </div>
                 </form> 

    </div>
  )
}
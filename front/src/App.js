import Conent_interview from './component/Interview';
import Content_interview_form from './component/Interviewform';
import './App.css';
import  Header from './component/Header';
import Quick from './component/Quick';

import Main_1 from './component/Main_1';
import Main_2 from './component/Main_2';

import Modal_1 from './component/Modal_1';
import Modal_2 from './component/Modal_2';

import Footer from './component/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <div className="wrap">    
      <div >
          <img id="logo" src='/img/logo1.svg' alt="로고"></img>
      </div>
      

      <Quick></Quick>
      <Main_1></Main_1>
      {/* <Modal_1></Modal_1> */}
      <Modal_2></Modal_2>
      <div id="mainCard" className='container'>
        <div className='row'>
          <Main_2 altsrc="이미지를 넣어주세요." title="WHO"></Main_2>
          <Main_2 altsrc="이미지를 넣어주세요." title="WHY"></Main_2>
          <Main_2 altsrc="이미지를 넣어주세요." title="HOW"></Main_2>
          <Main_2 altsrc="이미지를 넣어주세요." title="WHAT"></Main_2>
          <Main_2 altsrc="이미지를 넣어주세요." title="WHERE"></Main_2> 
        </div>
      </div>

       {/* <Header></Header> */}
      {/* 네비게이션 */}
      {/* Swiper */}
     {/* <Conent_interview botable='interviewlist' titlenm='사전인터뷰'></Conent_interview> */}
     
     {/* 포트폴리오 */}
     {/* <Content_interview_form titlenm='인터뷰글쓰기' botable="interviewwrite"></Content_interview_form> */}
    {/* 하단 */}
      <span id="footBox">
        <Footer></Footer>
        <Content_interview_form></Content_interview_form>
      </span>

    </div>
  );
}

export default App;

import Conent_interview from './component/Interview';
import Content_interview_form from './component/Interviewform';
import './App.css';
import  Header from './component/Header';
import Quick from './component/Quick';
import Main_1 from './component/Main_1';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="wrap">    
      <div >
          <img id="logo" src='/img/logo1.svg' alt="로고"></img>
      </div>
      

      <Quick></Quick>
      <Main_1></Main_1>
       {/* <Header></Header> */}
      {/* 네비게이션 */}
      {/* Swiper */}
     {/* <Conent_interview botable='interviewlist' titlenm='사전인터뷰'></Conent_interview> */}
     
     {/* 포트폴리오 */}
     {/* <Content_interview_form titlenm='인터뷰글쓰기' botable="interviewwrite"></Content_interview_form> */}
    {/* 하단 */}
    
    </div>
  );
}

export default App;

// DOMContentLoaded 이벤트가 발생하면 내부의 콜백 함수가 실행됨.
document.addEventListener("DOMContentLoaded", function(e) {
  
    // ============================
    // [아이디 수정 기능]
    // ============================
    
    // "#id i" 요소(아이디 옆의 수정 아이콘 등)를 선택
    let configID = document.querySelector("#id i");
    // "#id span" 요소(실제 아이디 텍스트를 표시하는 부분)를 선택
    let idText = document.querySelector("#id span");
  
    // 아이디 수정 버튼(아이콘)을 클릭하면 실행되는 이벤트 리스너 등록
    configID.addEventListener("click", function(e) {
      // prompt 창을 띄워 사용자에게 새로운 아이디를 입력받고,
      // 그 값을 idText 요소의 텍스트로 반영함.
      idText.textContent = prompt("새로운 아이디를 입력하세요");
    });
  
    // ============================
    // [프로필 편집 기능]
    // ============================
    
    // 프로필 편집 버튼을 선택
    let profileEditButton = document.querySelector("#profile_infobutton");
    // 사용자 정보, 요약, 상세 프로필 정보를 담고 있는 요소들을 선택
    let userInfo = document.querySelector("#userInfo");
    let summary = document.querySelector("#summary");
    let profileDetail = document.querySelector("#profileDetail");
    // 편집 모드 여부를 저장하는 변수 (false: 편집 모드 아님, true: 편집 모드)
    let changing = false;
  
    // 프로필 편집 버튼 클릭 시 실행되는 이벤트 리스너 등록
    profileEditButton.addEventListener("click", function(e) {
      
      // 편집 모드인 경우 (현재 input 태그가 존재)
      if (changing) {
        // 각 input 태그의 값을 읽어옴
        let _userInfo = userInfo.querySelector("input").value;
        let _summary = summary.querySelector("input").value;
        let _profileDetail = profileDetail.querySelector("input").value;
        
        // 읽어온 값을 각 영역의 innerHTML로 대체하여 텍스트 형태로 변경
        userInfo.innerHTML = _userInfo;
        summary.innerHTML = _summary;
  
        // 프로필 상세 정보가 "http"로 시작하면, 링크 형태로 만들어줌.
        if (_profileDetail.startsWith("http")) {
          _profileDetail = "<a href=\"" + _profileDetail + "\">" + _profileDetail + "</a>";
        }
        profileDetail.innerHTML = _profileDetail;
  
        // 버튼의 텍스트를 "프로필 편집"으로 변경하여 편집 모드 종료를 표시
        e.target.textContent = "프로필 편집";
        changing = false;
        
      } else { 
        // 편집 모드가 아닌 경우, 현재 텍스트 내용을 input 태그로 감싸 편집할 수 있게 변경
        
        // 각 영역의 기존 텍스트를 변수에 저장
        let _userInfo = userInfo.textContent;
        let _summary = summary.textContent;
        let _profileDetail = profileDetail.textContent;
        
        // input 태그를 만들어 기존 텍스트를 value로 설정하고, innerHTML로 대체
        userInfo.innerHTML = "<input value=\"" + _userInfo + "\"></input>";
        summary.innerHTML = "<input value=\"" + _summary + "\"></input>";
        profileDetail.innerHTML = "<input value=\"" + _profileDetail + "\"></input>";
        
        // 버튼의 텍스트를 "프로필 편집 완료"로 변경하여 편집 모드임을 표시
        e.target.textContent = "프로필 편집 완료";
        changing = true;
      }
  
      // ============================
      // [프로필 사진 편집 기능]
      // ============================
  
      // 프로필 사진 요소(원형 사진)를 선택
      let profile_pic = document.querySelector("#profile_pic .circle_pic");
  
      // 마우스를 프로필 사진 위에 올리면 그레이스케일 효과(50%)를 적용
      profile_pic.addEventListener("mouseover", function(e) {
        e.target.style.filter = "grayscale(50%)";
      });
  
      // 마우스가 프로필 사진을 벗어나면 그레이스케일 효과를 제거
      profile_pic.addEventListener("mouseleave", function(e) {
        e.target.style.filter = "grayscale(0%)";
      });
  
      // 프로필 사진을 클릭하면, prompt 창을 통해 새 이미지 URL을 입력받아 사진을 변경
      profile_pic.addEventListener("click", (e) => {
        // 입력받은 URL을 src 속성에 반영하여 이미지 변경
        let newUrl = prompt("이미지 url을 입력해 주세요!");
        if (newUrl) {
          profile_pic.setAttribute("src", newUrl);
        }
      });
      
    }); // 프로필 편집 버튼 이벤트 리스너 끝
  
  }); // DOMContentLoaded 이벤트 리스너 끝
  

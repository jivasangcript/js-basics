# Motivation

바닐라 자바스크립트로 구현한 크롬 앱 [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca) 클론

## 기술 스택

## 기능

전체적으로 로컬 스토리지(`localStorage`)를 활용해 새로 고침 시에도 데이터가 유지되도록 기능 구현

- 시계

  - `new Date()`에서 '시간:분' 가져와서
  - `setInterval`로 1초씩 실행

- 인사말

  - `input`에 사용자 이름을 입력하면 `form`을 통해
  - `localStorage`에 사용자 이름 저장

- 배경 사진

  - [Unsplash API](https://unsplash.com/developers) 활용
  - 최초에 `fetch`를 통해 `json` 형식의 random 사진 데이터 받아오기
  - `localStorage`에 사진 정보, 만료 시간 저장
  - 만료 시간이 지나면 사진 데이터를 새로 받아와서 변경하기

- 할 일

  - 추가, 삭제, 불러오기: `localStorage` 활용
  - 추가: 할 일(toDo)을 입력하면 toDos `Array`에 넣어주기
  - 삭제: 버튼을 클릭하면 `id`에 해당하는 toDo만 삭제하고 새로운 배열 return
  - 불러오기: `localStorage`에 key, value 있으면 불러오기

- 위치 기반 날씨
  - [Open Weather API](https://openweathermap.org/api) 활용
  - 사용자 위치(브라우저 권한 필요) 가져온 후, `localStorage`에 저장
  - 가져온 위치(Geolocation) 좌표값(`longitude`, `latitude`)을 이용해 날씨 데이터 가져오기

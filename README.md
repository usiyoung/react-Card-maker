# react-Card-maker
🧃Make your own card!

## stack
`React(react-hook)` `post-css` `firebase`

## learned

<img width="1435" alt="스크린샷 2021-12-31 오후 4 36 42" src="https://user-images.githubusercontent.com/85566273/147811915-3ad1edbc-6e2b-45d1-8344-7caf518b410f.png">

[DEMO](https://usiyoung-card-maker.netlify.app)

### 1. Function component
- why react-hook? : 한가지의 기능만 수행하길 권장되는 정적인 `함수형 컴포넌트`에 이제는 클래스 컴포넌트에서만 사용할 수 있었던 `상태관리(state)`와 `라이프사이클`을 사용할 수 있게 합니다.

- hook을 토대로
	- dom을 선택할 수 있는 **useRef**로 요소의 value를 얻어오고, 
	- 컴포넌트의 데이터를 관리하는 **state**로 유저의 아이디 및 카드정보를 넣어 관리하고,
	- 업데이트를 관찰하는 **useEffect**로 유저의 로그인 상태를 관리했습니다.
- 성능 면에서
	>	클래스 컴포넌트에는 `pureComponent`로, 함수형 컴포넌트에서는 `useMemo`를 사용해 불필요한 **re-render**를 막아줍니다. 

	상태값이 많고 복잡한 연산이 있는 경우에는 사용하지 않는 것이 좋아 간단한 일만 하는 컴포넌트에 `memo`를 사용했습니다. 
여러번 호출이 필요없는 함수는 `useCallback`에 디펜던시 인자를 넣어 관리하기도 했습니다.

### 2. Firebase
- `firebase Authentication` : 
    관찰자 역할을 하는 `onAuthStateChanged` 메서드를 연결해 사용자가 로그인을 하면 정보를 받아오고 로그아웃도 처리할 수 있습니다.
    인증을 도와주는 코드들은 따로 클래스를 만들어 주면 관리가 편해 `auth_service.js`에 `AuthService`클래스를 넣어 관리 해주었습니다.
    config에 프라이빗하게 사용되어야 하는 key들은 `.env`환경 변수 파일에 넣어 관리합니다.

- `firebase realtime database` : 
    백엔드 언어를 사용하지 않고 데이터베이스를 구축할 수 있는 파이어베이스 실시간데이터베이스를 통해 유저가 만든 카드를 관리합니다.
    firebase-database에서 제공하는 `value` 이벤트로 컨텐츠의 스냅샷을 읽을 수 있어 로그아웃 후 재접속을 해도 만들었던 카드들이 `sync`되어 그대로 남아있습니다.
		
### 3. Router
- 리액트 라우터 버전 업데이트가 있어(버전 5 -> 버전 6)코드를 비교하면서 제작할 수 있었습니다. 버전6 에서의 코드 가독성이 좋은 것 같아 이 프로젝트에서는 버전6으로 작성되었습니다.
로그인을 해주는 **login**페이지와 카드를 만들어주는 **maker**페이지로 나누었습니다. router로 인해 네비게이션 역할과 북마크 기능도 가능해졌습니다. 

### 4. Postcss `why postcss?`
- Autoprefix 지원
- `모듈화`를 지원해 bem과 같은 긴 이름을 사용하지 않아도 됩니다. 이게 진짜 좋습니다

## screen
### maker page
<img width="1435" alt="스크린샷 2021-12-31 오후 4 40 49" src="https://user-images.githubusercontent.com/85566273/147811922-b1fdabd9-2714-4712-9177-0b4beb8bea57.png">

### media query
|login|maker|
|----|----|
|<img width="414" height="300" alt="스크린샷 2021-12-31 오후 4 36 51" src="https://user-images.githubusercontent.com/85566273/147811921-49be12ab-a66e-4dce-ad36-912c5637a96c.png">|<img width="414" height="300" alt="스크린샷 2021-12-31 오후 4 41 00" src="https://user-images.githubusercontent.com/85566273/147811912-ed59f45a-4c99-4178-be58-dcbe0970b866.png">|



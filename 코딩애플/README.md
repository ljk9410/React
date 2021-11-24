# 코딩애플 유튜브 react 강의
## 1. 설치
nodejs 설치
터미널에 npx create-react-app 프로젝트명
"npm start" 명령어를 통해 시작
App.js는 HTML을 짜는 공간
public/index.html 이 실제 메인페이지



## 2. JSX
react에서 사용하는 html 대용 문법
태그에 class를 주기 위해선 `<div className="클래스명">`

### react의 장점
데이터 바인딩이 쉬움
데이터바인딩이란 서버에서 받아온 데이터를 HTML에 넣는 작업

### {} 중괄호의 중요성
react에선 `{}` 중괄호를 통해 js 변수를 rendering 할 수 있음
src, id, href 등의 속성에도 `{}` 를 사용할 수 있음
우리가 상상하는 모든 곳에 `{}`로 변수를 집어넣을 수 있음
JSX에서 style 속성을 집어넣을 때
`<div style={ {color: 'blue'} }`
`{}`가 필요함



## 3. state
1. 변수 대신 쓰는 데이터 저장공간
2. `useState()`를 이용해 만들어야함
react에서 데이터는
변수에 넣거나
state에 넣거나

useState('데이터')
-> [a, b]를 return
-> a => 데이터 / b => 데이터 수정을 위한 함수

#### state의 장점
웹이 app처럼 동작하게 만들기 위함
state는 변경되면 HTML이 자동으로 새로고침 없이 재렌더링됨
자주 바뀌는 중요한 데이터는 변수보단 state로 저장해서 쓰는게 좋다

#### ES6 destructuring
`let [a, b] = array[10, 100]`
array, object의 데이터를 변수에 각각 담기위해 사용하는 문법




## 4. event
#### onClick




## 5. state의 변경
state는 그냥 변경할 수 없음
state를 생설할 때 따라오는 함수를 이용해서 state를 변경
state변경함수(대체할 데이터)
state를 변경하기 위해선 우선 복사본을 만들어서 복사본을 변경하는 것이 react의 관습
깊은 복사가 필요(deep copy)




## 6. Component
HTML을 한 단어로 줄여서 쓸 수 있는 방법
함수를 만들고 축약을 원하는 곳에 그 함수명으로 태그하기

#### 주의점
1. component 이름의 시작은 대괄호
2. return() 안에는 태그가 하나만 존재해야함
3. 상위 component에서 만든 state를 쓰려면 props 문법을 이용해야 함
(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),s=t(15),i=t.n(s),o=t(3),u=t(4),l=t.n(u),d=t(9),b=t(2),p=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var f,x,j,g,h=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,console.log("FETCH QUIZ QUESTIONS",a),n.abrupt("return",a.results.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{answers:(e=[].concat(Object(o.a)(n.incorrect_answers),[n.correct_answer]),Object(o.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=t(5),O=t(6),w=O.b.div(f||(f=Object(m.a)(["\n    max-width: 1100px;\n    background: #ebfeff;\n    border-radius: 10px;\n    border: 2px solid #0085a3;\n    padding: 20px;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    text-align: center;\n\n    p {\n        font-size: 1rem;\n    }\n\n"]))),v=O.b.div(x||(x=Object(m.a)(["\n    transition: all 0.3 ease;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user-select: none;\n        font-size: 0.8rem;\n        width: 100%;\n        height: 40px;\n        margin: 5px 0;\n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n        border-radius: 10px;\n        color: #fff;\n        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n    }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),k=t(1),y=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNumber,s=n.totalQuestions;return Object(k.jsxs)(w,{children:[Object(k.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(k.jsx)("div",{children:t.map((function(n){return Object(k.jsx)(v,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(k.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(k.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},S=t.p+"static/media/alex-diaz.c79a61b2.jpg",z=Object(O.a)(j||(j=Object(m.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamara', sans-serif;\n    }\n\n"])),S),q=O.b.div(g||(g=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > p {\n        color: #fff;\n    }\n\n    .score {\n        color: #fff;\n        font-size: 2rem;\n        margin: 0;\n    }\n\n    h1 {\n        font-familyy: Fascinate Inline;\n        background-image: linear-gradient(180deg, #fff, #87f1ff);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -moz-text-fill-color: transparent;\n        filter: drop-shadow(2px 2px #0085a3);\n        font-size: 70px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .start, .next {\n        cursor: pointer;\n        background: linear-gradient(180deg, #fff, #ffcc91);\n        border: 2px solid #d38558;\n        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n    }\n\n    .start {\n        max-width: 200px;\n    }\n\n"])));var A=function(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],c=e[1],s=Object(a.useState)([]),i=Object(b.a)(s,2),u=i[0],p=i[1],f=Object(a.useState)(0),x=Object(b.a)(f,2),j=x[0],g=x[1],m=Object(a.useState)([]),O=Object(b.a)(m,2),w=O[0],v=O[1],S=Object(a.useState)(0),A=Object(b.a)(S,2),C=A[0],I=A[1],N=Object(a.useState)(!0),Q=Object(b.a)(N,2),_=Q[0],E=Q[1],M=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("starting trivia"),c(!0),E(!1),n.next=5,h(10,r.EASY);case 5:e=n.sent,p(e),I(0),v([]),g(0),c(!1);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z,{}),Object(k.jsxs)(q,{children:[Object(k.jsx)("h1",{children:"REACT QUIZ"}),_||10===w.length?Object(k.jsx)("button",{className:"start",onClick:M,children:"Start"}):null,_?null:Object(k.jsxs)("p",{className:"score",children:["Score: ",C]}),t&&Object(k.jsx)("p",{children:"Loading Questions ..."}),!t&&!_&&Object(k.jsx)(y,{questionNumber:j+1,totalQuestions:10,question:u[j].question,answers:u[j].answers,userAnswer:w?w[j]:void 0,callback:function(n){if(!_){var e=n.currentTarget.value,t=u[j].correct_answer===e;t&&I((function(n){return n+1}));var r={question:u[j].question,answer:e,correct:t,correctAnswer:u[j].correct_answer};v((function(n){return[].concat(Object(o.a)(n),[r])}))}}}),_||t||w.length!==j+1||9===j?null:Object(k.jsx)("button",{className:"next",onClick:function(){var n=j+1;10===n?E(!0):g(n)},children:"Next Question "})]})]})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7c24dcac.chunk.js.map
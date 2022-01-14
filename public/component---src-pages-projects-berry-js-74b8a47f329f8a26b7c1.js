"use strict";(self.webpackChunknottiffchan_com=self.webpackChunknottiffchan_com||[]).push([[213],{7072:function(n,e,t){var i,a,r=t(1880),p=t(7294),d=t(4119);e.Z=function(n){return p.createElement(c,null,p.createElement(o,null,p.createElement("div",{className:"header"},p.createElement("h1",null,n.projName)),p.createElement("h2",{className:"projDesc"},n.projDesc)))};var c=d.ZP.header(i||(i=(0,r.Z)(["\n  position: relative;\n  height: calc(55vh - 100px);\n  min-height: 200px;\n  z-index: 1;\n\n  @media (min-width: 768px) {\n    min-height: 370px;\n    height: calc(80vh - 100px);\n  }\n  @media (min-width: 360px) {\n    min-height: 356px;\n  }\n"]))),o=d.ZP.div(a||(a=(0,r.Z)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n\n  p {\n    line-height: 1.6;\n    width: 100%;\n  }\n\n  .header {\n    margin: 0 0 15px 0;\n    perspective: 600px;\n  }\n\n  .header h1 {\n    font-weight: 500;\n    font-size: 17px;\n    margin: 0;\n  }\n\n  .projDesc {\n    width: 100%;\n    font-size: 28px;\n    letter-spacing: 0.03em;\n    font-weight: 500;\n    margin: 0;\n    color: var(--purple);\n  }\n\n  @media (min-width: 360px) {\n    padding: 0 30px;\n\n    .projDesc {\n      font-size: 34px;\n    }\n  }\n  @media (min-width: 768px) {\n    padding: 0 100px;\n\n    p {\n      width: 80%;\n    }\n    .header {\n      margin: 0 0 18px 0;\n    }\n    .header h1 {\n      font-size: 20px;\n      line-height: 250%;\n    }\n    .projDesc {\n      width: 80%;\n    }\n  }\n  @media (min-width: 1024px) {\n    padding: 0 120px;\n  }\n  @media (min-width: 1200px) {\n    padding: 0 150px;\n\n    .projDesc {\n      font-size: 5vw;\n    }\n  }\n  @media (min-width: 1350px) {\n    padding: 0 180px;\n  }\n  @media (min-width: 1900px) {\n    .projDesc {\n      font-size: 100px;\n    }\n  }\n"])))},7597:function(n,e,t){var i,a,r=t(1880),p=t(7294),d=t(4119),c=t(1112);e.Z=function(n){var e=(0,c.DI)(),t=(0,c.mX)().cursorStyles,i=function(n){n=t.includes(n)&&n||!1,e({type:"CURSOR_TYPE",cursorType:n})},a=n.links.map((function(n){return p.createElement(m,{key:n.name,href:n.link,target:"_blank",onMouseEnter:function(){return i("pointer")},onMouseLeave:i},p.createElement("span",null,n.name))}));return p.createElement(o,null,a)};var o=d.ZP.div(i||(i=(0,r.Z)(["\n  margin: -10px -15px;\n  padding: 32px 0 0 0;\n\n  @media (min-width: 768px) {\n    margin: -10px -20px;\n    padding: 40px 0 0 0;\n  }\n  @media (min-width: 1200px) {\n    margin: -12px -32px;\n  }\n"]))),m=d.ZP.a(a||(a=(0,r.Z)(['\n  position: relative;\n  display: inline-block;\n  margin: 10px 15px;\n  padding: 5px 0;\n  font-size: 18px;\n  font-weight: 500;\n  vertical-align: middle;\n  text-decoration: none;\n  color: var(--purple);\n  cursor: none;\n\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 1px;\n    background: var(--purple);\n    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1),\n      -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1),\n      -moz-transform 1s cubic-bezier(0.19, 1, 0.22, 1),\n      -o-transform 1s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  &:hover:before {\n    transform: scaleX(0);\n  }\n\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: -25px;\n    left: -5px;\n    right: -5px;\n    bottom: -25px;\n  }\n\n  @media (min-width: 768px) {\n    margin: 10px 20px;\n    padding: 7px 0;\n    font-size: 20px;\n  }\n\n  @media (min-width: 1200px) {\n    margin: 12px 32px;\n  }\n'])))},286:function(n,e,t){t.d(e,{Z:function(){return o}});var i,a=t(1880),r=t(7294),p=t(5444),d=t(4119),c=t(1112);function o(n){var e=n.link,t=n.text,i=void 0===t?"Next case":t,a=(0,c.DI)(),d=(0,c.mX)().cursorStyles,o=function(n){n=d.includes(n)&&n||!1,a({type:"CURSOR_TYPE",cursorType:n})};return r.createElement(m,null,r.createElement(p.Link,{to:e,onMouseEnter:function(){return o("viewCase")},onMouseLeave:o,onClick:o},r.createElement("h1",null,i)))}var m=d.ZP.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  padding: 200px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    font-size: 54px;\n    color: var(--black);\n    text-decoration: underline;\n  }\n\n  @media (max-width: 768px) {\n    padding: 100px 0;\n  }\n"])))},4912:function(n,e,t){var i,a=t(1880),r=t(7294),p=t(4119);e.Z=function(n){return r.createElement(d,null,n.children)};var d=p.ZP.div(i||(i=(0,a.Z)(["\n    padding: 0 15px;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    padding-bottom: 56.25%;\n    perspective: 100px;\n\n    @media (min-width: 768px) {\n        padding: 0 60px;\n    }\n    @media (min-width: 1200px) {\n        padding: 0 90px;\n    }\n    @media (min-width: 1600px) {\n        padding: 0 140px;\n    }\n\n    video {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        object-fit: cover;\n    }\n\n    img {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        object-fit: cover;\n    }\n"])))},9423:function(n,e,t){var i,a,r=t(1880),p=t(7294),d=t(4119);e.Z=function(n){var e=n.leftItems.map((function(n,e){return p.createElement(c,{key:e},p.createElement("div",{className:"img-wrapper"},p.createElement("img",{src:n.imgSrc,alt:"Supporting"})),p.createElement("div",{className:"caption"},n.caption))})),t=n.rightItems.map((function(n,e){return p.createElement(c,{key:e},p.createElement("div",{className:"img-wrapper"},p.createElement("img",{src:n.imgSrc,alt:"Supporting"})),p.createElement("div",{className:"caption"},n.caption))}));return p.createElement(o,null,p.createElement("div",{className:"container"},p.createElement("div",{className:"items"},p.createElement("div",{className:"left-col"},e),p.createElement("div",{className:"right-col"},t))))};var c=d.ZP.div(i||(i=(0,r.Z)(["\n  display: block;\n  margin: 12px -14px;\n\n  .img-wrapper {\n    padding-bottom: 100%;\n    position: relative;\n    display: block;\n    overflow: hidden;\n  }\n\n  img {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    vertical-align: middle;\n  }\n\n  .caption {\n    display: block;\n    margin: 0 auto;\n    padding: 19px 0;\n    max-width: 270px;\n    font-size: 20px;\n    line-height: 150%;\n    text-align: center;\n  }\n\n  @media (min-width: 360px) {\n    margin: 14px -23px;\n\n    .caption {\n      padding: 23px 0 36px 0;\n    }\n  }\n\n  @media (min-width: 768px) {\n    margin: 14px 12px;\n\n    .caption {\n      padding: 25px 0 44px 0;\n      max-width: 220px;\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    margin: 34px 17px;\n\n    .caption {\n      padding: 34px 0 53px 0;\n      max-width: 284px;\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    margin: 40px 20px;\n\n    .caption {\n      padding: 40px 0 60px 0;\n      max-width: 318px;\n      font-size: 22px;\n    }\n  }\n\n  @media (min-width: 1600px) {\n    margin: 32px 16px;\n  }\n"]))),o=d.ZP.div(a||(a=(0,r.Z)(["\n  padding-bottom: 120px;\n\n  .container {\n    padding: 0 20px;\n  }\n\n  .items {\n    margin: -12px -6px;\n  }\n\n  .left-col,\n  .right-col {\n    flex: 1;\n  }\n\n  @media (min-width: 360px) {\n    .container {\n      padding: 0 30px;\n    }\n    .items {\n      margin: -14px -7px;\n    }\n  }\n  @media (min-width: 768px) {\n    .container {\n      padding: 0 100px;\n    }\n\n    .items {\n      display: flex;\n      -webkit-box-pack: justify;\n      justify-content: space-between;\n      margin: -24px -12px;\n    }\n\n    .right-col {\n      margin: 122px 0 0 0;\n    }\n  }\n  @media (min-width: 1024px) {\n    .container {\n      padding: 0 120px;\n    }\n    .items {\n      margin: -34px -17px;\n    }\n    .right-col {\n      margin: 170px 0 0 0;\n    }\n  }\n  @media (min-width: 1200px) {\n    .container {\n      padding: 0 150px;\n    }\n    .items {\n      margin: -40px -20px;\n    }\n    .right-col {\n      margin: 193px 0 0 0;\n    }\n  }\n  @media (min-width: 1350px) {\n    .container {\n      padding: 0 180px;\n    }\n  }\n  @media (min-width: 1600px) {\n    .container {\n      padding: 0 220px;\n    }\n    .items {\n      margin: -32px -16px;\n    }\n  }\n  @media (min-width: 1900px) {\n    .container {\n      padding: 0 270px;\n      width: 100%;\n      max-width: 1900px;\n      margin: 0 auto;\n    }\n    .right-col {\n      margin: 250px 0 0 0;\n    }\n  }\n"])))},8119:function(n,e,t){var i,a,r=t(1880),p=t(7294),d=t(4119);e.Z=function(n){return p.createElement(c,null,p.createElement(o,null,n.children))};var c=d.ZP.div(i||(i=(0,r.Z)(["\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n\n  p {\n    line-height: 1.6;\n    width: 100%;\n  }\n\n  .header {\n    margin: 0 0 15px 0;\n    perspective: 600px;\n  }\n\n  .header h1 {\n    font-weight: 500;\n    font-size: 17px;\n    margin: 0;\n  }\n\n  .projDesc {\n    font-size: 28px;\n    letter-spacing: 0.03em;\n    font-weight: 500;\n    margin: 0;\n    color: var(--purple);\n  }\n\n  @media (min-width: 360px) {\n    padding: 0 30px;\n\n    .projDesc {\n      font-size: 34px;\n    }\n  }\n  @media (min-width: 768px) {\n    padding: 0 100px;\n\n    p {\n      width: 80%;\n    }\n    .header {\n      margin: 0 0 18px 0;\n    }\n    .header h1 {\n      font-size: 20px;\n      line-height: 250%;\n    }\n  }\n  @media (min-width: 1024px) {\n    padding: 0 120px;\n  }\n  @media (min-width: 1200px) {\n    padding: 0 150px;\n\n    .projDesc {\n      font-size: 5vw;\n    }\n  }\n  @media (min-width: 1350px) {\n    padding: 0 180px;\n  }\n  @media (min-width: 1900px) {\n    .projDesc {\n      font-size: 100px;\n    }\n  }\n"]))),o=d.ZP.section(a||(a=(0,r.Z)(["\n  padding: 120px 0;\n  padding-bottom: 60px;\n\n  h3 {\n    margin: 0;\n    margin-bottom: 30px;\n    color: var(--purple);\n    font-size: 38px;\n    font-weight: 500;\n  }\n\n  @media (min-width: 360px) {\n    padding: 170px 0;\n    padding-bottom: 85px;\n\n    h3 {\n      font-size: 42px;\n    }\n  }\n  @media (min-width: 768px) {\n    padding: 240px 0;\n    padding-bottom: 150px;\n\n    h3 {\n      font-size: 60px;\n    }\n  }\n  @media (min-width: 1350px) {\n    h3 {\n      font-size: 70px;\n    }\n  }\n"])))},1915:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i=t(7294),a=t(6125),r=t(3809),p=t(7072),d=t(8119),c=t(4912),o=t(7597),m=t(9423),l=t(286),s=t.p+"static/berryDemo-e9a676f4712ddc7ee82f915c6887f525.mp4",x=t.p+"static/berryLeftOne-7975278d15b3a0428cc99cafd72cb876.png",g=t.p+"static/berryLeftTwo-811c57e720604c2feb7364e2dc8f3cac.png",h=t.p+"static/berryleftThree-cc6c793dde1530a3c73344dd4320e83c.png",f=t.p+"static/berryRightOne-3bc18a0a372508ee39d40974f272b8c9.png",b=t.p+"static/berryRightTwo-f7295c0a92a086e10da7515281f23b5a.png",u=[{link:"https://github.com/nottiffchan/berry",name:"Github Repo"}],w=[{imgSrc:x,caption:""},{imgSrc:g,caption:"Three different colour themes to choose from"},{imgSrc:h,caption:"Adding custom items"}],y=[{imgSrc:f,caption:"Empty states"},{imgSrc:b,caption:"Saved recipes to quick-add ingredients"}],v=function(){return i.createElement(r.Z,null,i.createElement(p.Z,{projName:"berry",projDesc:"Tile-style shopping list mobile app"}),i.createElement(a.S,{src:"../../assets/projects/berry/hero.png",alt:"Hero image",__imageData:t(504)}),i.createElement(d.Z,null,i.createElement("h3",null,"Background"),i.createElement("p",null,"berry is a mobile application created with the Flutter framework as a side project. With berry, users no longer need to type out their grocery items one by one and look at boring lines of text, no! Simply tapping on the grocery tiles, already sorted by category and most recently used, seamlessly adds each item to your grocery list.",i.createElement("br",null),i.createElement("br",null),"Being a very visual person, I was tired of seeing and using to-do and grocery list apps which all had the same boring format. I wanted an aesthetically appealing and seamless avenue to make taking down grocery lists an engaging experience."),i.createElement(o.Z,{links:u})),i.createElement(c.Z,null,i.createElement("video",{src:s,loop:!0,muted:!0,autoPlay:!0,playsInline:!0})),i.createElement(d.Z,null,i.createElement("h3",null,"Tech stack: ",i.createElement("br",null)," Flutter"),i.createElement("p",null,"berry was such a fun project to work on. With the adorable design language in mind, I had a blast going wild with the visuals and developing it. Since grocery shopping is typically a mundane task, I dreamed up a special berry character that would make it more enjoyable and also engaging for kids to use while helping their parents out.")),i.createElement(m.Z,{leftItems:w,rightItems:y}),i.createElement(a.S,{src:"../../assets/projects/berry/berryEnd.png",alt:"End image",__imageData:t(2247)}),i.createElement(l.Z,{text:"Back to main",link:"/"}))}},2247:function(n){n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/359e358b07826bf05d0362de7716999e/5ea58/berryEnd.png","srcSet":"/static/359e358b07826bf05d0362de7716999e/34435/berryEnd.png 600w,\\n/static/359e358b07826bf05d0362de7716999e/d4479/berryEnd.png 1200w,\\n/static/359e358b07826bf05d0362de7716999e/5ea58/berryEnd.png 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/359e358b07826bf05d0362de7716999e/3266f/berryEnd.webp 600w,\\n/static/359e358b07826bf05d0362de7716999e/160d6/berryEnd.webp 1200w,\\n/static/359e358b07826bf05d0362de7716999e/33eaa/berryEnd.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":1340}')},504:function(n){n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8f8","images":{"fallback":{"src":"/static/c8b199711c8fb6a0b2531edc2285fe53/21b15/hero.png","srcSet":"/static/c8b199711c8fb6a0b2531edc2285fe53/01504/hero.png 720w,\\n/static/c8b199711c8fb6a0b2531edc2285fe53/73bbe/hero.png 1440w,\\n/static/c8b199711c8fb6a0b2531edc2285fe53/21b15/hero.png 2880w","sizes":"(min-width: 2880px) 2880px, 100vw"},"sources":[{"srcSet":"/static/c8b199711c8fb6a0b2531edc2285fe53/110ca/hero.webp 720w,\\n/static/c8b199711c8fb6a0b2531edc2285fe53/8ff83/hero.webp 1440w,\\n/static/c8b199711c8fb6a0b2531edc2285fe53/9bc1a/hero.webp 2880w","type":"image/webp","sizes":"(min-width: 2880px) 2880px, 100vw"}]},"width":2880,"height":1620}')}}]);
//# sourceMappingURL=component---src-pages-projects-berry-js-74b8a47f329f8a26b7c1.js.map
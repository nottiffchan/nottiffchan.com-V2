"use strict";(self.webpackChunknottiffchan_com=self.webpackChunknottiffchan_com||[]).push([[746],{7072:function(e,t,i){var a=i(7294),n=i(4119);t.Z=function(e){return a.createElement(o,{projName:e.projName},a.createElement(r,null,a.createElement("div",{className:"header"},a.createElement("h1",null,e.projName)),a.createElement("h2",{className:"projDesc"},e.projDesc),e.caption&&a.createElement("p",{style:{color:"var(--grey)",fontSize:"16px",textTransform:"uppercase"}},e.caption)))};var o=n.default.header.withConfig({displayName:"projectHeader__StyledHeader",componentId:"sc-1fdhu2s-0"})(["position:relative;height:calc(55vh - 100px);min-height:200px;z-index:1;padding-top:100px;@media (min-width:768px){min-height:370px;height:",";}@media (min-width:360px){min-height:356px;}"],(function(e){return e.projName?"calc(80vh - 100px)":""})),r=n.default.div.withConfig({displayName:"projectHeader__TopHeadContainer",componentId:"sc-1fdhu2s-1"})(["padding:0 20px;display:flex;flex-direction:column;justify-content:center;height:100%;p{line-height:1.6;width:100%;}.header{margin:0 0 15px 0;perspective:600px;}.header h1{font-weight:500;font-size:17px;margin:0;}.projDesc{width:100%;font-size:28px;letter-spacing:0.03em;font-weight:500;margin:0 0 15px 0;color:var(--purple);}@media (min-width:360px){padding:0 30px;.projDesc{font-size:34px;}}@media (min-width:768px){padding:0 100px;p{width:80%;}.header{margin:0 0 18px 0;}.header h1{font-size:20px;line-height:250%;}.projDesc{width:80%;}}@media (min-width:1024px){padding:0 120px;}@media (min-width:1200px){padding:0 150px;.projDesc{font-size:5vw;}}@media (min-width:1350px){padding:0 180px;}@media (min-width:1900px){.projDesc{font-size:100px;}}"])},7597:function(e,t,i){var a=i(7294),n=i(4119),o=i(1112);t.Z=function(e){var t=(0,o.DI)(),i=(0,o.mX)().cursorStyles,n=function(e){e=i.includes(e)&&e||!1,t({type:"CURSOR_TYPE",cursorType:e})},c=e.links.map((function(e){return a.createElement(p,{key:e.name,href:e.link,target:"_blank",onMouseEnter:function(){return n("pointer")},onMouseLeave:n},a.createElement("span",null,e.name))}));return a.createElement(r,null,c)};var r=n.default.div.withConfig({displayName:"projectLinkContainer__StyledLinkContainer",componentId:"sc-msjzcl-0"})(["margin:-10px -15px;padding:32px 0 0 0;@media (min-width:768px){margin:-10px -20px;padding:40px 0 0 0;}@media (min-width:1200px){margin:-12px -32px;}"]),p=n.default.a.withConfig({displayName:"projectLinkContainer__StyledLink",componentId:"sc-msjzcl-1"})(['position:relative;display:inline-block;margin:10px 15px;padding:5px 0;font-size:18px;font-weight:500;vertical-align:middle;text-decoration:none;color:var(--purple);&:before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--purple);transition:transform 1s cubic-bezier(0.19,1,0.22,1),-webkit-transform 1s cubic-bezier(0.19,1,0.22,1),-moz-transform 1s cubic-bezier(0.19,1,0.22,1),-o-transform 1s cubic-bezier(0.19,1,0.22,1);}&:hover:before{transform:scaleX(0);}&:after{content:"";display:block;position:absolute;top:-25px;left:-5px;right:-5px;bottom:-25px;}@media (min-width:768px){margin:10px 20px;padding:7px 0;font-size:20px;}@media (min-width:1200px){margin:12px 32px;}'])},286:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(7294),n=i(4119),o=i(1112),r=i(8917),p=i(5277);function c(){var e=(0,o.DI)(),t=(0,o.mX)().cursorStyles,i=function(i){i=t.includes(i)&&i||!1,e({type:"CURSOR_TYPE",cursorType:i})},n="undefined"!=typeof window?window.location.pathname:"";return a.createElement(l,null,a.createElement(r.Z,{paintDrip:!0,onMouseEnter:function(){return i("pointer")},onMouseLeave:i,onClick:i,to:"/projects",hex:"#5f3962"},a.createElement("h3",null,"All")),p.c.map((function(e){return a.createElement(r.Z,{key:e.title,paintDrip:!0,hex:e.transitionCol,to:e.link,style:{paddingLeft:"20px"},onMouseEnter:function(){return i("pointer")},onMouseLeave:i,onClick:i},a.createElement("h3",{className:n.includes(e.link)?"active":""},e.title))})))}var l=n.default.div.withConfig({displayName:"projectNextCase__NextCaseWrap",componentId:"sc-1b2ernm-0"})(["width:100%;padding:200px 0;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;h1{font-size:54px;color:var(--black);text-decoration:underline;}h3{color:var(--grey);opacity:0.4;margin:12px 0;}.active{color:var(--purple);opacity:1;}@media (max-width:768px){padding:100px 0;}"])},9423:function(e,t,i){var a=i(7294),n=i(4119),o=i(1112),r=i(8917);t.Z=function(e){var t=(0,o.DI)(),i=(0,o.mX)().cursorStyles,n=function(e){e=i.includes(e)&&e||!1,t({type:"CURSOR_TYPE",cursorType:e})};return a.createElement(l,null,a.createElement("div",{className:"container"},a.createElement("div",{className:"items"},a.createElement("div",{className:"left-col"},e.leftItems.map((function(t,i){return a.createElement(p,{key:i,item:t,i:i,clickable:e.clickable,onCursor:n})}))),a.createElement("div",{className:"right-col"},e.rightItems.map((function(t,i){return a.createElement(p,{key:i,item:t,i:i,clickable:e.clickable,onCursor:n})}))))))};var p=function(e){var t=e.item,i=e.i,n=e.clickable,o=e.onCursor;return a.createElement(c,{key:i},n?a.createElement(r.Z,{paintDrip:!0,hex:t.transitionCol,onMouseEnter:function(){return o("viewCase")},onMouseLeave:o,onClick:o,className:"img-wrapper",to:t.link},a.createElement("img",{src:t.imgSrc,alt:"Supporting"})):a.createElement("div",{className:"img-wrapper"},a.createElement("img",{src:t.imgSrc,alt:"Supporting"})),a.createElement("div",{className:"caption"},t.caption),n&&a.createElement(a.Fragment,null,a.createElement("b",null,t.description),a.createElement("div",{style:{color:"var(--grey)",paddingTop:"8px",fontSize:"var(--text-xs)"}},t.tags)))},c=n.default.div.withConfig({displayName:"projectSplitshow__StyledSplitshowItem",componentId:"sc-1ug36su-0"})(["display:block;margin:12px -14px;text-align:center;padding-bottom:40px;.img-wrapper{padding-bottom:100%;position:relative;display:block;overflow:hidden;}.img-wrapper:hover{}img{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;vertical-align:middle;}.caption{display:block;margin:0 auto;padding-top:40px;padding-bottom:8px;max-width:270px;font-size:20px;line-height:150%;text-align:center;}@media (min-width:360px){margin:14px -23px;}@media (min-width:768px){margin:14px 12px;.caption{max-width:220px;font-size:16px;}}@media (min-width:1024px){margin:34px 17px;.caption{max-width:284px;font-size:18px;}}@media (min-width:1200px){margin:40px 20px;.caption{max-width:318px;font-size:22px;}}@media (min-width:1600px){margin:32px 16px;}"]),l=n.default.div.withConfig({displayName:"projectSplitshow__SplitshowSection",componentId:"sc-1ug36su-1"})(["padding-bottom:120px;.container{padding:0 20px;}.items{margin:-12px -6px;}.left-col,.right-col{flex:1;}@media (min-width:360px){.container{padding:0 30px;}.items{margin:-14px -7px;}}@media (min-width:768px){.container{padding:0 100px;}.items{display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:-24px -12px;}.right-col{margin:122px 0 0 0;}}@media (min-width:1024px){.container{padding:0 120px;}.items{margin:-34px -17px;}.right-col{margin:170px 0 0 0;}}@media (min-width:1200px){.container{padding:0 150px;}.items{margin:-40px -20px;}.right-col{margin:193px 0 0 0;}}@media (min-width:1350px){.container{padding:0 180px;}}@media (min-width:1600px){.container{padding:0 220px;}.items{margin:-32px -16px;}}@media (min-width:1900px){.container{padding:0 270px;width:100%;max-width:1900px;margin:0 auto;}.right-col{margin:250px 0 0 0;}}"])},8119:function(e,t,i){var a=i(7294),n=i(4119);t.Z=function(e){return a.createElement(o,null,a.createElement(r,null,e.children))};var o=n.default.div.withConfig({displayName:"projectTextSection__TopHeadContainer",componentId:"sc-1pd91mi-0"})(["padding:0 20px;display:flex;flex-direction:column;justify-content:center;height:100%;p{line-height:1.6;width:100%;}small{text-transform:uppercase;font-weight:500;line-height:40px;color:var(--grey);}.header{margin:0 0 15px 0;perspective:600px;}.header h1{font-weight:500;font-size:17px;margin:0;}.projDesc{font-size:28px;letter-spacing:0.03em;font-weight:500;margin:0;color:var(--purple);}@media (min-width:360px){padding:0 30px;.projDesc{font-size:34px;}}@media (min-width:768px){padding:0 100px;p{width:80%;}.header{margin:0 0 18px 0;}.header h1{font-size:20px;line-height:250%;}}@media (min-width:1024px){padding:0 120px;}@media (min-width:1200px){padding:0 150px;.projDesc{font-size:5vw;}}@media (min-width:1350px){padding:0 180px;}@media (min-width:1900px){.projDesc{font-size:100px;}}"]),r=n.default.section.withConfig({displayName:"projectTextSection__Container",componentId:"sc-1pd91mi-1"})(["padding:100px 0;padding-bottom:60px;h3{margin:0;margin-bottom:30px;color:var(--purple);font-size:38px;font-weight:500;}h4{margin:0;margin-bottom:30px;color:var(--purple);font-size:28px;font-weight:500;}@media (min-width:360px){padding-bottom:85px;h3{font-size:42px;}}@media (min-width:768px){padding-bottom:150px;h3{font-size:48px;}}@media (min-width:1350px){h3{font-size:56px;}}"])},5277:function(e,t,i){i.d(t,{U:function(){return p},c:function(){return c}});var a={title:"larry",description:"Mobile app for learning vocabulary",tags:"solo project • ux design • prototyping",transitionCol:"#EBF9FF",link:"/projects/larry",imageUrl:"./thumbnails/larryThumbnail.png",squareImageUrl:"./thumbnails/larryThumbnailSquare.png"},n={title:"PomoPals",description:"Pomodoro timer for remote teams",tags:"hackathon project winner • visual design • development",transitionCol:"#F0F1FF",link:"/projects/pomopals",imageUrl:"./thumbnails/pomopalsThumbnail.png",squareImageUrl:"./thumbnails/pomopalsThumbnailSquare.png"},o={title:"NUSModPlanner",description:"Improving the module planning process in NUS",tags:"team project • ux design • prototyping",link:"/projects/nusmodplanner/",transitionCol:"#FEEEE7",imageUrl:"./thumbnails/nusmodplannerThumbnail.png",squareImageUrl:"./thumbnails/nusmodplannerThumbnailSquare.png"},r={title:"Rescale Lab",description:"SaaS platform for entrepreneurs",tags:"internship • ux design • prototyping",link:"/projects/rescaleLab/",transitionCol:"#EBF5F0",imageUrl:"./thumbnails/rescaleLabThumbnail.png",squareImageUrl:"./thumbnails/rescaleLabThumbnailSquare.png"},p=[r,a,o,n],c=[r,a,o,n,{title:"berry",description:"Tile-style shopping list mobile app",tags:"solo project • visual design • development",link:"/projects/berry/",transitionCol:"#F8F0FA",imageUrl:"./thumbnails/berryThumbnail.png",squareImageUrl:"./thumbnails/berryThumbnailSquare.png"},{title:"vibing.",description:"Creating Spotify playlists for friends",tags:"hackathon project • visual design • development",link:"/projects/vibing/",transitionCol:"#EFF6FB",imageUrl:"./thumbnails/vibingThumbnail.png",squareImageUrl:"./thumbnails/vibingThumbnailSquare.png"}]},1063:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var a=i(6125),n=i(2785),o=i(7294),r=i(7072),p=i(8119),c=i(7597),l=i(9423),m=i(286),s=i.p+"static/pomoLeftOne-cb21ed1cf1eb09ded2e79eb0047398a7.png",d=i.p+"static/pomoLeftTwo-e11cc67e207171ffdffc38cbce7aabec.png",h=i.p+"static/pomoLeftThree-d8a1c3cdaa9a2b40e2a413af73ec714b.png",g=i.p+"static/pomoRightOne-92913f92859147a12cbbc9963cbeb88f.png",f=i.p+"static/pomoRightTwo-7353704aba2d8a34b6daeeedf0d33e50.png",u=i.p+"static/pomoRightThree-db2211b0d2cec7e9a06b321523f9997b.png",x=[{link:"https://devpost.com/software/pomopals-mp3hzs",name:"Devpost Entry"},{link:"https://github.com/pomopals-HNR/pomopals-fe",name:"Github Repo"}],b=[{imgSrc:s,caption:"Users can create their room right from the landing page"},{imgSrc:d,caption:"User reactions to provide quick status updates"},{imgSrc:h,caption:"Friends can share the tasks they want to complete for accountability"}],w=[{imgSrc:g,caption:"Different refreshing room themes to personalize your mood during breaks"},{imgSrc:f,caption:"Dark mode during work time to facilitate focus"},{imgSrc:u,caption:"Chat feature"}];function v(){return o.createElement(n.Z,{title:"PomoPals – Tiffany Chan"},o.createElement(r.Z,{projName:"PomoPals",projDesc:"Pomodoro timer for remote teams",caption:"HACKATHON PROJECT WINNER • VISUAL DESIGN • DEVELOPMENT"}),o.createElement(a.S,{src:"../../images/pomopals/hero.png",alt:"Hero",__imageData:i(5912)}),o.createElement(p.Z,null,o.createElement("h3",null,"Background"),o.createElement("p",null,"PomoPals is a web app built for Hack&Roll 2022, Singapore's largest student-run hackathon with 700 participants and 250 hacks.",o.createElement("br",null),o.createElement("br",null),"My team worked on PomoPals, an easy to use and intuitive virtual room for groups of friends and remote teams to come together. All users have to do is create a room and share the link with friends. In the room, they are able to start a pomodoro timer together, chat, take breaks together and write down their tasks for each other to see, among other features. Most importantly we want to encourage users to come together virtually and keep each other's productivity in check!",o.createElement("br",null),o.createElement("br",null),"For this project, I worked on the design and front-end."),o.createElement(c.Z,{links:x})),o.createElement(p.Z,null,o.createElement("h3",null,"Tech stack: ",o.createElement("br",null)," React, NodeJS, PostgresQL, socket.io"),o.createElement("p",null,"As a student myself, I was invested in the desire to make the application one that I would actually willingly use, so I had to dig deep to get in touch with what would actually motivate me to study and feel refreshed in between breaks. This informed the design language of the app, primarily the ability to toggle between room themes, where the screen would turn to a colorful and energetic shade, providing a breath of fresh air in between pomodoros.")),o.createElement(l.Z,{leftItems:b,rightItems:w}),o.createElement(a.S,{src:"../../images/pomopals/pomoEnd.png",alt:"End image",__imageData:i(8516)}),o.createElement(m.Z,null))}},8516:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8c8","images":{"fallback":{"src":"/static/2f2f7f759ea028a7473322dfefe8ba3e/489d0/pomoEnd.png","srcSet":"/static/2f2f7f759ea028a7473322dfefe8ba3e/17cee/pomoEnd.png 900w,\\n/static/2f2f7f759ea028a7473322dfefe8ba3e/ab4ca/pomoEnd.png 1800w,\\n/static/2f2f7f759ea028a7473322dfefe8ba3e/489d0/pomoEnd.png 3600w","sizes":"(min-width: 3600px) 3600px, 100vw"},"sources":[{"srcSet":"/static/2f2f7f759ea028a7473322dfefe8ba3e/3a9a8/pomoEnd.webp 900w,\\n/static/2f2f7f759ea028a7473322dfefe8ba3e/2f5f4/pomoEnd.webp 1800w,\\n/static/2f2f7f759ea028a7473322dfefe8ba3e/e4c00/pomoEnd.webp 3600w","type":"image/webp","sizes":"(min-width: 3600px) 3600px, 100vw"}]},"width":3600,"height":1923}')},5912:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/a9fca94f8a95ec747c1ea8e8efa934ea/21b15/hero.png","srcSet":"/static/a9fca94f8a95ec747c1ea8e8efa934ea/01504/hero.png 720w,\\n/static/a9fca94f8a95ec747c1ea8e8efa934ea/73bbe/hero.png 1440w,\\n/static/a9fca94f8a95ec747c1ea8e8efa934ea/21b15/hero.png 2880w","sizes":"(min-width: 2880px) 2880px, 100vw"},"sources":[{"srcSet":"/static/a9fca94f8a95ec747c1ea8e8efa934ea/110ca/hero.webp 720w,\\n/static/a9fca94f8a95ec747c1ea8e8efa934ea/8ff83/hero.webp 1440w,\\n/static/a9fca94f8a95ec747c1ea8e8efa934ea/9bc1a/hero.webp 2880w","type":"image/webp","sizes":"(min-width: 2880px) 2880px, 100vw"}]},"width":2880,"height":1620}')}}]);
//# sourceMappingURL=component---src-pages-projects-pomopals-js-fe5cd2e804ab5604e708.js.map
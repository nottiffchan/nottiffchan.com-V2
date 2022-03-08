"use strict";(self.webpackChunknottiffchan_com=self.webpackChunknottiffchan_com||[]).push([[819],{7072:function(e,n,t){var i=t(7294),a=t(4119);n.Z=function(e){return i.createElement(r,{projName:e.projName},i.createElement(o,null,i.createElement("div",{className:"header"},i.createElement("h1",null,e.projName)),i.createElement("h2",{className:"projDesc"},e.projDesc),e.caption&&i.createElement("p",{style:{color:"var(--grey)",fontSize:"16px",textTransform:"uppercase"}},e.caption)))};var r=a.default.header.withConfig({displayName:"projectHeader__StyledHeader",componentId:"sc-1fdhu2s-0"})(["position:relative;height:calc(55vh - 100px);min-height:200px;z-index:1;padding-top:100px;@media (min-width:768px){min-height:370px;height:",";}@media (min-width:360px){min-height:356px;}"],(function(e){return e.projName?"calc(80vh - 100px)":""})),o=a.default.div.withConfig({displayName:"projectHeader__TopHeadContainer",componentId:"sc-1fdhu2s-1"})(["padding:0 20px;display:flex;flex-direction:column;justify-content:center;height:100%;p{line-height:1.6;width:100%;}.header{margin:0 0 15px 0;perspective:600px;}.header h1{font-weight:500;font-size:17px;margin:0;}.projDesc{width:100%;font-size:28px;letter-spacing:0.03em;font-weight:500;margin:0 0 15px 0;color:var(--purple);}@media (min-width:360px){padding:0 30px;.projDesc{font-size:34px;}}@media (min-width:768px){padding:0 100px;p{width:80%;}.header{margin:0 0 18px 0;}.header h1{font-size:20px;line-height:250%;}.projDesc{width:80%;}}@media (min-width:1024px){padding:0 120px;}@media (min-width:1200px){padding:0 150px;.projDesc{font-size:5vw;}}@media (min-width:1350px){padding:0 180px;}@media (min-width:1900px){.projDesc{font-size:100px;}}"])},7597:function(e,n,t){var i=t(7294),a=t(4119),r=t(1112);n.Z=function(e){var n=(0,r.DI)(),t=(0,r.mX)().cursorStyles,a=function(e){e=t.includes(e)&&e||!1,n({type:"CURSOR_TYPE",cursorType:e})},l=e.links.map((function(e){return i.createElement(p,{key:e.name,href:e.link,target:"_blank",onMouseEnter:function(){return a("pointer")},onMouseLeave:a},i.createElement("span",null,e.name))}));return i.createElement(o,null,l)};var o=a.default.div.withConfig({displayName:"projectLinkContainer__StyledLinkContainer",componentId:"sc-msjzcl-0"})(["margin:-10px -15px;padding:32px 0 0 0;@media (min-width:768px){margin:-10px -20px;padding:40px 0 0 0;}@media (min-width:1200px){margin:-12px -32px;}"]),p=a.default.a.withConfig({displayName:"projectLinkContainer__StyledLink",componentId:"sc-msjzcl-1"})(['position:relative;display:inline-block;margin:10px 15px;padding:5px 0;font-size:18px;font-weight:500;vertical-align:middle;text-decoration:none;color:var(--purple);cursor:none;&:before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--purple);transition:transform 1s cubic-bezier(0.19,1,0.22,1),-webkit-transform 1s cubic-bezier(0.19,1,0.22,1),-moz-transform 1s cubic-bezier(0.19,1,0.22,1),-o-transform 1s cubic-bezier(0.19,1,0.22,1);}&:hover:before{transform:scaleX(0);}&:after{content:"";display:block;position:absolute;top:-25px;left:-5px;right:-5px;bottom:-25px;}@media (min-width:768px){margin:10px 20px;padding:7px 0;font-size:20px;}@media (min-width:1200px){margin:12px 32px;}'])},286:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(7294),a=t(4119),r=t(1112),o=t(8917),p=t(5277);function l(){var e=(0,r.DI)(),n=(0,r.mX)().cursorStyles,t=function(t){t=n.includes(t)&&t||!1,e({type:"CURSOR_TYPE",cursorType:t})},a="undefined"!=typeof window?window.location.pathname:"";return i.createElement(s,null,i.createElement(o.Z,{paintDrip:!0,onMouseEnter:function(){return t("pointer")},onMouseLeave:t,onClick:t,to:"/projects",hex:"#5f3962"},i.createElement("h3",null,"All")),p.c.map((function(e){return i.createElement(o.Z,{paintDrip:!0,hex:e.transitionCol,to:e.link,style:{paddingLeft:"20px"},onMouseEnter:function(){return t("pointer")},onMouseLeave:t,onClick:t},i.createElement("h3",{class:a.includes(e.link)?"active":""},e.title))})))}var s=a.default.div.withConfig({displayName:"projectNextCase__NextCaseWrap",componentId:"sc-1b2ernm-0"})(["width:100%;padding:200px 0;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;h1{font-size:54px;color:var(--black);text-decoration:underline;}h3{color:var(--grey);opacity:0.4;margin:12px 0;}.active{color:var(--purple);opacity:1;}@media (max-width:768px){padding:100px 0;}"])},4912:function(e,n,t){var i=t(7294),a=t(4119);n.Z=function(e){return i.createElement(r,null,e.children)};var r=a.default.div.withConfig({displayName:"projectScreenshotContainer__ScreenshotContainer",componentId:"sc-1vaakzc-0"})(["padding:30px 15px;position:relative;display:block;overflow:hidden;perspective:100px;@media (min-width:768px){padding:0 60px;}@media (min-width:1200px){padding:0 90px;}@media (min-width:1600px){padding:0 140px;}video{top:0;left:0;right:0;bottom:0;width:100%;object-fit:cover;}img{top:0;left:0;right:0;bottom:0;width:100%;object-fit:cover;}"])},8119:function(e,n,t){var i=t(7294),a=t(4119);n.Z=function(e){return i.createElement(r,null,i.createElement(o,null,e.children))};var r=a.default.div.withConfig({displayName:"projectTextSection__TopHeadContainer",componentId:"sc-1pd91mi-0"})(["padding:0 20px;display:flex;flex-direction:column;justify-content:center;height:100%;p{line-height:1.6;width:100%;}small{text-transform:uppercase;font-weight:500;line-height:40px;color:var(--grey);}.header{margin:0 0 15px 0;perspective:600px;}.header h1{font-weight:500;font-size:17px;margin:0;}.projDesc{font-size:28px;letter-spacing:0.03em;font-weight:500;margin:0;color:var(--purple);}@media (min-width:360px){padding:0 30px;.projDesc{font-size:34px;}}@media (min-width:768px){padding:0 100px;p{width:80%;}.header{margin:0 0 18px 0;}.header h1{font-size:20px;line-height:250%;}}@media (min-width:1024px){padding:0 120px;}@media (min-width:1200px){padding:0 150px;.projDesc{font-size:5vw;}}@media (min-width:1350px){padding:0 180px;}@media (min-width:1900px){.projDesc{font-size:100px;}}"]),o=a.default.section.withConfig({displayName:"projectTextSection__Container",componentId:"sc-1pd91mi-1"})(["padding:100px 0;padding-bottom:60px;h3{margin:0;margin-bottom:30px;color:var(--purple);font-size:38px;font-weight:500;}h4{margin:0;margin-bottom:30px;color:var(--purple);font-size:28px;font-weight:500;}@media (min-width:360px){padding-bottom:85px;h3{font-size:42px;}}@media (min-width:768px){padding-bottom:150px;h3{font-size:48px;}}@media (min-width:1350px){h3{font-size:56px;}}"])},5277:function(e,n,t){t.d(n,{U:function(){return p},c:function(){return l}});var i={title:"larry",description:"Mobile app for learning vocabulary",tags:"solo project • ux design • prototyping",transitionCol:"#EBF9FF",link:"/projects/larry",imageUrl:"./thumbnails/larryThumbnail.png",squareImageUrl:"./thumbnails/larryThumbnailSquare.png"},a={title:"PomoPals",description:"Pomodoro timer for remote teams",tags:"hackathon project winner • visual design • development",transitionCol:"#FFF0F0",link:"/projects/pomopals",imageUrl:"./thumbnails/pomopalsThumbnail.png",squareImageUrl:"./thumbnails/pomopalsThumbnailSquare.png"},r={title:"NUSModPlanner",description:"Improving the module planning process in NUS",tags:"team project • ux design • prototyping",link:"/projects/nusmodplanner/",transitionCol:"#FEEEE7",imageUrl:"./thumbnails/nusmodplannerThumbnail.png",squareImageUrl:"./thumbnails/nusmodplannerThumbnailSquare.png"},o={title:"Rescale Lab",description:"SaaS platform for entrepreneurs",tags:"internship • ux design • prototyping",link:"/projects/rescaleLab/",transitionCol:"#EBF5F0",imageUrl:"./thumbnails/rescaleLabThumbnail.png",squareImageUrl:"./thumbnails/rescaleLabThumbnailSquare.png"},p=[i,o,r,a],l=[i,o,r,a,{title:"berry",description:"Tile-style shopping list mobile app",tags:"solo project • visual design • development",link:"/projects/berry/",transitionCol:"#F8F0FA",imageUrl:"./thumbnails/berryThumbnail.png",squareImageUrl:"./thumbnails/berryThumbnailSquare.png"},{title:"vibing.",description:"Creating Spotify playlists for friends",tags:"hackathon project • visual design • development",link:"/projects/vibing/",transitionCol:"#EFF6FB",imageUrl:"./thumbnails/vibingThumbnail.png",squareImageUrl:"./thumbnails/vibingThumbnailSquare.png"}]},8004:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var i=t(6125),a=t(2785),r=t(7294),o=t(7072),p=t(8119),l=t(7597),s=t(4912),d=t(286),c=t.p+"static/nmpDesignSystem-420051bc67be390dbe9f585270bf5985.png",m=[{link:"https://uxfol.io/p/a239d4e7/038fbf2e",name:"Full Case Study"},{link:"https://www.figma.com/proto/AjQEKpTigbvI5g73TaijsN/G2?page-id=194%3A5756&node-id=1212%3A44244&viewport=241%2C48%2C0.1&scaling=scale-down&starting-point-node-id=1212%3A44244",name:"Figma Prototype"}];function h(){return r.createElement(a.Z,{title:"NUSModPlanner – Tiffany Chan"},r.createElement(o.Z,{projName:"NUSModPlanner",projDesc:"Improving the module planning process in NUS",caption:"team project • ux design • prototyping"}),r.createElement(i.S,{src:"../../images/nusmodplanner/hero.png",alt:"Hero image",__imageData:t(5823)}),r.createElement(p.Z,null,r.createElement("h3",null,"Background"),r.createElement("p",null,"NUS students undergo a stressful and tedious module planning process every semester, as the process of obtaining accurate and useful information to decide which modules to read is too troublesome and inefficient.",r.createElement("br",null),r.createElement("br",null),"My team’s solution was an all-in-one platform made by NUS students, for NUS students. Our design streamlines the module planning process by providing all the information that a student might need to plan their semesters. This project is a full UXUI case study as part of the module CS3240 Interactive Design, which achieved an A+ that semester and the Huawei Award for Future Interaction Design."),r.createElement(l.Z,{links:m})),r.createElement(s.Z,null,r.createElement("img",{src:c,alt:"Design system"})),r.createElement(p.Z,null,r.createElement("p",null,"Coming from a Computer Science technical background, I’d never taken a formal course in UX design and my only knowledge on its processes was piecing together bits of hundreds of Google searches, all which had their own opinion on what the proper UX process should be. My interface designs had hitherto been mostly based on intuition and aesthetic, rather than backed by actual user feedback and theory."),r.createElement("p",null,"This project was so fun for me since I finally could fill in the gaps in my knowledge and get to execute the entire process, and have an excuse to interview my poor friends. The coolest part for me was discovering useful revelations from brainstorming and user interviews, which I had previously assumed were redundant, and getting to use these ideas and see them come to life in the prototype.")),r.createElement(d.Z,null))}},5823:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b559debd049cf44b640fbfc1bc413f03/21b15/hero.png","srcSet":"/static/b559debd049cf44b640fbfc1bc413f03/01504/hero.png 720w,\\n/static/b559debd049cf44b640fbfc1bc413f03/73bbe/hero.png 1440w,\\n/static/b559debd049cf44b640fbfc1bc413f03/21b15/hero.png 2880w","sizes":"(min-width: 2880px) 2880px, 100vw"},"sources":[{"srcSet":"/static/b559debd049cf44b640fbfc1bc413f03/110ca/hero.webp 720w,\\n/static/b559debd049cf44b640fbfc1bc413f03/8ff83/hero.webp 1440w,\\n/static/b559debd049cf44b640fbfc1bc413f03/9bc1a/hero.webp 2880w","type":"image/webp","sizes":"(min-width: 2880px) 2880px, 100vw"}]},"width":2880,"height":1620}')}}]);
//# sourceMappingURL=component---src-pages-projects-nusmodplanner-js-36acc335b51cd7aa149a.js.map
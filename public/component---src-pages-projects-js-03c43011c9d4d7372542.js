"use strict";(self.webpackChunknottiffchan_com=self.webpackChunknottiffchan_com||[]).push([[853],{7072:function(e,i,t){var n=t(7294),a=t(4119);i.Z=function(e){return n.createElement(r,{projName:e.projName},n.createElement(p,null,n.createElement("div",{className:"header"},n.createElement("h1",null,e.projName)),n.createElement("h2",{className:"projDesc"},e.projDesc),e.caption&&n.createElement("p",{style:{color:"var(--grey)",fontSize:"16px",textTransform:"uppercase"}},e.caption)))};var r=a.default.header.withConfig({displayName:"projectHeader__StyledHeader",componentId:"sc-1fdhu2s-0"})(["position:relative;height:calc(55vh - 100px);min-height:200px;z-index:1;padding-top:100px;@media (min-width:768px){min-height:370px;height:",";}@media (min-width:360px){min-height:356px;}"],(function(e){return e.projName?"calc(80vh - 100px)":""})),p=a.default.div.withConfig({displayName:"projectHeader__TopHeadContainer",componentId:"sc-1fdhu2s-1"})(["padding:0 20px;display:flex;flex-direction:column;justify-content:center;height:100%;p{line-height:1.6;width:100%;}.header{margin:0 0 15px 0;perspective:600px;}.header h1{font-weight:500;font-size:17px;margin:0;}.projDesc{width:100%;font-size:28px;letter-spacing:0.03em;font-weight:500;margin:0 0 15px 0;color:var(--purple);}@media (min-width:360px){padding:0 30px;.projDesc{font-size:34px;}}@media (min-width:768px){padding:0 100px;p{width:80%;}.header{margin:0 0 18px 0;}.header h1{font-size:20px;line-height:250%;}.projDesc{width:80%;}}@media (min-width:1024px){padding:0 120px;}@media (min-width:1200px){padding:0 150px;.projDesc{font-size:5vw;}}@media (min-width:1350px){padding:0 180px;}@media (min-width:1900px){.projDesc{font-size:100px;}}"])},9423:function(e,i,t){var n=t(7294),a=t(4119),r=t(1112),p=t(8917);i.Z=function(e){var i=(0,r.DI)(),t=(0,r.mX)().cursorStyles,a=function(e){e=t.includes(e)&&e||!1,i({type:"CURSOR_TYPE",cursorType:e})};return n.createElement(m,null,n.createElement("div",{className:"container"},n.createElement("div",{className:"items"},n.createElement("div",{className:"left-col"},e.leftItems.map((function(i,t){return n.createElement(o,{key:t,item:i,i:t,clickable:e.clickable,onCursor:a})}))),n.createElement("div",{className:"right-col"},e.rightItems.map((function(i,t){return n.createElement(o,{key:t,item:i,i:t,clickable:e.clickable,onCursor:a})}))))))};var o=function(e){var i=e.item,t=e.i,a=e.clickable,r=e.onCursor;return n.createElement(l,{key:t},a?n.createElement(p.Z,{paintDrip:!0,onMouseEnter:function(){return r("viewCase")},onMouseLeave:r,onClick:r,className:"img-wrapper",to:i.link},n.createElement("img",{src:i.imgSrc,alt:"Supporting"})):n.createElement("div",{className:"img-wrapper"},n.createElement("img",{src:i.imgSrc,alt:"Supporting"})),n.createElement("div",{className:"caption"},i.caption),a&&n.createElement(n.Fragment,null,n.createElement("b",null,i.description),n.createElement("div",{style:{color:"var(--grey)",paddingTop:"8px",fontSize:"var(--text-xs)"}},i.tags)))},l=a.default.div.withConfig({displayName:"projectSplitshow__StyledSplitshowItem",componentId:"sc-1ug36su-0"})(["display:block;margin:12px -14px;text-align:center;padding-bottom:40px;.img-wrapper{padding-bottom:100%;position:relative;display:block;overflow:hidden;}.img-wrapper:hover{cursor:none;}img{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;vertical-align:middle;}.caption{display:block;margin:0 auto;padding-top:40px;padding-bottom:8px;max-width:270px;font-size:20px;line-height:150%;text-align:center;}@media (min-width:360px){margin:14px -23px;}@media (min-width:768px){margin:14px 12px;.caption{max-width:220px;font-size:16px;}}@media (min-width:1024px){margin:34px 17px;.caption{max-width:284px;font-size:18px;}}@media (min-width:1200px){margin:40px 20px;.caption{max-width:318px;font-size:22px;}}@media (min-width:1600px){margin:32px 16px;}"]),m=a.default.div.withConfig({displayName:"projectSplitshow__SplitshowSection",componentId:"sc-1ug36su-1"})(["padding-bottom:120px;.container{padding:0 20px;}.items{margin:-12px -6px;}.left-col,.right-col{flex:1;}@media (min-width:360px){.container{padding:0 30px;}.items{margin:-14px -7px;}}@media (min-width:768px){.container{padding:0 100px;}.items{display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:-24px -12px;}.right-col{margin:122px 0 0 0;}}@media (min-width:1024px){.container{padding:0 120px;}.items{margin:-34px -17px;}.right-col{margin:170px 0 0 0;}}@media (min-width:1200px){.container{padding:0 150px;}.items{margin:-40px -20px;}.right-col{margin:193px 0 0 0;}}@media (min-width:1350px){.container{padding:0 180px;}}@media (min-width:1600px){.container{padding:0 220px;}.items{margin:-32px -16px;}}@media (min-width:1900px){.container{padding:0 270px;width:100%;max-width:1900px;margin:0 auto;}.right-col{margin:250px 0 0 0;}}"])},5277:function(e,i,t){t.d(i,{U:function(){return o},c:function(){return l}});var n={title:"larry",description:"Mobile app for learning vocabulary",tags:"solo project • ux design • prototyping",transitionCol:"#EBF9FF",link:"/projects/larry",imageUrl:"./thumbnails/larryThumbnail.png",squareImageUrl:"./thumbnails/larryThumbnailSquare.png"},a={title:"PomoPals",description:"Pomodoro timer for remote teams",tags:"hackathon project winner • visual design • development",transitionCol:"#F0F1FF",link:"/projects/pomopals",imageUrl:"./thumbnails/pomopalsThumbnail.png",squareImageUrl:"./thumbnails/pomopalsThumbnailSquare.png"},r={title:"NUSModPlanner",description:"Improving the module planning process in NUS",tags:"team project • ux design • prototyping",link:"/projects/nusmodplanner/",transitionCol:"#FEEEE7",imageUrl:"./thumbnails/nusmodplannerThumbnail.png",squareImageUrl:"./thumbnails/nusmodplannerThumbnailSquare.png"},p={title:"Rescale Lab",description:"SaaS platform for entrepreneurs",tags:"internship • ux design • prototyping",link:"/projects/rescaleLab/",transitionCol:"#EBF5F0",imageUrl:"./thumbnails/rescaleLabThumbnail.png",squareImageUrl:"./thumbnails/rescaleLabThumbnailSquare.png"},o=[n,p,r,a],l=[n,p,r,a,{title:"berry",description:"Tile-style shopping list mobile app",tags:"solo project • visual design • development",link:"/projects/berry/",transitionCol:"#F8F0FA",imageUrl:"./thumbnails/berryThumbnail.png",squareImageUrl:"./thumbnails/berryThumbnailSquare.png"},{title:"vibing.",description:"Creating Spotify playlists for friends",tags:"hackathon project • visual design • development",link:"/projects/vibing/",transitionCol:"#EFF6FB",imageUrl:"./thumbnails/vibingThumbnail.png",squareImageUrl:"./thumbnails/vibingThumbnailSquare.png"}]},7744:function(e,i,t){t.r(i),t.d(i,{default:function(){return l}});var n=t(7294),a=t(2785),r=t(7072),p=t(9423),o=t(5277);function l(){var e=[],i=[];return o.c.map((function(t,n){n%2==0?e.push({imgSrc:t.squareImageUrl,caption:t.title,description:t.description,tags:t.tags,transitionCol:t.transitionCol,link:t.link}):i.push({imgSrc:t.squareImageUrl,caption:t.title,description:t.description,tags:t.tags,transitionCol:t.transitionCol,link:t.link})})),n.createElement(a.Z,{title:"Projects – Tiffany Chan"},n.createElement(r.Z,{projDesc:"all projects"}),n.createElement(p.Z,{clickable:!0,leftItems:e,rightItems:i}))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-03c43011c9d4d7372542.js.map
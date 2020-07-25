(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(1),c=a.n(o),l=a(2),u=a(3),d=a(6);class h extends r.PureComponent{render(){return n.a.createElement("p",{className:"forecast__temperature"},this.props.temperature,n.a.createElement("span",{className:"temperature__unit-dot"}))}}var m=h,p=function(e,t=0){const a=(new Date).getTime(),r={};return r.value=requestAnimationFrame((function n(){(new Date).getTime()-a>=t?e.call():r.value=requestAnimationFrame(n)})),r};a(13);const f={"wi-cloudy":a.p+"static/media/wi-cloudy.747252b0.svg","wi-day-cloudy":a.p+"static/media/wi-day-cloudy.66af1915.svg","wi-day-sunny":a.p+"static/media/wi-day-sunny.ea5fd34d.svg","wi-fog":a.p+"static/media/wi-fog.e0112c7f.svg","wi-night-alt-cloudy":a.p+"static/media/wi-night-alt-cloudy.acccbdc9.svg","wi-night-clear":a.p+"static/media/wi-night-clear.94b45031.svg","wi-rain":a.p+"static/media/wi-rain.653d9c8a.svg","wi-sleet":a.p+"static/media/wi-sleet.e4b06b7f.svg","wi-snow":a.p+"static/media/wi-snow.0eaf9625.svg","wi-windy":a.p+"static/media/wi-windy.b0b1663e.svg"};var w=e=>{const t={"clear-day":{id:"wi-day-sunny"},"clear-night":{id:"wi-night-clear"},"partly-cloudy-day":{id:"wi-day-cloudy"},"partly-cloudy-night":{id:"wi-night-alt-cloudy"},cloudy:{id:"wi-cloudy"},rain:{id:"wi-rain"},sleet:{id:"wi-sleet"},snow:{id:"wi-snow"},wind:{id:"wi-windy"},fog:{id:"wi-fog"}}[e];if(t)return t;throw new Error("No icon registered with the key: ".concat(e))};class g extends r.PureComponent{constructor(){super(),this.forecast=n.a.createRef()}animate(){p(()=>this.forecast.current.classList.add("animate-in"),100),p(()=>this.title.classList.add("animate-in"),200),p(()=>this.icon.classList.add("animate-in"),250),p(()=>{this.temperature.map(e=>e.classList.add("animate-in"))},350),p(()=>this.rain.classList.add("animate-in"),400)}componentDidMount(){this.title=this.forecast.current.querySelector(".forecast__title"),this.icon=this.forecast.current.querySelector(".forecast__icon"),this.temperature=[...this.forecast.current.querySelectorAll(".forecast__temperature")],this.rain=this.forecast.current.querySelector(".rain"),p(()=>this.animate(),100*this.props.animationDelay)}render(){return n.a.createElement("div",{ref:this.forecast,className:"forecast","data-id":this.props.id},n.a.createElement("span",{className:"forecast__title"},this.props.title),n.a.createElement("img",{className:"forecast__icon",alt:"icon",src:f[this.props.icon]}),this.props.children)}}var y=g,b=a.p+"static/media/rain-probality.5e59ef5e.svg";a(14);class v extends r.PureComponent{render(){return n.a.createElement("div",{className:"rain"},n.a.createElement("img",{width:"24",height:"24",className:"rain__icon",src:b,alt:"rain probability ".concat(this.props.probability)}),n.a.createElement("span",{className:"rain__probability"},"".concat(this.props.probability,"%")))}}var C=v;class E extends r.PureComponent{render(){return n.a.createElement("section",{className:"forecasts__period swiper-slide"},this.props.foreCastHourly.map((e,t)=>n.a.createElement(y,{key:"hourly-".concat(t),id:"hourly-".concat(t),title:"".concat(e.time,":00"),icon:e.icon,animationDelay:t},n.a.createElement(m,{temperature:e.temperature}),n.a.createElement(C,{probability:e.rainProbability}))))}}var k=E;class x extends r.PureComponent{render(){return n.a.createElement("section",{className:"forecasts__period forecasts--daily swiper-slide"},this.props.foreCastDaily.map((e,t)=>n.a.createElement(y,{key:"daily-".concat(t),id:"daily-".concat(t),title:e.weekDay,icon:e.icon,animationDelay:t},n.a.createElement("div",null,n.a.createElement(m,{temperature:e.temperature.max}),n.a.createElement(m,{temperature:e.temperature.min})),n.a.createElement(C,{probability:e.rainProbability}))))}}var L=x;a(15);class _ extends r.PureComponent{constructor(){super(),this.icon=n.a.createRef(),this.text=n.a.createRef()}animate(){p(()=>this.icon.current.classList.add("animate-in"),250),p(()=>this.text.current.classList.add("animate-in"),350)}componentDidMount(){p(()=>this.animate(),350)}render(){return n.a.createElement("section",{className:"location"},n.a.createElement("span",{ref:this.icon,className:"location__icon"},n.a.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",id:"location",version:"1.1",viewBox:"0 0 24 24",width:"24px"},n.a.createElement("path",{d:"M11.513,12.38c-2.117,0-3.835-1.729-3.835-3.862c0-2.135,1.718-3.863,3.835-3.863s3.835,1.729,3.835,3.863  C15.348,10.65,13.63,12.38,11.513,12.38 M11.513,0C6.825,0,3.025,3.827,3.025,8.549c0,4.46,3.844,10.213,6.411,13.014  c0.959,1.045,2.076,2.454,2.076,2.454s1.2-1.417,2.229-2.493C16.306,18.84,20,13.451,20,8.549C20,3.827,16.2,0,11.513,0"}))),n.a.createElement("span",{ref:this.text,className:"location__text"},this.props.location))}}var P=_;a(16);class I extends r.PureComponent{constructor(){super(),this.status=n.a.createRef(),this.value=n.a.createRef(),this.unit=n.a.createRef()}animate(){p(()=>this.status.current.classList.add("animate-in"),150),p(()=>this.value.current.classList.add("animate-in"),250),p(()=>this.unit.current.classList.add("animate-in"),300)}componentDidMount(){p(()=>this.animate(),400)}render(){return n.a.createElement("section",{className:"current-condition"},n.a.createElement("div",{className:"wrapper-temperature"},n.a.createElement("span",{ref:this.status,className:"temperature__status"},this.props.weather),n.a.createElement("div",{className:"temperature"},n.a.createElement("span",{ref:this.value,className:"temperature__value"},this.props.temperature),n.a.createElement("div",{ref:this.unit,className:"temperature__unit"},n.a.createElement("span",{className:"temperature__unit-dot"}),n.a.createElement("span",{className:"temperature__unit-letter"},"c")))))}}var D=I;a(17);class S extends r.PureComponent{constructor(){super(),this.navigation=n.a.createRef()}animate(){p(()=>{this.dots.map((e,t)=>(p(()=>e.classList.add("animate-in"),150*t),e))},350)}componentDidMount(){this.dots=[...this.navigation.current.querySelectorAll(".navigation__dot")],p(()=>this.animate(),350)}render(){return n.a.createElement("section",{ref:this.navigation,className:"navigation ".concat(this.props.currentForecast)},n.a.createElement("div",{className:"navigation__dot"}),n.a.createElement("div",{className:"navigation__dot"}))}}var N=S;a(18);class M extends r.PureComponent{constructor(){super(),this.button=n.a.createRef(),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this)}animate(){p(()=>this.button.current.classList.add("animate-in"),430)}onMouseDown(){p(()=>this.button.current.classList.add("press"),1)}onMouseUp(){p(()=>this.button.current.classList.remove("press"),1)}componentDidMount(){p(()=>this.animate(),350)}render(){return n.a.createElement("button",{ref:this.button,type:"button",className:"gps-location","aria-label":"Get current location",onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUp,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onClick:this.props.onGPSLocationClick},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"gpslocation",viewBox:"0 0 96 96"},n.a.createElement("g",{id:"XMLID_1_"},n.a.createElement("circle",{id:"XMLID_3_",cx:"48",cy:"48",r:"9.8"}),n.a.createElement("path",{id:"XMLID_6_",d:"M80.5 44.8h-6.7C72.3 33 63 23.7 51.3 22.2v-6.7h-6.5v6.7C33 23.7 23.7 33 22.2 44.8h-6.7v6.5h6.7C23.7 63 33 72.3 44.8 73.8v6.7h6.5v-6.7C63 72.3 72.3 63 73.8 51.3h6.7v-6.5zM48 67.5c-10.8 0-19.5-8.7-19.5-19.5S37.2 28.5 48 28.5 67.5 37.2 67.5 48 58.8 67.5 48 67.5z"}))))}}var R=M;a(19);class G extends r.PureComponent{constructor(){super(),this.button=n.a.createRef()}animate(){p(()=>this.button.current.classList.add("animate-in"),500)}componentDidMount(){p(()=>this.animate(),350)}render(){return n.a.createElement("button",{ref:this.button,type:"button",className:"button-info","aria-label":"Information",onClick:this.props.onInfoClick},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.813c-.184 0-.336-.004-.5.03a1.127 1.127 0 0 0-.438.22.98.98 0 0 0-.28.375c-.071.152-.095.332-.095.562 0 .227.024.406.094.563.07.156.16.28.281.375.122.093.274.148.438.187.164.04.316.063.5.063.18 0 .371-.024.531-.063.16-.04.285-.094.406-.188a.951.951 0 0 0 .282-.375c.07-.152.125-.335.125-.562 0-.23-.055-.41-.125-.563a.98.98 0 0 0-.281-.375c-.122-.093-.247-.183-.407-.218-.16-.035-.351-.032-.531-.032zm-1.219 3.343v8.969h2.438V9.156z"})))}}var A=G;a(20);class j extends r.PureComponent{constructor(){super(),this.text=n.a.createRef()}animate(){p(()=>this.text.current.classList.add("animate-in"),400)}componentDidMount(){p(()=>this.animate(),350)}render(){return n.a.createElement("section",{className:"date-current"},n.a.createElement("span",{ref:this.text,className:"date-current__text"},this.props.date))}}var O=j;a(21);class U extends r.PureComponent{constructor(){super(),this.view=n.a.createRef(),this.button=n.a.createRef(),this.getClass=this.getClass.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this)}animate(){p(()=>this.view.current.classList.add("animate-in"),350)}onMouseDown(){p(()=>this.button.current.classList.add("press"),1)}onMouseUp(){p(()=>this.button.current.classList.remove("press"),1)}componentDidMount(){p(()=>this.animate(),350)}getClass({updating:e}){let t="";return this.view.current&&(t="animate-in"),"refresh ".concat(t," ").concat(e?"fetching":"")}render(){return n.a.createElement("section",{ref:this.view,className:"".concat(this.getClass(this.props))},n.a.createElement("span",{className:"refresh__time"},this.props.time),n.a.createElement("button",{ref:this.button,type:"button",className:"button-refresh","aria-label":"Refresh content",onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUp,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onClick:this.props.onClick},n.a.createElement("svg",{viewBox:"0 0 96 96"},n.a.createElement("path",{d:"M48 15.5c-8.8 0-17 3.5-23 9.5l-6.3-6.3v19.5h19.5l-8.6-8.6C34.4 24.8 40.9 22 48 22c14.3 0 26 11.7 26 26S62.3 74 48 74 22 62.3 22 48h-6.5c0 17.9 14.6 32.5 32.5 32.5S80.5 65.9 80.5 48 65.9 15.5 48 15.5z"}))))}}var F=U;class T extends r.PureComponent{constructor(){super(),this.state={currentForecast:"hourly",forecastIndex:["hourly","daily"]}}componentDidMount(){this.forecasts=[...document.querySelectorAll(".forecasts__period")],this.swiper=new d.a(".swiper-container",{direction:"horizontal",loop:!1}),this.swiper.on("slideChangeTransitionEnd",()=>{this.setState({currentForecast:this.state.forecastIndex[this.swiper.activeIndex]})})}render(){return n.a.createElement(r.Fragment,null,n.a.createElement(R,{onGPSLocationClick:this.props.onGPSLocationClick}),n.a.createElement(A,{onInfoClick:this.props.onInfoClick,onInfoClose:this.props.onInfoClose}),n.a.createElement(P,{location:this.props.currentCondition.location}),n.a.createElement(O,{date:this.props.currentCondition.date}),n.a.createElement(D,{weather:this.props.currentCondition.weather,temperature:this.props.currentCondition.temperature}),n.a.createElement(F,{onClick:this.props.onRefreshClick,updating:this.props.updating,time:this.props.lastUpdate}),n.a.createElement("section",{className:"forecasts"},n.a.createElement("div",{className:"forecasts__scroll-panel swiper-container"},n.a.createElement("div",{className:"swiper-wrapper"},n.a.createElement(k,{foreCastHourly:this.props.foreCastHourly}),n.a.createElement(L,{foreCastDaily:this.props.foreCastDaily}))),n.a.createElement(N,{currentForecast:this.state.currentForecast})))}}var H=T;a(22);class q extends r.PureComponent{constructor(){super(),this.button=n.a.createRef()}animate(){p(()=>this.button.current.classList.add("animate-in"),1)}hide(){p(()=>this.button.current.classList.remove("animate-in"),1)}render(){return n.a.createElement("button",{ref:this.button,type:"button",className:"button-close","aria-label":"Close view",onClick:this.props.onCloseClick},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#fff",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},n.a.createElement("path",{d:"M18 6L6 18M6 6l12 12"})))}}var z=q,W=a.p+"static/media/github.ce7e815e.svg";a(23),a(24);class B extends r.PureComponent{constructor(){super(),this.transition=n.a.createRef(),this.view=n.a.createRef(),this.close=n.a.createRef(),this.onInfoClose=this.onInfoClose.bind(this)}onInfoClose(){p(()=>this.view.current.classList.remove("animate-in"),1),p(()=>this.close.current.hide(),20),p(()=>this.transition.current.classList.remove("animate-in"),100),p(()=>{this.props.onInfoClose(),this.view.current.setAttribute("aria-hidden",!0)},110)}getStyle(e){return e?(p(()=>this.transition.current.classList.add("animate-in"),1),p(()=>this.close.current.animate(),50),p(()=>{this.view.current.classList.remove("hide"),this.view.current.classList.add("animate-in"),this.view.current.setAttribute("aria-hidden",!1)},150),""):""}render(){return n.a.createElement(r.Fragment,null,n.a.createElement("div",{ref:this.transition,className:"transition"}),n.a.createElement("section",{ref:this.view,className:"info ".concat(this.getStyle(this.props.show)),"aria-hidden":!0},n.a.createElement(z,{ref:this.close,onCloseClick:this.onInfoClose}),n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"PWA Weather Application made with React/Scss/ES6"),n.a.createElement("p",null,"This is a personal project built in my spare time for learning purposes."),n.a.createElement("h2",null,"APIs"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"link",href:"https://www.ipify.org",target:"_blank",rel:"noopener noreferrer"},"Ipify (ip address)")),n.a.createElement("li",null,n.a.createElement("a",{className:"link",href:"https://ipstack.com",target:"_blank",rel:"noopener noreferrer"},"IpStack (ip based geolocation)")),n.a.createElement("li",null,n.a.createElement("a",{className:"link",href:"https://darksky.net",target:"_blank",rel:"noopener noreferrer"},"DarkSky (weather forecasting)")),n.a.createElement("li",null,n.a.createElement("a",{className:"link",href:"https://opencagedata.com/",target:"_blank",rel:"noopener noreferrer"},"OpenCage (reverse geolocation)"))),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/iondrimba/react-weather-app",className:"github",title:"Github"},n.a.createElement("img",{src:W,alt:"Github icon",width:"32",height:"32"}))))}}var J=B;a(25);class X extends r.PureComponent{constructor(){super(),this.loader=n.a.createRef(),this.circle=n.a.createRef(),this.rays=[]}_getCircle(){return this.circle.current?this.circle.current:document.querySelector(".loader__circle")}animateIn(){this.animateCircle(),p(()=>this.animateRays(),300),p(()=>this.startRotation(),500)}animateRays(){this.rays.map((e,t)=>(p(()=>e.classList.add("animate-in"),80*t),e))}startRotation(){p(()=>this._getCircle().classList.add("start-rotation"),300)}animateCircle(){p(()=>this._getCircle().classList.add("animate-in"),150)}animateOut(){p(()=>this._getCircle().classList.add("animate-out"),550),this.rays.map((e,t)=>(p(()=>e.classList.add("animate-out"),50*t),e))}componentDidMount(){this.rays=[...this._getCircle().querySelectorAll(".ray")]}render(){return n.a.createElement("div",{ref:this.loader,className:"loader"},n.a.createElement("div",{ref:this.circle,className:"loader__circle"},[0,1].map(e=>n.a.createElement("div",{key:"ray_".concat(e),className:"rays"},n.a.createElement("div",{className:"ray ray--north"}),n.a.createElement("div",{className:"ray ray--west"}),n.a.createElement("div",{className:"ray ray--south"}),n.a.createElement("div",{className:"ray ray--east"})))))}}var Q=X;a(26);class V extends r.PureComponent{render(){return n.a.createElement("div",{className:"error"},n.a.createElement("h1",null,":("),"This application uses a free service from ",n.a.createElement("a",{target:"blank",rel:"noopener",href:"https://ipstack.com/"},"https://ipstack.com/")," and the current usage exceded the reach limit.",n.a.createElement("br",null),n.a.createElement("br",null),"Please come back later.")}}var Y=V;var $=class{constructor(e){this.endpoint=e=>"https://weather-api-nodejs.herokuapp.com/api/ip?ip=".concat(e),this.data=null,this.secret=e}fetch(e){var t=this;return Object(l.a)(c.a.mark((function a(){var r,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(t.endpoint(e));case 3:return r=a.sent,a.next=6,r.json();case 6:n=a.sent,t.data=n,a.next=13;break;case 10:throw a.prev=10,a.t0=a.catch(0),new Error("IpGeoLocation unable to fetch: ".concat(a.t0.message));case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}};var K=class{constructor(e){this.secret=e,this.endpoint=(e,t)=>"https://weather-api-nodejs.herokuapp.com/api?latitude=".concat(e,"&longitude=").concat(t),this.data=null}fetch(e,t){var a=this;return Object(l.a)(c.a.mark((function r(){var n;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(a.endpoint(e,t));case 3:return n=r.sent,r.next=6,n.json();case 6:a.data=r.sent,r.next=12;break;case 9:throw r.prev=9,r.t0=r.catch(0),new Error("ForeCastAPI unable to fetch: ".concat(r.t0.message));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}};var Z=class{constructor(){this.endpoint=(e,t)=>"https://weather-api-nodejs.herokuapp.com/api/geolocation?latitude=".concat(e,"&longitude=").concat(t),this.data=null}fetch(e,t){var a=this;return Object(l.a)(c.a.mark((function r(){var n,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(a.endpoint(e,t));case 3:return n=r.sent,r.next=6,n.json();case 6:i=r.sent,a.data=i,r.next=13;break;case 10:throw r.prev=10,r.t0=r.catch(0),new Error("ReverseGeoLocation unable to fetch: ".concat(r.t0.message));case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}};var ee=class{constructor(){this.ip="",this.endpoint="https://api.ipify.org/?format=json"}fetch(){var e=this;return Object(l.a)(c.a.mark((function t(){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.endpoint);case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.ip=r.ip,t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(0),new Error("IpFetcher unable to fetch: ".concat(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}};const te=e=>e<10?"0".concat(e):e;var ae=function(e,t="en-US"){const a=(e=>{const t=new Date(1e3*e),a=t.getTime();return new Date(((e,t)=>{let a=t;return/GMT\+\d+/.test(e.toString())&&(a=t+6e4*e.getTimezoneOffset()),a})(t,a))})(e),r=a.getFullYear(),n=a.getDay();let i=a.getMonth()+1,s=a.getDate(),o=a.getHours(),c=a.getMinutes();i=te(i),s=te(s),o=te(o),c=te(c);return{localeDateString:a.toLocaleDateString(t,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),weekDay:n,day:s,month:i,year:r,hours:o,minutes:c}},re=e=>{const t=["sun","mon","tue","wed","thu","fri","sat"][e];if(t)return t;throw new Error("No weekday found for index: ".concat(e))},ne={showInfo:!1,dataLoaded:!1,latitude:0,longitude:0,updating:!1,lastUpdate:"00:00",currentCondition:{currentCondition:{location:"--",temperature:0,date:"--",weather:"Clear",dayTime:!1,humidity:0,dataLoaded:!1},foreCastDaily:[{weekDay:"mon",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"tue",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"wed",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"Thu",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"Fri",rainProbability:0,icon:"wi-fog",temperature:{max:0,min:0}}],foreCastHourly:[{time:0,rainProbability:0,temperature:23,icon:"wi-fog"},{time:0,rainProbability:0,temperature:25,icon:"wi-day-sunny"},{time:0,rainProbability:0,temperature:15,icon:"wi-day-sunny"},{time:0,rainProbability:0,temperature:16,icon:"wi-day-sunny"},{time:0,rainProbability:0,temperature:24,icon:"wi-day-sunny"}],location:"S\xe3o Paulo",date:"Sunday, August 12, 2018",temperature:17,weather:"Mostly Cloudy"},foreCastHourly:[{time:0,rainProbability:0,temperature:0,icon:"wi-day-cloudy"},{time:0,rainProbability:0,temperature:0,icon:"wi-day-cloudy"},{time:0,rainProbability:0,temperature:0,icon:"wi-day-cloudy"},{time:0,rainProbability:0,temperature:0,icon:"wi-night-clear"},{time:0,rainProbability:0,temperature:14,icon:"wi-night-clear"}],foreCastDaily:[{weekDay:"mon",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"tue",rainProbability:0,icon:"wi-day-sunny",temperature:{max:0,min:0}},{weekDay:"wed",rainProbability:0,icon:"wi-night-alt-cloudy",temperature:{max:0,min:0}},{weekDay:"thu",rainProbability:0,icon:"wi-cloudy",temperature:{max:0,min:0}},{weekDay:"fri",rainProbability:0,icon:"wi-cloudy",temperature:{max:0,min:0}}]};class ie{constructor(){this.ipFetcher=new ee,this.ipGeoLocation=new $,this.foreCastAPI=new K("#####"),this.reverseGeoLocation=new Z,this.data=Object(u.a)({},ne),this.currentDate=new Date}update(){this.ipGeoLocation.data.error||(this.data={latitude:this.foreCastAPI.data.latitude,longitude:this.foreCastAPI.data.longitude,lastUpdate:this.getLastUpdate(this.currentDate),currentCondition:Object(u.a)(Object(u.a)({},ne),{},{location:this.ipGeoLocation.data.city,date:ae(this.foreCastAPI.data.currently.time).localeDateString,temperature:Math.round(this.foreCastAPI.data.currently.temperature),weather:this.foreCastAPI.data.currently.summary}),foreCastHourly:this.foreCastAPI.data.hourly.data.slice(0,5).map(e=>({time:ae(e.time).hours,rainProbability:Math.round(100*e.precipProbability),temperature:Math.round(e.temperature),icon:w(e.icon).id})),foreCastDaily:this.foreCastAPI.data.daily.data.slice(1,6).map(e=>({weekDay:re(ae(e.time).weekDay),rainProbability:Math.round(100*e.precipProbability),icon:w(e.icon).id,temperature:{max:Math.round(e.temperatureMax),min:Math.round(e.temperatureMin)}}))})}getLastUpdate(e){return"".concat(te(e.getHours()),":").concat(te(e.getMinutes()))}_updateIP(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("ip")){t.next=4;break}e.ipFetcher.ip=localStorage.getItem("ip"),t.next=7;break;case 4:return t.next=6,e.ipFetcher.fetch();case 6:localStorage.setItem("ip",e.ipFetcher.ip);case 7:case"end":return t.stop()}}),t)})))()}_updateGeoLocation(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("geoLocation")){t.next=4;break}e.ipGeoLocation.data=JSON.parse(localStorage.getItem("geoLocation")),t.next=7;break;case 4:return t.next=6,e.ipGeoLocation.fetch(e.ipFetcher.ip);case 6:localStorage.setItem("geoLocation",JSON.stringify(e.ipGeoLocation.data));case 7:case"end":return t.stop()}}),t)})))()}_updateForecast(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("forecast")){t.next=4;break}e.foreCastAPI.data=JSON.parse(localStorage.getItem("forecast")),t.next=8;break;case 4:return t.next=6,e.foreCastAPI.fetch(e.ipGeoLocation.data.latitude,e.ipGeoLocation.data.longitude);case 6:localStorage.setItem("lastupdate",(new Date).getTime()),localStorage.setItem("forecast",JSON.stringify(e.foreCastAPI.data));case 8:case"end":return t.stop()}}),t)})))()}fetch(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._updateIP();case 2:return t.next=4,e._updateGeoLocation();case 4:return t.next=6,e._updateForecast();case 6:e.update();case 7:case"end":return t.stop()}}),t)})))()}getLocation(e,t){var a=this;return Object(l.a)(c.a.mark((function r(){var n,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.currentDate=new Date,n=Number(localStorage.getItem("lastupdate")),i=Math.abs(a.currentDate.getTime()-n)/36e5,a.foreCastAPI.data.latitude=e,a.foreCastAPI.data.longitude=t,a.data.lastUpdate=a.getLastUpdate(a.currentDate),r.next=8,a.reverseGeoLocation.fetch(e,t);case 8:if(!(i>1.05)){r.next=13;break}return r.next=11,a.foreCastAPI.fetch(e,t);case 11:localStorage.setItem("lastupdate",a.currentDate.getTime()),localStorage.setItem("forecast",JSON.stringify(a.foreCastAPI.data));case 13:a.ipGeoLocation.data.city=a.reverseGeoLocation.data[0].city||a.reverseGeoLocation.data[0].state,a.update();case 15:case"end":return r.stop()}}),r)})))()}}a(27);class se extends r.Component{constructor(){super(),this.loader=n.a.createRef(),this.onInfoClick=this.onInfoClick.bind(this),this.onInfoClose=this.onInfoClose.bind(this),this.onRefreshClick=this.onRefreshClick.bind(this),this.onGPSLocationClick=this.onGPSLocationClick.bind(this),this.storage=new ie("#####"),this.state=Object(u.a)({},this.storage.data)}init(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(()=>e.loader.current.animateIn(),100),t.next=3,e.storage.fetch();case 3:p(()=>{e.loader.current.animateOut(),p(()=>e.updatedState(e.storage),600)},1e3);case 4:case"end":return t.stop()}}),t)})))()}updatedState({ipGeoLocation:e,data:t}){e.data&&e.data.error?this.setState({error:e.data.error,dataLoaded:!0}):this.setState(Object(u.a)(Object(u.a)({},t),{},{showInfo:!1,dataLoaded:!0,updating:!1}))}onGetCurrentLocation({latitude:e,longitude:t}){var a=this;return Object(l.a)(c.a.mark((function r(){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.storage.getLocation(e,t);case 2:p(()=>a.updatedState(a.storage),600);case 3:case"end":return r.stop()}}),r)})))()}onGPSLocationClick(){this.state.updating||(this.setState({updating:!0}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{this.onGetCurrentLocation(e.coords)}))}onRefreshClick(){const e=this.storage.data,t=e.latitude,a=e.longitude;this.state.updating||(this.setState({updating:!0}),this.onGetCurrentLocation({latitude:t,longitude:a}))}onInfoClick(){this.setState({showInfo:!0})}onInfoClose(){this.setState({showInfo:!1})}componentDidMount(){this.init()}errorReachLimit(){return n.a.createElement(Y,null)}display(){return this.state.error?this.errorReachLimit():this.displayHome()}displayHome(){return n.a.createElement(r.Fragment,null,n.a.createElement(H,{currentCondition:this.state.currentCondition,foreCastDaily:this.state.foreCastDaily,foreCastHourly:this.state.foreCastHourly,onInfoClick:this.onInfoClick,onGPSLocationClick:this.onGPSLocationClick,updating:this.state.updating,lastUpdate:this.state.lastUpdate,onRefreshClick:this.onRefreshClick}),n.a.createElement(J,{onInfoClose:this.onInfoClose,show:this.state.showInfo}))}render(){return n.a.createElement("div",{className:"App"},this.state.dataLoaded?this.display():n.a.createElement(Q,{ref:this.loader}))}}var oe=se;const ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}s.a.render(n.a.createElement(oe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");ce?(!function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):le(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.06bdfd94.chunk.js.map
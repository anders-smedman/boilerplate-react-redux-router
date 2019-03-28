import React from 'react'


// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export function isAnyLoggedIn(props){
  if (props.user !== null) {
    return true
  }
  return false
}
export function isAdmin(props) {
  if (props.user !== null) {
    let user = props.user
    if (user.is_admin) {
      return true
    }
  }
  return false
}

export function renderTextNewline(txt) {
  txt.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  })
}


export function ImageExist(url)
{
  var img = new Image();
  img.src = url;
  return img.height != 0;
}


// export function GetMerchantNameOnId(props, merchant_id){
//   let result = data.
// }
export function formatISOdate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}
export function unixTimestamp() {
  return Math.round((new Date()).getTime() / 1000)
}
function convertDateToUTC(date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}
export function monthname(indexMonth) {
  let m = []
  m.push("January")
  m.push("February")
  m.push("March")
  m.push("April")
  m.push("May")
  m.push("June")
  m.push("July")
  m.push("August")
  m.push("September")
  m.push("October")
  m.push("November")
  m.push("December")
  return m[indexMonth]
}
export function weekday(indexDay) {
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[indexDay]
}
export const dates = new function () {
  this.first = function (d) {
    return new Date(d.getFullYear(), d.getMonth(), 1)
  }
  this.last = function (d) {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0)
  }
  this.days = function (d) {
    return this.last(d).getDate()
  }
  this.firstDayIdx = function (d) {
    // Special! 
    // The calender is looped from monday to sunday
    // idx 0 = sunday but I need it last so return 7 for idx 0
    // not perfect but working!
    let i = this.first(d).getDay()
    i = i === 0 ? 7 : i
    return i
  }
}
export const log = new function () {
  this.info = function (msg) {
    if(window.console){
      if (process.env.NODE_ENV !== "production" || getCookie("console-log-prod") === "yes") {
        if (typeof msg === "object") {
          console.table( msg )
        } else {
          console.info('%c ' + msg, 'color:#00aa00')
        }
      }
    }
  }
  this.warn = function (msg){
    if(window.console){
      if (process.env.NODE_ENV !== "production" || getCookie("console-log-prod") === "yes") {
        if (typeof msg === "object") {
          console.warn('%c WARNING, object:','color:#ffa500')
          console.table( msg )
        } else {
          console.warn('%c ' + msg, 'color:#ffa500')
        }
      }
    }
  }
  this.error = function (msg) {
    if(window.console){
      if (process.env.NODE_ENV !== "production" || getCookie("console-log-prod") === "yes") {
        if (typeof msg === "object") {
          console.error('%c ERROR, object:','color:#cc0000')
          console.table( msg )
        } else {
          console.error('%c ' + msg, 'color:#cc0000')
        }
      }
    }
  }
}
export const dom = new function (){
  this.getCheckbox = function (query){
    if (document.querySelector(query).length){
      return document.querySelector(query).checked
    }
    return false
  }
  this.setCheckbox = function (query, boolean) {
    console.log("setCheckbox "+query+": " + boolean)
    if (document.querySelector(query).length){
      document.querySelector(query).checked = boolean
    }
  }
}
export const validateEmail = function (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
    return (true)
  }
  return (false)
}

export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let date=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")
let datef=document.getElementById("inda")
let monf=document.getElementById("inmon")
let yearf=document.getElementById("inye")
function result(){
    if(date.value.length===2 && month.value.length===2 && year.value.length===4){
       let reg=/^[0-9]+$/
      let yearvalue=0
      let monthvalue=0
      let datevalue=0
       if(year.value.match(reg)){
           yearvalue=parseInt(year.value)
        //    console.log(yearvalue);
       }
       else{
        yearf.innerText="please input valid data for year filed"
       }
       if(date.value.match(reg)){
           datevalue=parseInt(date.value)
        //    console.log(datevalue);
       }
       else{
        datef.innerText="please input valid data for date filed"
       }
       if(month.value.match(reg)){
           monthvalue=parseInt(month.value)
        //    console.log(monthvalue);
       }
       else{
        monf.innerText="please input valid data for month filed"
       }
             
       let ans=document.getElementById("ans")
       let currentyear=  new Date().getFullYear()
       let currentmonth=new Date().getMonth() + 1
       let currentdate=new Date().getDate()
       
       var monthd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
         if(date.value>currentdate){
            currentdate= currentdate  + monthd[currentmonth-1]
            currentmonth=currentmonth - 1
         }
         
          if(month.value>currentmonth){
            currentmonth=currentmonth+12
            currentyear=currentyear-1
          }

         let ansyear=currentyear-yearvalue
         let ansmonth=currentmonth-monthvalue
         let ansdate=currentdate-datevalue
         ans.innerText=`YOUR AGE IS ${ansyear} YEARS ${ansmonth} MONTHS ${ansdate} DAYS`
    }
}
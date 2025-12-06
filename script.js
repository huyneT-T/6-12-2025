const currentdate = document.querySelector(".currentday");

const daystask = document.querySelector(".days");

const nexticon = document.querySelectorAll(".movemonth_year");
let date = new Date(),
curryear =  date.getFullYear(),
currmonth = date.getMonth() ;

const month_s = [
    "January" ,"February","March","April","May", "June",
     "July", "August", "September", "October", "November","December" 
];

const rendercalender = () => {
    let lastdateofmonth = new Date(curryear , currmonth , 0 ).getDate();
    let liday ="";
    for(let i = 1 ; i <= lastdateofmonth ; i++){
        liday += `<li> ${i} </li>` ;
    }
    currentdate.innerHTML = `${month_s[currmonth - 1]} ${curryear}`;
    daystask.innerHTML = liday ;
}
rendercalender();

nexticon.forEach(icon => {
    icon.addEventListener("click" , () => {
        currmonth = icon.id === "next" ? currmonth-- : currmonth + 1;
        currmonth = currmonth % 13;
        console.log(currmonth);
        if(currmonth == 0){ currmonth = 1 ; }
        rendercalender();
        console.log(icon);
    });
});
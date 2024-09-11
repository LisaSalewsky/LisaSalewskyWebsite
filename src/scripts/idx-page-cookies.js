setCookie = (cName, cValue, expHours) => {
    let date = new Date();
    date.setTime(date.getTime() + expHours * 60 * 60 * 1000);
    const expieres = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expieres + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val =>{
        if(val.indexOf(name) ===0) {
            value = val.substring(name.length);
        }
    }
    )
    return value;
}

cookieAnimation = () => {
    let visitedCookieElement = document.getElementById("idx-page-visited-cookies");
    if(!getCookie("homepage visited")){
        visitedCookieElement.className = "idx-page-visited-cookies";
        setCookie("homepage visited", true, 2);
    } else {
        visitedCookieElement.className = '';
    }
}

checkSiteFormat = () => {
    let visitedCookieElement = document.getElementById("idx-page-visited-cookies");
    let width = window.innerWidth;
    if (width <= 1100){
        visitedCookieElement.className = '';
        cookieAnimation();
        visitedCookieElement.className = '';
    } else{
        cookieAnimation();
    }
}

checkSiteFormat();

function toggleMenu() {
    const socials = document.getElementById('socials');
    socials.classList.toggle('show');
}
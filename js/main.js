let target = document.querySelector ("#danamic");


    function randomString(){
        let stringArr = [ "Let's Read", "Let's Write", "Let's Do it", "Let's Learn", "Let's Pray"];
        let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
        let selectStringArr = selectString.split("");

        return selectStringArr;
    }
   
    // 타이핑 리셋
    function resetTyping(){
        target.textContent = "";
        dynamic(randomString());
    }

    // 한글자씩 text 출력 함수
    function dynamic(randomArr){
    
        /* console.log(randomArr); */
    
        if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    } else{
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString());

/* console.log(selectString);
console.log(selectStringArr); */


function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);


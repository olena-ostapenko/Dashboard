let allLeftList = document.querySelectorAll(".left-menu_list__li")
console.log(allLeftList)


for (let i = 0; i< allLeftList.length; i++ ){
    console.log(allLeftList[i])
    allLeftList[i].addEventListener("click", function (e){
        e.preventDefault()
        // console.log(e.target)
        // allLeftList[i].classList.toggle("li_active")
        if (allLeftList[i].classList.contains("li_active")){
            allLeftList[i].classList.remove("li_active")
        }
        else {
            for (let u = 0; u <allLeftList.length; u++){
                allLeftList[u].classList.remove("li_active")
            }
            allLeftList[i].classList.add("li_active")
        }
    })
}
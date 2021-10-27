
Radiobutton1.onchange=function(){
   s=Radiobutton1.value
      let userChoice = $("input[name=Radiobutton1]:checked").prop("value")
      if (s == 0 || s == 3) {
            lblDescribeYou.value=`I would agree that you are an ${userChoice} person too!`
      } else {
            lblDescribeYou.value = `I would agree that you are a ${userChoice} person too!`
      }
}



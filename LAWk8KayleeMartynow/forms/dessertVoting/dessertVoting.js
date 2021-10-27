let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
      let x
      for (x=0; x<dessertList.length; x++) {
            drpDesserts.addItem(dessertList[x])
      }
}

drpDesserts.onclick=function(s){
// this 'if' kicks user out if they  just clicked on control 
// but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {drpDesserts.value =s 
            lblPrompt.value=`You chose ${s} as your favorite dessert`
      }
}

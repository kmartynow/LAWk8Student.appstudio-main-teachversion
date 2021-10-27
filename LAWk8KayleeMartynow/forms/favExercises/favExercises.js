let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let responses = []



favExercises.onshow=function(){
selExercises.clear()
      for (let y = 0; y<exercises.length; y++) {
            selExercises.addItem(exercises[y])
      }
}

selExercises.onclick = function() {
      let val=selExercises.text
      responses.push(val)
      console.log(responses)
}

btnSubmit.onclick=function(){
 responses.sort();
      if (responses[1] == coreExercises[0] && responses[0] == coreExercises[1]) {
            lblExercises.value='You chose situps and planks - those are the two core exercises.'
      } else {
            lblExercises.value='You did not pick the two core exercises.'
            }
      responses=[]
} 


function show_from_results(){
  const the_input = document.querySelector("#from-input")
  if( the_input.value.length > 0 ){
    document.querySelector("#from-results").style.display = "block"
  }else{
    document.querySelector("#from-results").style.display = "none"
  }
  // document.querySelector("#from-results").style.display = "block"
}
function hide_from_results(){
  document.querySelector("#from-results").style.display = "none"
}












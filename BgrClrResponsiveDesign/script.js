var ind =0
function changeColors()
{
  var color =["pink","linen","lavender","thistle","skyblue","springgreen","mistyrose","cadeblue","lightpink","palegreen","moccasin","tan","lightcyan","chartreuse"]
  document.getElementsByTagName("body")[0].style.backgroundColor = color[ind++]
  if(ind > color.length-1)
    ind =0

}
function CENTEREDtouching(btn){
    return(mouseX < btn.x + btn.width/2 
        && mouseX > btn.x - btn.width/2 
        && mouseY < btn.y + btn.height/2 
        && mouseY > btn.y - btn.height/2)
             

}
function OFFSETtouching(btn) {
    return (mouseX >= btn.x &&
            mouseX <= (btn.x+btn.width) &&
            mouseY >= btn.y && 
            mouseY <= (btn.y+btn.height));
}
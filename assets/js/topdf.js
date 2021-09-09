function generatePDF(){
    const element=document.getElementById("fulltable")

    html2pdf()
    .from(element)
    .save()
}
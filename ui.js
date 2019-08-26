function UI(){
    this.outputWord=document.getElementById("outputWord");
    this.languageList=document.getElementById("language");
    this.last = document.getElementById("last");   
}
UI.prototype.translateWord = function(word){    
    this.outputWord.textContent=word;
}
UI.prototype.showHistory =function(word){
     let words=Storage.getAllSearchedUserFromStorage();
        console.log(last);
        
        if(words.indexOf(word)===-1){  
            const li=document.createElement("li");
            li.className="list-group";
            li.textContent=word;
            this.last.appendChild(li);  
            setTimeout(()=>{
            li.remove();
        },2000);
    }  
}
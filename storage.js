class Storage {
    static getAllSearchedUserFromStorage() {

        let wordss;

        if (localStorage.getItem("history") === null) {
            wordss = [];
        } else {
            wordss = JSON.parse(localStorage.getItem("history"));
            
        }
        return wordss;
    }
    static addSearchedUserToStorage(word, tword) {


        var obj = {};
        
        Object.assign(obj, {
            word: word,
            tword: tword
        });

        let words = this.getAllSearchedUserFromStorage();

        if (words.indexOf(obj) === -1) {
            words.unshift(obj);
        }
        localStorage.setItem("history", JSON.stringify(words));
    }
    static clearAllSearchedUserFromStorage() {
        localStorage.removeItem("history");
    }

}
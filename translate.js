class Translate {
    constructor(word, lang) {
        this.apikey = "trnsl.1.1.20190715T135815Z.68567414d39a01cf.2d1f98ea67351a0b8e1b354eb6fc95bebbfbfdb2";
        this.word = word;
        this.lang = lang;

        this.xhr = new XMLHttpRequest();
    }
    translateWord(callback) {
        const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.lang}`;
        console.log(endPoint);
        this.xhr.open("GET", endPoint);
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                const json = JSON.parse(this.xhr.responseText);

                const text = json.text[0];


                callback(null, text);

            } else {
                callback("hata", null);
            }
        }
        this.xhr.send();
    }
    changeWord(word, lang) {
        this.word = word;
        this.lang = lang;
    }

}
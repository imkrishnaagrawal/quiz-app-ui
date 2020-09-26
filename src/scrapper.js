    const forms = Array.from(document.getElementsByTagName('form'))

    const data = [];

    forms.forEach(function(e, questionNo){
        // let correctOptionIndex = [0,0,0,0];
        const  questionText = e.childNodes[0].childNodes[2].innerText;
        const  options = Array.from(e.childNodes[1].childNodes).map((item)=>{
            return {
                "isCorrect": item.innerText.includes('(Correct)'),
                "text" :  item.innerText
            };
            });
        const  explain = e.childNodes[2].innerHTML;


        data.push(
            {
                questionNo,
                questionText,
                options,
                explain
            }
        );
    });


    (function(console){

        console.save = function(data, filename){

            if(!data) {
                console.error('Console.save: No data')
                return;
            }

            if(!filename) filename = 'console.json'

            if(typeof data === "object"){
                data = JSON.stringify(data, undefined, 4)
            }

            const blob = new Blob([data], {type: 'text/json'}),
                e    = document.createEvent('MouseEvents'),
                a    = document.createElement('a')

            a.download = filename
            a.href = window.URL.createObjectURL(blob)
            a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
        }
        })(console)

        console.save(data)
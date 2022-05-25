let stringUser = prompt('Nhập vào 1 câu để chuẩn hóa: ');
let str = [];
for(let i=0 ; i<stringUser.length ; i++) {
    str[i] = stringUser[i];
}
alert('Câu của bạn nhập vào là : '+stringUser);
function chuanHoa(str) {
    let alphaUpper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    let alphaLower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    for (let i=0 ; i<str.length ; i++) {
        if(str[i]!=' ') {
            if ((i==0 && alphaUpper.includes(str[i])==false)||(str[i-1]==' ' && alphaUpper.includes(str[i])==false)) {
                let index = alphaLower.indexOf(str[i]);
                str[i] = alphaUpper[index];
            } else if (alphaUpper.includes(str[i])==true && str[i-1]!=' '&& i!=0) {
                let index = alphaUpper.indexOf(str[i]);
                str[i] = alphaLower[index];
            }
        } else {
            if (str[i+1] == ' ') {
                for (let j=i ; j<(str.length-1) ; j++) {
                    let tmp = str[j];
                    str[j] = str[j+1];
                    str[j+1] = tmp;
                }
            }
        }
    }
    let result = str.join('');
    alert('Câu đã chuẩn hóa : '+result);
}

function longestWord(str) {
    if(str.includes(' ')==false) {
        let result = str.join('');
        return result;
    }
    let length = [];
    let wordList = [];
    let n = 0;
    let size = 0;
    let word = '';
    for (let i=0 ; i<str.length ; i++) {
        if (str[i] == ' ') {
            wordList[n] =word;
            length[n] = size;
            size = 0;
            word = '';
            n++;
        } else {
            word = word.concat(str[i]);
            size++;
        }
    }
    let max = length[0];
    for (let i=0 ; i<length.length ; i++) {
        if (length[i] > max) {
            max = length[i];
        }
    }
    let index = length.indexOf(max);
    return wordList[index];
}

chuanHoa(str);
alert('Từ dài nhất là : '+longestWord(str));
var str='sai';
// console.log(str.length);
function len(Str){
    var count = 0;
    while (str!=="") {
        if(str[count])
        {
            count++
        }
        else{
            return count
        }

    }
    // return count;
}
console.log(len(str));
console.log(typeof str[3]);
console.log(Boolean(undefined));

var str='saikumar'
console.log(str.slice(2,-2));
function slic(str,i,j) {
    var a="";
    if(j<0&&i>0){
        j=str.length-(Math.abs(j))
    }
    if(i<0&&j>0){
        i=str.length-(Math.abs(i))
    }
    if(i<0&&j<0){
        i=str.length-(Math.abs(i))
        j=str.length-(Math.abs(j))
    }
    for(let k=i;k<j;k++){
        if(k<str.length){
            a+=str[k]
        }
    }
    return a;
}
console.log(slic(str,2,-2));
console.log();

var str='saikumar'
console.log(str.substring(6,-6));
function sub(str,i,j) {
    var a=''
    if(i<j){
        for(let k=i;k<j;k++){
                if(k<=str.length-1){
                    a+=str[k]
                }
            }
    }else{
        // let p=i-1
        for(let k=i-1;k>=j;k--){
           if(k>=0){
            a=str[k]+a
            // p--
           }
        }
    }
    return a
}
console.log(sub(str,6,-6));

var str='   saikumar sai'
console.log(str.trimStart());
console.log(str.trimStart().length);

function trs(str) {
    var a=''
    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
            for(let j=i;j<str.length;j++){
                a+=str[j]
            }
            return a
        }
    }
}
console.log(trs(str));
console.log(trs(str).length);

var str='saikumar sai    '
console.log(str.trimEnd());
console.log(str.trimEnd().length);
function tre(str) {
    var a=''
    for(let i=str.length-1;i>=0;i--){
                if(str[i]!==' '){
                    let p=0
                    for(let j=i;j>=0;j--){
                        a+=str[p]
                        p++
                    }
                    return a
                }
            }
}
console.log(tre(str));
console.log(tre(str).length);

var str='   saikumar    '
console.log(str.trim());
console.log(str.trim().length);
function tr(str) {
    var a=''
    for(let i=str.length-1;i>=0;i--){
                if(str[i]!==' '){
                    let p=0
                    for(let j=i;j>=0;j--){
                        a+=str[p]
                        p++
                    }
                break
                }
            }
            var q=''
            for(let i=0;i<a.length;i++){

                if(a[i]!==' '){
                    for(let j=i;j<a.length;j++){
                        q+=a[j]
                    }
                    return q
                }
            }
}
console.log(tr(str));
console.log(tr(str).length);

var str='sai'
console.log(str.padStart(6,'nan'));

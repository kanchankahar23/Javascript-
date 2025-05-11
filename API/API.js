// github url
console.log('kanchan')
const requesturl = 'https://api.github.com/users/kanchankahar23';
// ek object bnaya jo request ko le rha h 
const xhr = new XMLHttpRequest();
console.log(xhr)
// open(method , url)
xhr.open('GET',requesturl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.followers)
        console.log(data.login)
        console.log(data.bio)
    }
}
xhr.send()

// const button = document.querySelector('button');
// const img = document.querySelector('img');
// const ob = {
//     "login":"kanchan kahar",
//     "id":1234567,
//     "avatar_url":"https://avatars.githubusercontent.com/u/204509741?v=4",
// }
// button.addEventListener('click',function(e){
//     img.innerHTML = 
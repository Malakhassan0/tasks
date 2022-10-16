<<<<<<< HEAD
const addArticle = document.querySelector("#addArticle")


const art=["title","article"]


const ReadStrg = (key="articles")=> JSON.parse(localStorage.getItem(key))||[]
const WriteStrg = (key="articles",articles)=> localStorage.setItem(key,JSON.stringify(articles))


const createElements=()=>{

}





if(addArticle){
    addArticle.addEventListener("submit",function(e){
        e.preventDefault()
        const article ={
            id:Date.now()
        }
        art.forEach(el=> article[el] = this.elements[el].value)
        const articles =ReadStrg()
        articles.push(article)
        WriteStrg(articles)
        addArticle.reset()
        window.location.href= "index.html"
    })
=======
const addArticle = document.querySelector("#addArticle")


const art=["title","article"]


const ReadStrg = (key="articles")=> JSON.parse(localStorage.getItem(key))||[]
const WriteStrg = (key="articles",articles)=> localStorage.setItem(key,JSON.stringify(articles))


const createElements=()=>{

}





if(addArticle){
    addArticle.addEventListener("submit",function(e){
        e.preventDefault()
        const article ={
            id:Date.now()
        }
        art.forEach(el=> article[el] = this.elements[el].value)
        const articles =ReadStrg()
        articles.push(article)
        WriteStrg(articles)
        addArticle.reset()
        window.location.href= "index.html"
    })
>>>>>>> 741dea9 (first)
}
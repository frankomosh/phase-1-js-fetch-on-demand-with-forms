const init = () => {
  


document.addEventListener('DOMContentLoaded', init);
const inputForm=document.querySelector('form');
  inputForm.addEventListener('submit',(event)=>{
     event.preventDefault()
     const input=document.querySelector('input#SearchById')
     fetch()
     .then(response=>response.json())
     .then(data=>{
         const title=document.querySelector('section#MovieDetails h4')
         const summary=document.querySelector('section#MovieDetails p')
         title.innerText=data.title
         summary.innerText=data.summary
     })
  })
}
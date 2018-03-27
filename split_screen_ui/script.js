const left=document.querySelector("d")
const right=document.querySelector("p")
const container=document.querySelector("container")

left.addEventListener("mouseenetr",()=>
{
    container.classList.add('hover-left');
});

left.addEventListener("mouseenetr",()=>
{
    container.classList.remove('hover-left');
});
right.addEventListener("mouseenetr",()=>
{
    container.classList.add('hover-right');
})

right.addEventListener("mouseenetr",()=>
{
    container.classList.remove('hover-right');
})





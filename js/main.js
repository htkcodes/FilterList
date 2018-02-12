let filter=$("#filter");

filter.on('keyup',function(){
    //Get Value of input
    let filterVal=$(this).val().toUpperCase();

    console.log(filterVal);

    let names=$("#name");

    let li=$("li.collection-item");

    for(let i=0;i<li.length;i++)
    {
      let a= li[i].getElementsByTagName('a')[0];


      console.log(a.innerHTML.indexOf(5));

        if(a.innerHTML.toUpperCase().indexOf(filterVal) > -1)
        {
li[i].style.display='';
        }
        else{
            li[i].style.display='none';
        }
    }


})
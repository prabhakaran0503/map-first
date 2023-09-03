let num=[
    {
        first_name:"milk",
        last_name:"sheridan"
    },
    {
        first_name:"time",
        last_name:"lee"
    },
    {
        first_name:"jona",
        last_name:"carte"
    },
]
var ans=num.map(function(e){
    console.log(e);
    var a=e.first_name+e.last_name;
    return a
})


console.log(ans);
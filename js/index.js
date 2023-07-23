


    
    document.getElementById("a").addEventListener("mouseover",function(){
        this.className="h_event";
        
    })
    document.getElementById("a").addEventListener("mouseout",function(){
        this.className="h";
    })
    document.getElementById("b").addEventListener("mouseover",function(){
        this.className="h_event";
        
    })
    document.getElementById("b").addEventListener("mouseout",function(){
        this.className="h";
    })
    document.getElementById("c").addEventListener("mouseover",function(){
        this.className="h_event";
        
    })
    document.getElementById("c").addEventListener("mouseout",function(){
        this.className="h";
    })
    document.getElementById("d").addEventListener("mouseover",function(){
        this.className="h_event";
        
    })
    document.getElementById("d").addEventListener("mouseout",function(){
        this.className="h";
    })


document.getElementById("contact").addEventListener("mouseover",function(){
    this.className="btn_hover";
    
})
document.getElementById("contact").addEventListener("mouseout",function(){
    this.className="btn";
    
})
var z = document.getElementsByClassName("img-work").length;
for(let i =0; i<z;i++){
    document.getElementById(`${i}`).addEventListener("mouseover",function(){
        this.className="zoom";
        
    })
    document.getElementById(`${i}`).addEventListener("mouseout",function(){
        this.className="img-work";
    })
}
document.getElementById("work-button").addEventListener("click",()=>{
    document.getElementById("z").style.overflow="auto";
})

var content = document.getElementById("z");
var button = document.getElementById("work-button");
const a= document.createElement("a");
        a.setAttribute('href',"w3school.com");
        a.setAttribute('class',"a");
        a.innerHTML="view all works";

button.onclick=()=>{
    if(content.className == "work-grid-ez"){
        content.className = "work-grid";
        button.innerHTML="Show More";

    }else{
        content.className = "work-grid-ez";
        document.getElementsByTagName("div")[9].appendChild(a);
        button.innerHTML="Show Less";

    }
}

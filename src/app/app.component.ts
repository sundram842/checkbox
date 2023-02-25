import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkbox';
change:boolean=false;
  fruit=[{id:1,select:false,name:"apple"},
    { id: 2, select: true, name: "banana" },
    { id: 3, select: false, name: "grapes" },
    { id: 5, select: true, name: "orange" },
    { id: 6, select: false, name: "pinapple" },
]

  Onchange(event:any)
  {
     const all=event.target.value;
     const isChecked=event.target.checked
   
     this.fruit= this.fruit.map((x)=>
     {
      
      if(x.id==all)
      {
        this.change=false
        x.select=isChecked; 
        
        return x;
        
      }
       if (all == -1) {
        x.select=this.change
        return x;

       }
       return x;
     });  
    console.log(this.fruit);
  }

}

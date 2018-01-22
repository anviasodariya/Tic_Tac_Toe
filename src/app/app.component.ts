import { Component } from '@angular/core';
// import { NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  value= 'X';
  Array= ['','','','','','','','',''];
  Array1=[];
  random;
  rand;
  
  userWin;
  compWin;
  whenClick(a)
{
  if(this.Array[a] != 'X' && this.Array[a] != 'O')
  {
    if(this.Array[a] != null && this.Array[a] != 'O')
    {
      this.Array[a]=this.value;
      this.updateList();
      this.userWin = this.win();
        if(this.userWin)
        {
          alert("Congratulation You Win the Game!....")
          this.Array=['','','','','','','','',''];
          this.Array1=[];
        }
        else if(((this.Array[0] &&
                  this.Array[1] &&
                  this.Array[2] &&
                  this.Array[3] &&
                  this.Array[4] &&
                  this.Array[5] &&
                  this.Array[6] &&
                  this.Array[7] &&
                  this.Array[8])!='')&&
                  (this.userWin == false) &&
                  (this.compWin == false))
                  { 
                  alert("Game is Draw!..");
                  this.Array=['','','','','','','','',''];
                  this.Array1=[];
                  }
    }
    this.random = Math.round(Math.random()*8);
      if(this.Array[this.random] != undefined)
        {
          this.random = this.Array1[Math.floor(Math.random() * this.Array1.length)];
        }
     if(this.Array.indexOf[this.random] == null && this.Array[this.random] != 'X'&& this.Array[this.random] != 'O' )
       {
         this.Array[this.random] = 'O';
         this.compWin = this.comWin();
            if(this.compWin)
              {
                alert("Sorry, Computer Win the Game!...")
                //setTimeout(()=>{alert("Comp WIN....")},2000);
                this.Array=['','','','','','','','',''];
                this.Array1=[];
              }
                this.updateList();
       }
  }
}     
  updateList()
  {
    var a = 0;
    for (var i = this.Array1.length; i > 0; i--)
     { 
       this.Array1.pop();
     }
      for(let k of this.Array)
      {
        if(k == '')
        { 
          this.Array1.push(a);
        }
        a++;
      }
  }
  win()
  {
    var arr = [[0,1,2],[3,4,5],[0,4,8],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
    var bol = false; 
    for(let row of arr)
    {
      if(this.Array[row[0]] == 'X' && this.Array[row[1]] == 'X' && this.Array[row[2]] == 'X')
      {
        bol = true;
        this.userWin=true;
        return bol;
      }
      else
      {  
        bol = false;
      }
    }
    return bol;
  }
  comWin()
  {
    var arr = [[0,1,2],[3,4,5],[0,4,8],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
    var bol = false; 
    for(let row of arr)
    {
      if(this.Array[row[0]] == 'O' && this.Array[row[1]] == 'O' && this.Array[row[2]] == 'O')
      {
      bol = true;
      this.userWin=true;
      return bol;
      }
      else
      {     
        bol = false;
      }
    }
      return bol;
  }
}
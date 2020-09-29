import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'box-generator';
  boxes = [];
  selected: any;
  key: any;
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {


    var key_code = event.which || event.keyCode;
    console.log(key_code);
    var element = document.getElementById(this.boxes[this.selected])
    if (element) {
      switch (key_code) {
        case 97: //A key
          element.style.left = parseInt(element.style.left) - 5 + 'px';
          break;
        case 119: //W key
          element.style.top = parseInt(element.style.top) - 5 + 'px';
          break;
        case 100: //D key
          element.style.left = parseInt(element.style.left) + 5 + 'px';
          break;
        case 115: //S key
          element.style.top = parseInt(element.style.top) + 5 + 'px';
          break;
        case 13: //Delete on enter
          this.deleteBox();
          break;
      }

    } else {
      console.log("box not selected")
    }

  }
  ngOnInit() {
  }
  addNewBox() {
    this.boxes.push("box" + this.boxes.length);
    setTimeout(() => {
      var ele = document.getElementById("box" + (this.boxes.length - 1));
      ele.style.position = 'relative';
      ele.style.left = (this.boxes.length) + 5 + 'px';
      ele.style.top = '0px'
      ele.style.zIndex = (this.boxes.length) + 5 + "px";
    }, 100);


  }

  selectBox(i) {
    console.log("index", i);
    console.log(this.boxes, "length", this.boxes.length)
    this.selected = i;
    for (var j = 0; j < this.boxes.length; j++) {
      console.log(j, this.boxes[j])
      var ele = document.getElementById(this.boxes[j]);
      if (i == j) {
        ele.style.borderColor = "Red";

      } else {
        ele.style.borderColor = "innitial";

      }
    }


  }
  deleteBox() {
    var ind = this.boxes.indexOf(this.boxes[this.selected]);
    if (ind != -1) {
      console.log("index", ind);
      
      this.boxes.splice(ind, 1);
    }
    console.log(this.boxes, this.selected);

  }

}

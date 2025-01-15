import {Component, inject} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../navbar/navbar.component';
import { DownloadService } from '../downloadService/download.service';

@Component({
  selector: 'app-download-menu',
  templateUrl:"./download.compnent.html",
  styleUrl:"./download.component.css",
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,NavComponent]
})
export class HomeComponent {
  setFileValue(event: Event) {
    if (!event.target) throw new Error('no file selected!');
    const file = (event.target as HTMLInputElement).files?.item(0);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.fileForm.setValue({file:reader.result as string})
      console.warn(this.fileForm.value.file);
    });
    reader.readAsText(file as File);
  }
  downloader=inject(DownloadService);
  urlForm=new FormGroup({
    url:new FormControl('',[Validators.pattern(/https?:\/\/[^\s]+\.m3u8(\?[^\s]*)?/),Validators.required]),
  });
  fileForm= new FormGroup({
    file: new FormControl('',Validators.required)
  })

  options=[{value:this.fileForm,name:"file",getFormControl:()=>this.fileForm.controls.file},{value:this.urlForm,name:"url",getFormControl:()=>this.urlForm.controls.url}];
  visibleForm = this.options[1];

  downloadBy(option: typeof this.visibleForm) {
    this.reset()
    this.visibleForm=option;
    console.warn(this.visibleForm);
  }

  async start(content:string|null){
    if(!content) throw new Error("no content!");
    if(content.startsWith("https://")){
      content = await fetch(content).then(res=>res.text());
    }
    this.downloader.getAllM3u8(content);
  }
  reset(){
    this.visibleForm.value.reset();
    this.downloader.lastDownloadedArray=[];
    this.downloader.successful.clear();
    this.downloader.unsuccessful.clear()
  }
}


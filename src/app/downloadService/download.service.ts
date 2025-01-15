import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root",
})

export class DownloadService {
    lastDownloadedArray:(Blob|string)[]=[];
    lastBlob: Blob|undefined;
    unsuccessful = new Set();
    successful = new Set();

    async getAllM3u8(content: string|null) {
        if(!content) throw new Error('link unreachable')
        this.lastDownloadedArray = [];
        let lines = content.split("\n");
        let urls =lines.filter((line:string)=>line.startsWith("https://"));
        for (let i=0; i < urls.length; i++) {
            let url = urls[i];
            fetch(url).then((res)=>res.blob()).then((blob)=>{
                this.lastDownloadedArray[i] = blob||url;
                this.successful.add(i);
            }).catch(reason=>{
                this.lastDownloadedArray[i]=url;
                this.unsuccessful.add(i);
            })
        }
    }

    async scan(){
        for (let i = 0; i < this.lastDownloadedArray.length; i++) {
            let blob = this.lastDownloadedArray[i];
            if(typeof blob == "string"){
                this.lastDownloadedArray[i]=await fetch(blob).then(b=>b.blob());
                this.unsuccessful.delete(i);
                this.successful.add(i);
            }
        }
    }
    async quickScan(){
        for (let i = 0; i < this.lastDownloadedArray.length; i++) {
            let blob = this.lastDownloadedArray[i];
            if(typeof blob == "string"){
             fetch(blob).then(b=>b.blob()).then((blob)=>{
                this.lastDownloadedArray[i]=blob;
                this.unsuccessful.delete(i);
                this.successful.add(i);
            })
            }
        }
    }

    merge(blobArray:typeof this.lastDownloadedArray){
        blobArray.filter(blob=>typeof blob != "string");
        this.lastBlob=new Blob(blobArray)
        return new Blob(blobArray)
    }

    getObjectUrl() {
        if(!this.lastBlob) throw new Error("no url object");
        return URL.createObjectURL(this.lastBlob)
    }
    getUrls(content:string){
        return content.split("\n").filter((s)=>s.startsWith("https://"))
    }

    async download(){
        if(!this.lastBlob) {
            if(this.lastDownloadedArray.length == 0)throw new Error("no video to download");
            this.lastBlob=this.merge(this.lastDownloadedArray);
        }
        let a = document.createElement('a')
        a.href = URL.createObjectURL(this.lastBlob);
        a.download="video.mp4"
        a.click();
        URL.revokeObjectURL(a.href);
    }
    status(){
        return{
            unsuccessful: this.unsuccessful.size,
            successful: this.successful.size,
            pending: this.lastDownloadedArray.length - this.successful.size - this.unsuccessful.size,
        }
    }
}
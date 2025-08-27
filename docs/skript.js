window.addEventListener("message",event=>{
    let data = event.data;
    if(data && data.download) {
        console.log(data.download);
        var zip = new JSZip();
        for (const [key, value] of data.download) {
          console.log(`${key}: ${value}`);
          zip.file(key,value);
        }
        zip.generateAsync({type:"blob"})
            .then(function(blob) {
              saveAsLegacy(blob, "test.zip");
            });
    }
    function saveAsLegacy(content, filename) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // Clean up
    }
})
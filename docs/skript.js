window.addEventListener("message",event=>{
    let data = event.data;
    if(data && data.download) {
        console.log(data.download);
        data.download.generateAsync({type:"blob"})
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
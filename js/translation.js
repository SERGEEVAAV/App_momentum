 
const body = document.querySelector('.body');  

       async function getLinkToImage() {
            const img = new Image();
            const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=DlEZDT5UjF0MEhvcwZyC_T5Fh6V3rv_NHBu5ftfHDhg';
            const res = await fetch(url);
            const data = await res.json();
            img.src = data.urls.regular;
           
        
            img.onload = () => {      
    
                document.body.style.backgroundImage = `url(${img.src})`;
           
            
           }; 
        
        console.log(data.urls.regular)
        }
    
     getLinkToImage();


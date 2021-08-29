async function getBreweries()
{
    try
    {
    const data=await fetch('https://api.openbrewerydb.org/breweries',{
        method:"GET"
    });
    const brew= await data.json();
    console.log(brew);
    brew.forEach(brew => createBrewery(brew));
    }  
    catch(err)
    {
        console.log("NOT FOUND");
    } 
    
}
getBreweries();


async function createBrewery({id,name,brewery_type,street,address_2,
     address_3,city,state,county_province,postal_code,country,website_url,phone})
     {
            const container=document.createElement('div');
            container.setAttribute("class","container");
          
            

            container.innerHTML=`
            <h3>${name}</h3>
           
           
            

            <div class="address">

           ${street ?`<span class="street">${street}</span>`: " " } 

            ${address_2? `,<span class="address2">${address_2}</span>` : " "}
            ${address_3? `,<span class="address3">${address_3}</span>` : " "}
            <p class="cs">
           ${city? `<span class="city">${city},</span>`: ""} 
           ${state? `<span class="city">${state}</span>`: ""}
           ${postal_code? `,<spanclass="pin">${postal_code}</span>`: " "}
            </p>
            
            ${country? `<i class="fa fa-flag" aria-hidden="true">&nbsp &nbsp${country}</i>`: " "}
            </div>


            <div class="website">
              ${website_url? `<p class="site">
              <i class="fa fa-link" aria-hidden="true" style="color:black"><a href="${website_url}" target="_blank">
               &nbsp${website_url}</a></i>
              </p>`:""}  
              ${phone? `<p class="p"><i class="fa fa-phone">&nbsp &nbsp${phone}</i></a></p>`: " "}
              <p class="t"><b>Type:</b>${brewery_type}</p>
            </div>
          
            
            
       
       
          </div>

            `;

             


            
            var s= document.querySelector(".s");
            var images=[]
            s.append(container);

            var paragraphs = document.querySelectorAll(".container");
            var colors = ["#d7d714", "#639191", "#9ccc65","#ffab91","#e1bee7","#c5cae9","#e7c175db"];
            for(var i = 0; i < paragraphs.length; i++) {
                 paragraphs[i].style.backgroundColor = colors[i % colors.length];
}


     }

   const nav=  document.createElement('div');
     nav.setAttribute("class","nav");
     nav.innerHTML=`
     
     <a class="htop"   href="#top" title"Back to Top" title="Back toTop"  >
     <img class="back"src="https://www.clipartmax.com/png/middle/143-1430089_other-top-arrow-icon-images-green-arrow-up-icon.png" >
          </a>
     </div>
     `;
     document.body.append(nav);







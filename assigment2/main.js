var themenu = document.getElementById('mymenu')

var contents =
    [

        {
            tag1:'meditertan',
            tag2:"easy",
            imgpath: './images/photo-1546069901-ba9599a7e63c.avif',
            imgRating:'4.5',
            reviewNumber:'156',
            prepTime:'20 min',
            cookTime:'35 min',
            serving:'2 people',
            h1: 'Mediterranean Quinoa Bowl',
            p: 'Healthy bowl with quinoa, vegetables, and tahini dressing',
          
            li:
                [
                    "1 cup quinoa",
                    'Cherry tomatoes, halvedCucumber, diced',
                    'Cucumber, diced',
                    'Red onion, sliced',
                    'Kalamata olives',
                    'Feta cheese, crumbled',
                    'Fresh parsley',
                    'Tahini dressing'
                ]
        },
        {
            tag1:'Intermediate',
            tag2:"Mediterranean",
            imgpath: './images/photo-1601050690597-df0568f70950.avif',
            imgRating:'4.8',
            reviewNumber:'245',
            prepTime:'30 min',
            cookTime:'21 min',
            serving:'5 people',
            h1: 'Greek Moussaka',
            p: 'Traditional layered eggplant casserole with lamb',
          
            li:
                [
                    '3 large eggplants, sliced',
                    "500g ground lamb",
                    '400g canned tomatoes',
                    '1 onion, diced',
                    '3 cloves garlic, minced',
                    '500ml béchamel sauce',
                    '100g parmesan cheese',
                    'Cinnamon and oregano',
                    'Olive oil'
                ]
        }
        ,
         {
            tag1:'Easy',
            tag2:"American",
            imgpath: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop',
            imgRating:'4.8',
            reviewNumber:'164 ',
            prepTime:'55 min',
            cookTime:'12 min',
            serving:'4 people',
            h1: 'BBQ Pulled Pork',
            p: 'Slow-cooked tender pork in smoky barbecue sauce',
          
            li:
                [
                    "1kg pork shoulder",
                    '1 cup BBQ sauce',
                    '1/2 cup apple cider vinegar',
                    '2 tablespoons brown sugar',
                    '1 tablespoon paprika',
                    '1 tablespoon garlic powder',
                    'Burger buns',
                    'Coleslaw for serving'
                ]
        }
    ]
function iterator(index) {
    var x = ""
    for (var i = 0; i <contents[index].li.length; i++) {
        x += `<li><span class="rounded-circle">${i + 1 + ' '}</span>${contents[index].li[i]}<li>`
    }
    return x;
} var counter = 0;
function change() {
    if (counter > 2) {
        counter = 0;
    }
    
    themenu.innerHTML =
        ` <div class="containe  p-0 m-0">

            <div class="innerBody d-flex flex-column flex-xl-row bg-white justify-content-evenly p-0">
                <div class="lh d-flex p-0"> 
                    <div class="container imgcontain position-relative">

                        <div class="badge  rounded-pill rating">
                            <i class="fa-solid fa-star" style="color:gold;"></i> 4.5<span class="text-body-tertiary">(234 reviews)</span>

                        </div>
                        <div class="infocard badge rounded-3 d-flex justify-content-around text-black">
                        
                            <div class="infoItem d-flex justify-content-around align-items-center flex-column py-3">
                                <div class="fa-solid fa-clock fs-3"></div>
                                <p class="fs-6 text-secondary">prep time</p>
                                <h6>20 min</h6>

                                
                            </div>
                            
                            <div class="infoItem d-flex justify-content-around align-items-center flex-column py-3">
                                <div class="fa-solid fa-fire-burner text-danger fs-3"></div>
                                <p class="fs-6 text-secondary">Cook Time</p>
                                <h6>20 min</h6>

                                
                            </div>
                            
                            
                            <div class="infoItem d-flex justify-content-around align-items-center flex-column py-3 ">
                                <div class="fa-solid fa-people-group text-primary fs-3"></div>
                                <p class="fs-6 text-secondary">Servings</p>
                                <h6>20 min</h6>

                                
                            </div>
                            
                            
                        </div>
                        <img src="${contents[counter].imgpath}">
                        


                    </div>
                </div>
                <div class="rhs w-75 justify-content-start">
                    <span class=" badge text-white fs-6 rounded-pill bg-success">easy</span>
                    <span class=" badge text-white fs-6 rounded-pill bg-primary">Mediterranean</span>
                    <h1>${contents[counter].h1}</h1>
                    <p>${contents[counter].p}</p>

                    <P class="nav align-items-baseline"><i class="fa-solid fa-list-check mx-1"></i>Ingreditents</P>
                    <div class="line my-3">
                    </div>


                    <ul id="listing">
                        ${iterator(counter)}
                    </ul>
                    <button class="" onclick="change( )"><span>Try another recipe</span></button>

                    <div class="line my-3"></div>

                </div>
            </div>
        </div>`
    counter++


}
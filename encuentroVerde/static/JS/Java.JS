document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("extendedRegisterForm");
  const successMessage = document.getElementById("successMessage");
  const conditionYes = document.getElementById("condition-yes");
  const conditionNo = document.getElementById("condition-no");
  const conditionDetails = document.getElementById("condition-details");

  conditionYes.addEventListener("change", function () {
      conditionDetails.style.display = "block";
  });

  conditionNo.addEventListener("change", function () {
      conditionDetails.style.display = "none";
  });

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (form.checkValidity()) {
          successMessage.style.display = "block";
          form.reset();
          conditionDetails.style.display = "none";
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (form.checkValidity()) {
          successMessage.style.display = "block";
          form.reset();
      }
  });
});

function iniciarMap(){
  var coord = {lat:-41.47005515381614 ,lng: -72.92399093373479};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}


$(document).ready(function() {
    $('#myForm').on('submit', function(event) {
      // Prevenir el envío del formulario
      event.preventDefault();
      
      // Limpiar mensajes de error previos
      $('.error').remove();
      
      let isValid = true;

      // Validar el campo nombre
      const nombreUsuario = $('#nombreUsuario').val().trim();
      if (nombreUsuario === '') {
        $('#nombreUsuario').after('<span class="error">Este campo es obligatorio</span>');
        isValid = false;
      }

      // Validar el campo apellido
      const appaterno = $('#appaterno').val().trim();
      if (appaterno === '') {
        $('#appaterno').after('<span class="error">Este campo es obligatorio</span>');
        isValid = false;
      }

      // Validar el campo teléfono
      const nroTelefono = $('#nroTelefono').val().trim();
      if (nroTelefono === '') {
        $('#nroTelefono').after('<span class="error">Este campo es obligatorio</span>');
        isValid = false;
      }

      // Validar el campo correo
      const correoUsuario = $('#correoUsuario').val().trim();
      if (correoUsuario === '') {
        $('#correoUsuario').after('<span class="error">Este campo es obligatorio</span>');
        isValid = false;
      }

      // Validar el campo mensaje
      const mensaje = $('#mensaje').val().trim();
      if (mensaje === '') {
        $('#mensaje').after('<span class="error">Este campo es obligatorio</span>');
        isValid = false;
      }

      // Si todos los campos son válidos, se puede enviar el formulario
      if (isValid) {
        this.submit();

      }
    });
  });


function InglesIndex(){

    var Descripcion =  document.getElementById('Descripcion')
    var Puyehue = document.getElementById('Puyehue')
    var PuyehueD = document.getElementById('PuyehueD')
    var Vicente = document.getElementById('Vicente')
    var VicenteD = document.getElementById('VicenteD')
    var Pumalin = document.getElementById('Pumalin')
    var PumalinD= document.getElementById('PumalinD')

    Descripcion.innerText="We are a page dedicated to the promotion and tourism of Chile's national parks."
    Puyehue.innerText="Puyehue National Park"
    PuyehueD.innerText='You can visit the entire park and see places like"Salto del pudu", the "Casablanca Volcano" and many more places within the park'
    Vicente.innerText="Vicente Perez Rosales National Park"
    VicenteD.innerText='You can visit the entire park and see places like  "Los Enamorados", the "Laguna Verde" and many more places'
    Pumalin.innerText="Pumalin Douglas Tompkins National Park"
    PumalinD.innerText='You can visit the entire park and see places like: "Sendero Punta del Lago", the "Sendero Alerces" and many more places.'

}

function InglesPumalin(){

    var PumalinT = document.getElementById('PumalinT')
    var PumalinDesc= document.getElementById('PumalinDesc')
    var PumalinSub= document.getElementById('PumalinSub')
    var PumalinSub2= document.getElementById('PumalinSub2')
    var PumalinIti= document.getElementById('PumalinIti')
    var Dia= document.getElementById('Dia')
    var Descripcion=document.getElementById('Descripcion')
    var Actividades= document.getElementById('Actividades')
    

    PumalinT.innerText="Pumalin Douglas Tompkins National Park"
    PumalinDesc.innerText="Delve into the virgin nature of Los Pilquenes and marvel at the diversity of flora and fauna that inhabits this natural sanctuary. The Pumalín Douglas Tompkins National Park is much more than a tourist destination, it is a unique experience that will connect you with the beauty and grandeur of nature."
    PumalinSub.innerText="Come and discover the magic. An adventure awaits you on every trail!"
    PumalinSub2.innerText="Take advantage of this unique opportunity to visit this beautiful park! Book your adventure now!"
    PumalinIti.innerText="Schedule"
    Dia.innerText="Day"
    Descripcion.innerText="Description"
    Actividades.innerText="Activities"

    var PumalinD1D=document.getElementById('PumalinD1D')
    var PumalinD1A1=document.getElementById('PumalinD1A1')
    var PumalinD1A2=document.getElementById('PumalinD1A2')
    var PumalinD1A3=document.getElementById('PumalinD1A3')

    PumalinD1D.innerText="Arrival in Puerto Montt and transfer to the park"
    PumalinD1A1.innerText="Reception and transfer from the Puerto Montt airport or your hotel in the city to the Pumalín Douglas Tompkins National Park."
    PumalinD1A2.innerText="Accommodation in a comfortable cabin or lodge within the park."
    PumalinD1A3.innerText="Welcome dinner at a local restaurant."

    var PumalinD2D=document.getElementById('PumalinD2D')
    var PumalinD2A1=document.getElementById('PumalinD2A1')
    var PumalinD2A2=document.getElementById('PumalinD2A2')
    var PumalinD2A3=document.getElementById('PumalinD2A3')
    var PumalinD2A4=document.getElementById('PumalinD2A4')
    var PumalinD2A5=document.getElementById('PumalinD2A5')
    var PumalinD2A6=document.getElementById('PumalinD2A6')

    PumalinD2D.innerText="Exploring Cucao Fjord and Guafo Island"
    PumalinD2A1.innerText="Breakfast at the lodge."
    PumalinD2A2.innerText="Navigation through the Cucao Fjord, a fjord surrounded by imposing mountains and ancient forests."
    PumalinD2A3.innerText="Visit to Guafo Island, an island with a rich biodiversity of flora and fauna."
    PumalinD2A4.innerText="Picnic lunch on the island."
    PumalinD2A5.innerText="In the afternoon, walk along the Alerce Costero trail, a centuries-old larch forest."
    PumalinD2A6.innerText="Dinner and accommodation at the lodge."


    var PumalinD3D=document.getElementById('PumalinD3D')
    var PumalinD3A1=document.getElementById('PumalinD3A1')
    var PumalinD3A2=document.getElementById('PumalinD3A2')
    var PumalinD3A3=document.getElementById('PumalinD3A3')
    var PumalinD3A4=document.getElementById('PumalinD3A4')
    var PumalinD3A5=document.getElementById('PumalinD3A5')
  
    PumalinD3D.innerText="Trekking to Lake Yelcho and La Virgen Waterfall"
    PumalinD3A1.innerText="Breakfast at the lodge"
    PumalinD3A2.innerText="Trekking excursion to Lake Yelcho, a glacial lake with crystal-clear waters and dreamlike landscapes."
    PumalinD3A3.innerText="Lunch in box lunch."
    PumalinD3A4.innerText="In the afternoon, visit La Virgen Waterfall, an imposing waterfall that will leave you breathless."
    PumalinD3A5.innerText="Dinner and accommodation at the lodge."

    var PumalinD4D=document.getElementById('PumalinD4D')
    var PumalinD4A1=document.getElementById('PumalinD4A1')
    var PumalinD4A2=document.getElementById('PumalinD4A2')
    var PumalinD4A3=document.getElementById('PumalinD4A3')
    var PumalinD4A4=document.getElementById('PumalinD4A4')

    PumalinD4D.innerText="Farewell and transfer to Puerto Montt"
    PumalinD4A1.innerText="Breakfast at the lodge"
    PumalinD4A2.innerText="Transfer back to Puerto Montt."
    PumalinD4A3.innerText="Free time for shopping or tourist activities in the city."
    PumalinD4A4.innerText="End of our services."

    var Incluye=document.getElementById('Incluye')
    var Incluye1=document.getElementById('Incluye1')
    var Incluye2=document.getElementById('Incluye2')
    var Incluye3=document.getElementById('Incluye3')
    var Incluye4=document.getElementById('Incluye4')
    var Incluye5=document.getElementById('Incluye5')

    Incluye.innerText="What includes?"
    Incluye1.innerText="Transfers: Reception and transfer from the Puerto Montt airport or your hotel in the city to the Pumalín Douglas Tompkins National Park. Return transfer from the park to Puerto Montt."
    Incluye2.innerText="Accommodation: 3 nights of accommodation in a comfortable cabin or lodge within the park."
    Incluye3.innerText="Food: Breakfast, lunch and dinner throughout the trip (except lunch on the last day). Picnic lunches during excursions."
    Incluye4.innerText="Excursions: Navigation through the Cucao Fjord. Visit to Guafo Island. Walk along the Alerce Costero trail. Trekking to Lake Yelcho. Visit to La Virgen Waterfall."
    Incluye5.innerText="Others: Travel assistance insurance. Specialized guide during all excursions. Entrance fees to the national park. Necessary equipment for excursions (trekking poles, water poncho, etc.)"

    var NoIncluye=document.getElementById('NoIncluye')
    var NoIncluye1=document.getElementById('NoIncluye1')
    var NoIncluye2=document.getElementById('NoIncluye2')
    var NoIncluye3=document.getElementById('NoIncluye3')
    var NoIncluye4=document.getElementById('NoIncluye4')
    var NoIncluye5=document.getElementById('NoIncluye5')

    NoIncluye.innerText="What is not included?"
    NoIncluye1.innerText="Air tickets: Round-trip flights to Puerto Montt are not included in the package price. You can book your flights with the airline of your choice."
    NoIncluye2.innerText="Alcoholic beverages: Alcoholic beverages are not included in meals or picnics. You can buy them at the lodge bar or at the local restaurant."
    NoIncluye3.innerText="Tips."
    NoIncluye4.innerText="Personal expenses: Personal expenses such as souvenirs, telephone calls, laundry, etc., are not included in the package price."
    NoIncluye5.innerText="Travel insurance: It is recommended to take out travel insurance that covers medical expenses, flight cancellation and lost luggage."
    
    var Importante=document.getElementById("Importante")
    var Importante1=document.getElementById("Importante1")
    var Importante2=document.getElementById("Importante2")
    var Importante3=document.getElementById("Importante3")
    var Importante4=document.getElementById("Importante4")

    Importante.innerText="Important"
    Importante1.innerText="The trip itinerary may be subject to change due to weather conditions, transportation availability or for other unforeseen reasons."
    Importante2.innerText="It is important to wear clothes and footwear appropriate for the weather and the activities to be carried out."
    Importante3.innerText="It is recommended to bring sunscreen, mosquito repellent, a hat and sunglasses."
    Importante4.innerText="It is important to respect the rules of the national park and  protect the environment."


   var QuePermi=document.getElementById('QuePermi')
   
   QuePermi.innerText="What is allowed and prohibited in the Pumalín Douglas Tompkins National Park?"

   var Permitido=document.getElementById('Permitido')
   var Permitido1=document.getElementById('Permitido1')
   var Permitido2=document.getElementById('Permitido2')
   var Permitido3=document.getElementById('Permitido3')
   var Permitido4=document.getElementById('Permitido4')
   var Permitido5=document.getElementById('Permitido5')
   var Permitido6=document.getElementById('Permitido6')
   var Permitido7=document.getElementById('Permitido7')
   var Permitido8=document.getElementById('Permitido8')

   Permitido.innerText="Allowed"
   Permitido1.innerText="Go hiking and trekking along the marked trails."
   Permitido2.innerText="Kayak or canoe through the fjords and lakes (with a permit)."
   Permitido3.innerText="Fishing in rivers and lakes (with a permit)."
   Permitido4.innerText="Observe the flora and fauna."
   Permitido5.innerText="Camp in designated areas."
   Permitido6.innerText="Bring enough food and drink for the excursions."
   Permitido7.innerText="Use sunscreen and mosquito repellent."
   Permitido8.innerText="Appropriate clothing and footwear for the weather and the activities to be carried out."

   var Prohibido=document.getElementById('Prohibido')
   var Prohibido1=document.getElementById('Prohibido1')
   var Prohibido2=document.getElementById('Prohibido2')
   var Prohibido3=document.getElementById('Prohibido3')
   var Prohibido4=document.getElementById('Prohibido4')
   var Prohibido5=document.getElementById('Prohibido5')
   var Prohibido6=document.getElementById('Prohibido6')
   var Prohibido7=document.getElementById('Prohibido7')
   var Prohibido8=document.getElementById('Prohibido8')
   var Prohibido9=document.getElementById('Prohibido9')
   var Prohibido10=document.getElementById('Prohibido10')
   var Prohibido11=document.getElementById('Prohibido11')

   Prohibido.innerText="Not allowed"
   Prohibido1.innerText="Leave the marked trails."
   Prohibido2.innerText="Make campfires outside of designated areas."
   Prohibido3.innerText="Cause damage to the flora or fauna of the park."
   Prohibido4.innerText="Pollute water or soil."
   Prohibido5.innerText="Entering non-permitted areas with motorized vehicles."
   Prohibido6.innerText="Disturb wildlife."
   Prohibido7.innerText="Extract flora or fauna from the park."
   Prohibido8.innerText="Use drones without prior authorization."
   Prohibido9.innerText="Carry out noisy activities that may disturb the tranquility of the park."
   Prohibido10.innerText="Camping in non-designated areas."
   Prohibido11.innerText="Leaving trash in the park."

   var Recuerda=document.getElementById('Recuerda')
   var Recuerda1=document.getElementById('Recuerda1')

   Recuerda.innerText="Remember!"
   Recuerda1.innerText="Your responsible behavior will help protect this valuable natural heritage for future generations."

}

function InglesPuyehue(){

    var PuyehueT = document.getElementById('PuyehueT')
    var PuyehueDesc= document.getElementById('PuyehueDesc')
    var PuyehueSub= document.getElementById('PuyehueSub')
    var PuyehueSub2= document.getElementById('PuyehueSub2')
    var PuyehueIti= document.getElementById('PuyehueIti')
    var Dia= document.getElementById('Dia')
    var Descripcion=document.getElementById('Descripcion')
    var Actividades= document.getElementById('Actividades')

    PuyehueT.innerText="Puyehue National Park"
    PuyehueDesc.innerText="Are you ready to explore one of the South's most impressive natural treasures? The Puyehue National Park awaits you with its dream landscapes and rich biodiversity. Don't miss the opportunity to marvel at the imposing Truful Truful Waterfall and explore the mysterious Coigües Forests, home to a wide variety of flora and fauna unique to the region."
    PuyehueSub.innerText="Come and discover the magic. An adventure awaits you on every trail!"
    PuyehueSub2.innerText="Take advantage of this unique opportunity to visit Puyehue National Park! Book your adventure now."
    PuyehueIti.innerText="Schedule"
    Dia.innerText="Day"
    Descripcion.innerText="Description"
    Actividades.innerText="Activities"

    var PuyehueD1D=document.getElementById('PuyehueD1D')
    var PuyehueD1A1=document.getElementById('PuyehueD1A1')
    var PuyehueD1A2=document.getElementById('PuyehueD1A2')
    var PuyehueD1A3=document.getElementById('PuyehueD1A3')

    PuyehueD1D.innerText="Arrival in Puerto Montt and transfer to the park."
    PuyehueD1A1.innerText="We are waiting for you in the van that is located a few meters from the bus terminal."
    PuyehueD1A2.innerText="Accommodation in a comfortable cabin or lodge within the park."
    PuyehueD1A3.innerText="Welcome dinner at a local restaurant."

    var PuyehueD2D=document.getElementById('PuyehueD2D')
    var PuyehueD2A1=document.getElementById('PuyehueD2A1')
    var PuyehueD2A2=document.getElementById('PuyehueD2A2')
    var PuyehueD2A3=document.getElementById('PuyehueD2A3')
    var PuyehueD2A4=document.getElementById('PuyehueD2A4')
    var PuyehueD2A5=document.getElementById('PuyehueD2A5')

    PuyehueD2D.innerText="Hiking to Lake Puyehue and Aguas Calientes Hot Springs"
    PuyehueD2A1.innerText="Breakfast at the lodge."
    PuyehueD2A2.innerText="Hiking to Lake Puyehue and Aguas Calientes Hot Springs"
    PuyehueD2A3.innerText="Picnic lunch by the lake."
    PuyehueD2A4.innerText="A relaxing time in the Aguas Calientes Hot Springs."
    PuyehueD2A5.innerText="Dinner and accommodation at the lodge."

    var PuyehueD3D=document.getElementById('PuyehueD3D')
    var PuyehueD3A1=document.getElementById('PuyehueD3A1')
    var PuyehueD3A2=document.getElementById('PuyehueD3A2')
    var PuyehueD3A3=document.getElementById('PuyehueD3A3')
    var PuyehueD3A4=document.getElementById('PuyehueD3A4')
    var PuyehueD3A5=document.getElementById('PuyehueD3A5')
    var PuyehueD3A6=document.getElementById('PuyehueD3A6')

    PuyehueD3D.innerText="Ascent to Osorno Volcano (optional)"
    PuyehueD3A1.innerText="Early breakfast at the lodge."
    PuyehueD3A2.innerText="Optional: Ascent to the Osorno Volcano."
    PuyehueD3A3.innerText="Alternative: Walk along the Alerce Andino trail or visit the Environmental Interpretation Center."
    PuyehueD3A4.innerText="Lunch in lunch box."
    PuyehueD3A5.innerText="Return to the lodge in the afternoon."
    PuyehueD3A6.innerText="Farewell dinner and accommodation at the lodge."

    var PuyehueD4D=document.getElementById('PuyehueD4D')
    var PuyehueD4A1=document.getElementById('PuyehueD4A1')
    var PuyehueD4A2=document.getElementById('PuyehueD4A2')
    var PuyehueD4A3=document.getElementById('PuyehueD4A3')
    var PuyehueD4A4=document.getElementById('PuyehueD4A4')

   
  

    PuyehueD4D.innerText="Farewell and transfer to Puerto Montt"
    PuyehueD4A1.innerText="Breakfast at the lodge."
    PuyehueD4A2.innerText="Transfer back to Puerto Montt."
    PuyehueD4A3.innerText="Free time for shopping or tourist activities in the city."
    PuyehueD4A4.innerText="End of our services."


    var pIncluye=document.getElementById('pIncluye')
    var pIncluye1=document.getElementById('pIncluye1')
    var pIncluye2=document.getElementById('pIncluye2')
    var pIncluye3=document.getElementById('pIncluye3')
    var pIncluye4=document.getElementById('pIncluye4')
    var pIncluye5=document.getElementById('pIncluye5')

    pIncluye.innerText="Include"
    pIncluye1.innerText="Transfers to and from Puerto Montt airport."
    pIncluye2.innerText="Accommodation for 3 nights in a cabin or lodge."
    pIncluye3.innerText="Alimentación completa (desayuno, almuerzo y cena)."
    pIncluye4.innerText="Guided excursions to Lake Puyehue and Hot Springs of Aguas Calientes."
    pIncluye5.innerText="Travel assistance insurance."

    var pNoIncluye=document.getElementById('pNoIncluye')
    var pNoIncluye1=document.getElementById('pNoIncluye1')
    var pNoIncluye2=document.getElementById('pNoIncluye2')
    var pNoIncluye3=document.getElementById('pNoIncluye3')
    var pNoIncluye4=document.getElementById('pNoIncluye4')

    pNoIncluye.innerText="Not Include"
    pNoIncluye1.innerText="Airfare."
    pNoIncluye2.innerText="Ascent to Osorno Volcano (optional)."
    pNoIncluye3.innerText="Alcoholic beverages."
    pNoIncluye4.innerText="Tips."

    var Importante=document.getElementById('pImportante')
    var ImportanteSub=document.getElementById('pImportanteSub')

    var Importante1=document.getElementById('pImportante1')
    var Importante2=document.getElementById('pImportante2')
    var Importante3=document.getElementById('pImportante3')
    var Importante4=document.getElementById('pImportante4')
    
    Importante.innerText="Important"
    ImportanteSub.innerText="To preserve the ecosystem of the Puyehue National Park, we request you to not bring."
    Importante1.innerText="Pets"
    Importante2.innerText="Fireworks"
    Importante3.innerText="Single-use plastics."
    Importante4.innerText="Exotic species of plants or animals."

    var Prohibido=document.getElementById('pProhibido')
    var Prohibido1=document.getElementById('pProhibido1')
    var Prohibido2=document.getElementById('pProhibido2')
    var Prohibido3=document.getElementById('pProhibido3')
    var Prohibido4=document.getElementById('pProhibido4')

    Prohibido.innerText="It is not allowed either"
    Prohibido1.innerText="Make campfires outside of designated areas."
    Prohibido2.innerText="Damage the flora or fauna of the park."
    Prohibido3.innerText="Pollute water or soil."
    Prohibido4.innerText="Entering non-permitted areas with motorized vehicles."

    var Recuerda=document.getElementById('pRecuerda')
    var Recuerda1=document.getElementById('pRecuerda1')

    Recuerda.innerText="Remember!"
    Recuerda1.innerText="Your responsible behavior will help protect this valuable natural heritage for future generations."



}


function InglesVicente(){
    var VicenteT = document.getElementById('VicenteT')
    var VicenteDesc= document.getElementById('VicenteDesc')
    var VicenteSub= document.getElementById('VicenteSub')
    var VicenteSub2= document.getElementById('VicenteSub2')
    var VicenteIti= document.getElementById('VicenteIti')
    var Dia= document.getElementById('Dia')
    var Descripcion=document.getElementById('Descripcion')
    var Actividades= document.getElementById('Actividades')

    VicenteT.innerText="Vicente Pérez Rosales National Park"
    VicenteDesc.innerText='Do you want to come see one of the most spectacular parks in the south? If so, the Vicente Pérez Rosales National Park is an option to take into account. Most companies only offer to go tour the falls of the Petrohue River, which, although it is one of the most famous points of the park, this is not all that this wonderful place offers, as there are places such as: the "Los Enamorados" trail, the "Laguna Verde", the "Cascada de los Novios", "Los Pileyos ", among several other places.'
    VicenteSub.innerText="Are you interested?"
    VicenteSub2.innerText="Take advantage of this unique opportunity to visit the Vicente Pérez Rosales National Park! Book your adventure now."
    VicenteIti.innerText="Schedule"
    Dia.innerText="Day"
    Descripcion.innerText="Description"
    Actividades.innerText="Activities"

    var VicenteD1D = document.getElementById('VicenteD1D')
    var VicenteD1A1 = document.getElementById('VicenteD1A1')
    var VicenteD1A2 = document.getElementById('VicenteD1A2')
    var VicenteD1A3 = document.getElementById('VicenteD1A3')

    VicenteD1D.innerText="Arrival in Puerto Montt and transfer to the park"
    VicenteD1A1.innerText="Reception and transfer from the Puerto Montt airport or your hotel in the city to the Pumalín Douglas Tompkins National Park."
    VicenteD1A2.innerText="Accommodation in a comfortable cabin or lodge within the park."
    VicenteD1A3.innerText="Welcome dinner at a local restaurant."

    var VicenteD2D = document.getElementById('VicenteD2D')
    var VicenteD2A1 = document.getElementById('VicenteD2A1')
    var VicenteD2A2 = document.getElementById('VicenteD2A2')
    var VicenteD2A3 = document.getElementById('VicenteD2A3')
    var VicenteD2A4 = document.getElementById('VicenteD2A4')
    var VicenteD2A5 = document.getElementById('VicenteD2A5')
    var VicenteD2A6 = document.getElementById('VicenteD2A6')

    VicenteD2D.innerText="Exploring Todos los Santos Lake and Petrohué Falls"
    VicenteD2A1.innerText="Breakfast at the lodge."
    VicenteD2A2.innerText="Navigation through Lake Todos los Santos, a body of water surrounded by mountains and ancient forests."
    VicenteD2A3.innerText="Visit to the Petrohué Falls, a series of imposing waterfalls."
    VicenteD2A4.innerText="Picnic lunch by the lake."
    VicenteD2A5.innerText="In the afternoon, walk along the Los Alerces trail, a centuries-old larch forest."
    VicenteD2A6.innerText="Dinner and accommodation at the lodge."

    var VicenteD3D = document.getElementById('VicenteD3D')
    var VicenteD3A1 = document.getElementById('VicenteD3A1')
    var VicenteD3A2 = document.getElementById('VicenteD3A2')
    var VicenteD3A3 = document.getElementById('VicenteD3A3')
    var VicenteD3A4 = document.getElementById('VicenteD3A4')
    var VicenteD3A5 = document.getElementById('VicenteD3A5')

    VicenteD3D.innerText="Trekking to Frio Lake and Cayutue Hot Springs"
    VicenteD3A1.innerText="Breakfast at the lodge."
    VicenteD3A2.innerText="Trekking excursion to Lago Frío, a glacial lake with crystal clear waters."
    VicenteD3A3.innerText="Lunch in lunch box."
    VicenteD3A4.innerText="In the afternoon, relax at the Cayutue Hot Springs."
    VicenteD3A5.innerText="Dinner and accommodation at the lodge."

    var VicenteD4D = document.getElementById('VicenteD4D')
    var VicenteD4A1 = document.getElementById('VicenteD4A1')
    var VicenteD4A2 = document.getElementById('VicenteD4A2')
    var VicenteD4A3 = document.getElementById('VicenteD4A3')
    var VicenteD4A4 = document.getElementById('VicenteD4A4')


    VicenteD4D.innerText="Farewell and transfer to Puerto Montt"
    VicenteD4A1.innerText="Breakfast at the lodge."
    VicenteD4A2.innerText="Return trip to Puerto Montt."
    VicenteD4A3.innerText="Free time for shopping or tourist activities in the city."
    VicenteD4A4.innerText="End of our services."


    var Incluye = document.getElementById('Incluye')
    var Incluye1 = document.getElementById('Incluye1')
    var Incluye2 = document.getElementById('Incluye2')
    var Incluye3 = document.getElementById('Incluye3')
    var Incluye4 = document.getElementById('Incluye4')
    var Incluye5 = document.getElementById('Incluye5')

    Incluye.innerText="Include"
    Incluye1.innerText="Transfers to and from Puerto Montt airport."
    Incluye2.innerText="Accommodation for 3 nights in a cabin or lodge."
    Incluye3.innerText="Complete meals (breakfast, lunch and dinner)."
    Incluye4.innerText="Guided excursions to Lake Todos los Santos, Saltos del Petrohué, Lago Frío and Termas de Cayutue."
    Incluye5.innerText="Travel assistance insurance."


    var NoIncluye= document.getElementById('NoIncluye')
    var NoIncluye1= document.getElementById('NoIncluye1')
    var NoIncluye2= document.getElementById('NoIncluye2')
    var NoIncluye3= document.getElementById('NoIncluye3')

    NoIncluye.innerText="Not include"
    NoIncluye1.innerText="Airfare."
    NoIncluye2.innerText="Alcoholic beverages."
    NoIncluye3.innerText="Tips"

    var Llevar = document.getElementById('Llevar')
    var LlevarSub = document.getElementById('LlevarSub')
    var Llevar1 = document.getElementById('Llevar1')
    var Llevar2 = document.getElementById('Llevar2')
    var Llevar3 = document.getElementById('Llevar3')
    var Llevar4 = document.getElementById('Llevar4')
    var Llevar5 = document.getElementById('Llevar5')
    var Llevar6 = document.getElementById('Llevar6')
    var Llevar7 = document.getElementById('Llevar7')
    var Llevar8 = document.getElementById('Llevar8')

    Llevar.innerText="What to bring?"
    LlevarSub.innerText="To fully enjoy your experience in the Vicente Pérez Rosales National Park, we recommend that you bring the following:"
    Llevar1.innerText="Comfortable and warm clothing for all seasons of the year."
    Llevar2.innerText="Footwear suitable for trekking or hiking."
    Llevar3.innerText="Waterproof jacket and sunscreen."
    Llevar4.innerText="Reusable water bottle."
    Llevar5.innerText="Hat or cap."
    Llevar6.innerText="Mosquito repellent."
    Llevar7.innerText="Photographic camera."
    Llevar8.innerText="Cash."


    var Permit = document.getElementById('Permit')
    var Permitido = document.getElementById('Permitido')
    var Permitido1 = document.getElementById('Permitido1')
    var Permitido2 = document.getElementById('Permitido2')
    var Permitido3 = document.getElementById('Permitido3')
    var Permitido4 = document.getElementById('Permitido4')
    var Permitido5 = document.getElementById('Permitido5')

    Permit.innerText="What is allowed and prohibited?"
    Permitido.innerText="Allowed"
    Permitido1.innerText="Go hiking and trekking along the marked trails."
    Permitido2.innerText="Kayak or canoe on the lakes."
    Permitido3.innerText="Fishing in rivers and lakes (with permission)."
    Permitido4.innerText="Observe the flora and fauna."
    Permitido5.innerText="Camp in designated areas."

    var NoPermitido = document.getElementById('NoPermitido')
    var NoPermitido1 = document.getElementById('NoPermitido1')
    var NoPermitido2 = document.getElementById('NoPermitido2')
    var NoPermitido3 = document.getElementById('NoPermitido3')
    var NoPermitido4 = document.getElementById('NoPermitido4')
    var NoPermitido5 = document.getElementById('NoPermitido5')
    var NoPermitido6 = document.getElementById('NoPermitido6')
    var NoPermitido7 = document.getElementById('NoPermitido7')
    var NoPermitido8 = document.getElementById('NoPermitido8')
    var NoPermitido9 = document.getElementById('NoPermitido9')
    var NoPermitido10 = document.getElementById('NoPermitido10')
    var NoPermitido11 = document.getElementById('NoPermitido11')

    NoPermitido.innerText="Not allowed"
    NoPermitido1.innerText="Leave the marked trails."
    NoPermitido2.innerText="Make campfires outside of designated areas."
    NoPermitido3.innerText="Cause damage to the flora or fauna of the park."
    NoPermitido4.innerText="Pollute water or soil."
    NoPermitido5.innerText="Entering non-permitted areas with motorized vehicles."
    NoPermitido6.innerText="Disturb wildlife."
    NoPermitido7.innerText="Extract flora or fauna from the park."
    NoPermitido8.innerText="Use drones without prior authorization."
    NoPermitido9.innerText="Carry out noisy activities that may disturb the tranquility of the park."
    NoPermitido10.innerText="Camping in non-designated areas."
    NoPermitido11.innerText="Leaving trash in the park."

    var Recuerda = document.getElementById('Recuerda')
    var Recuerda1 = document.getElementById('Recuerda1')

    Recuerda.innerText="Remember!"
    Recuerda1.innerText="Your responsible behavior will help protect this valuable natural heritage for future generations."



}
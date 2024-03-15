
    class Activity {
        constructor(id, title, description, imgUrl) {
            this.id = id;
            this.title = title; 
            this.description = description;
            this.imgUrl  = imgUrl;
        }
    }

    class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const id = ++this.id;
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }


    }

    const repository = new Repository();


    /*function convertInstanceToHtml(activity) {

        const {id, title, description, imgUrl} = activity;

        const conteinerCard = document.createElement('div'); 
        const titleCard = document.createElement('h3');  //<h3> </h3>
        const descriptionCard = document.createElement('p');  
        const imgCard = document.createElement('img'); 

        titleCard.innerHTML = title; //<h3>Titulo</h3>
        descriptionCard.innerHTML = description;
        imgCard.src= imgUrl;
    

        conteinerCard.classList.add('activity-card'); 
        titleCard.classList.add('activity-title');
        descriptionCard.classList.add('activity-description');
        imgCard.classList.add('activity-img');

        conteinerCard.appendChild(titleCard); 
        conteinerCard.appendChild(descriptionCard); 
        conteinerCard.appendChild(imgCard);


        return conteinerCard;

        
    }

    const form = document.querySelector('.formulario-actividad');


    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            handler(event); 
        }
    }




    function convertAllInstanceToHtml() {
        const contenedor = document.getElementById('#contenedor-actividades');
    
        contenedor.innerHTML = "";
    
        const mapeoActivities = repository.getAllActivities().map(convertInstanceToHtml);
    
        mapeoActivities.forEach(activityElement => {
        contenedor.appendChild(activityElement);
        
        });
    }
    
    function handler(event) {
        event.preventDefault();
        const inputTitle = document.getElementById('title').value;
        const inputDescription = document.getElementById('description').value;
        const inputImgUrl = document.getElementById('imgUrl').value;
    
        if (inputTitle === "" || inputDescription === "" || inputImgUrl === "") {
            return alert("Hay datos incompletos");
            }
    
        repository.createActivity(inputTitle, inputDescription, inputImgUrl);
        convertAllInstanceToHtml();

        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
        document.getElementById('imgUrl').value = "";
    }
    
    /*Escuchar evento del boton crear actividad*/ 
            
    const botonCreate = document.getElementById('buttonCreateActivity');
    botonCreate.addEventListener('click', function(event) {
           handler(event);
       });
       
    /*Escuchar evento de tecla enter para crear actividad*/ 
    form.addEventListener('keypress', function(event) {
       if (event.target.tagName.toLowerCase() === 'input') {
           handleKeyPress(event);
           }
           });

   
 /* EXTRA CREDIT. Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre ellas o sobre algún nuevo botón que podamos agregar a las mismas. Eres libre de encarar esta funcionalidad de la manera que consideres adecuada. 🤖 Puedes apoyarte en la IA para ayudarte a realizar este punto. 🤖
  al hacer click sobre la card, se llama a funcion eliminarActividad
 
 */ 
       
   // Escucha el clic en el contenedor de actividades
document.getElementById('contenedor-actividades').addEventListener('click', function(event) {
   // Verifica si el clic fue en una tarjeta de actividad
   if (event.target.closest('.activity-card')) {
       // Obtiene el contenedor de la tarjeta de actividad
       const cardContainer = event.target.closest('.activity-card');
       // Obtiene el ID de la actividad desde el atributo de datos
       const activityId = cardContainer.dataset.activityId;
       // Elimina la actividad utilizando su ID
       deleteActivity(parseInt(activityId)); // Asegúrate de convertir el ID a un número entero
       // Elimina la tarjeta de actividad del DOM
       cardContainer.remove();
   }
});

// Función para eliminar una actividad por su ID
function deleteActivity(id) {
   repository.deleteActivity(id);
}

module.exports = {
    Activity,
    Repository
};

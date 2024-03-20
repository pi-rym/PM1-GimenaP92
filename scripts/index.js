

const repository = new Repository();

function convertInstanceToHtml(activity) {
    const {id, title, description, imgUrl} = activity;

    const conteinerCard = document.createElement('div'); 
    const titleCard = document.createElement('h3');  
    const descriptionCard = document.createElement('p');  
    const imgCard = document.createElement('img'); 
    const deleteButton = document.createElement('button');

    titleCard.innerHTML = title; 
    descriptionCard.innerHTML = description;
    imgCard.src= imgUrl;
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');

    conteinerCard.classList.add('activity-card'); 
    titleCard.classList.add('activity-title');
    descriptionCard.classList.add('activity-description');
    imgCard.classList.add('activity-img');

    conteinerCard.appendChild(titleCard); 
    conteinerCard.appendChild(descriptionCard); 
    conteinerCard.appendChild(imgCard);
    conteinerCard.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        deleteActivity(id);
        conteinerCard.remove();
    });

    return conteinerCard;
}

const form = document.querySelector('.formulario-actividad');

function convertAllInstanceToHtml() {
    const contenedor = document.getElementById('contenedor-actividades');

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

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (event.target.tagName.toLowerCase() === 'input') {
            handleKeyPress(event);
        }
    }
});

// Escucha el clic en el botón de eliminar
document.getElementById('contenedor-actividades').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        const cardContainer = event.target.closest('.activity-card');
        const activityId = cardContainer.dataset.activityId;
        deleteActivity(parseInt(activityId)); 
        cardContainer.remove();
    }
});

// Función para eliminar una actividad por su ID
function deleteActivity(id) {
    repository.deleteActivity(id);
}

 

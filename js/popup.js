   // Функция для открытия всплывающего окна
   function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Функция для закрытия всплывающего окна
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Назначаем обработчик события клика на ссылку
document.getElementById("openPopup").addEventListener("click", function(event){
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    openPopup(); // Вызываем функцию открытия всплывающего окна
});


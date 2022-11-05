//хочу, чтобы круглая целая пицца крутилась при наведении мыши, а при клике из нее пропадало по 1 кусочку

//при наведении мыши пицца вращается
function rotate() {
    document.getElementById('pizza').style.animation = '10s linear 0s normal none infinite running rot';
}

//при уходе мыши перестает вращаться
function stopRotating() {
    document.getElementById('pizza').style.animation = '10s linear 0s normal none infinite paused rot';
}

//при одном клике кусочек отъезжает в сторону, а при двойном - исчезает

//при нажатии на кнопку заменяю див с целой пиццей на див с отрезанным кусочком, сам отрезанный кусок чуть сдвинут
function choosePiece() {
    //document.getElementById('pizza').replaceWith('pizzaWithout9'); //заменяю див с целой пиццей на див с отрезанным куском
    document.getElementById('pizza').style.display = 'none';
    document.getElementById('pizzaWithout9').style.display = 'block'; //делаю его видимым
    document.getElementById('cutPiece9').style.left = "-30px"; //отодвигаю отрезанный кусок, при наведении на него мыши курсор становится указателем
    document.getElementById('btnPizza').textContent = "Good choice! Now click the piece"; //Надпись на кнопке меняется на подсказку
}

//при клике на весь слой с отрезанным кусочком он отъедет влево, перевернется вертикально и под ним появится текст
function giveInfoAboutPiece() {
    document.getElementById('cutPiece9').style.animation = 'glide 1s ease 0s normal running forwards'; //отъезжает влево
    document.getElementById('desc').style.display = 'inline'; //появляется текст
    document.getElementById('btnPizza').textContent = "To add to cart, double-click the piece"; //Надпись на кнопке меняется на новую подсказку
}

//при двойном клике кусочек исчезает
function disappears() {
    document.getElementById('cutPiece9').style.display = 'none'; //кусочек исчезает
    document.getElementById('desc').style.display = 'none'; //текст тоже исчезает
    alert('Added to your cart'); //уведомление о добавлении в корзину
    document.getElementById('pizzaWithout9').style.display = 'none';
    document.getElementById('pizza').style.display = 'block';
    document.getElementById('btnPizza').textContent = "Buon appetito!"; //Надпись на кнопке меняется на поздравление
    let btn = document.getElementById('btnPizza');
    btn.setAttribute('disabled', true);// делаю кнопку неактивной
    btn.classList.remove('hover');
    btn.style.color = 'black';
    btn.style.backgroundColor = 'rgba(248, 255, 31, 0.932)';

}
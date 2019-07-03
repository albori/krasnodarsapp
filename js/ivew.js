window.onload = function(){
	var scro = 2500;
	var password = window.localStorage.getItem('password');
	var login = window.localStorage.getItem('login');
	var slow = 15;
	$.ajax({
		url: '../php/view.php',
		type: 'POST',
		data:{login: login, password: password, slow: slow },
		success: function (data) {
			$("#content").append(data);
			alibaab();
		}
	});
$("#reload").click(function () {
			var content = document.getElementById("content");
			content.innerHTML = '';
	slow = slow + 15;
	$.ajax({
		url: '/abuxa.zzz.com.ua/app/php/view.php',
		type: 'POST',
		data:{login: login, password: password, slow: slow },
		success: function (data) {
			$("#content").append(data);
			alibaab();
			$('#reload').addClass('disnon')
    $(window).scrollTop(scro) ;
		}
	});
})
var inp = document.querySelectorAll(".username a");
inp.onclick = function(){
	this.className = 'class_name';
}
$(".burger").click(function (e) {
		$(".menuleft").toggleClass('activemenu');
	});
function alibaab(e) {
	$('.ul li span').on('click', function(){
    $(this).next('ul').slideToggle();
    $(this).toggleClass('sow');
    $(this).parent().toggleClass('show');
  });
}
}

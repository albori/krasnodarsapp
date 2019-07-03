window.onload = function (e) {
	var login = window.localStorage.getItem('login');
	var password = window.localStorage.getItem('password');
	console.log(login)
	console.log(password)
					var dannie = "" + "&login=" + login +"&password=" + password +"";
					console.log(dannie);
	$.ajax({
		url:'http://abuxa.zzz.com.ua/app//php/main.php',
		type: 'POST',
		data:dannie,
		success: function (data) {
			$("#rowew").append(data);
		}
	});
$(".burger").click(function (e) {
		$(".menuleft").toggleClass('activemenu');
	});
}
window.onload = function () {
	$('.popap').click(function (e) {
		$('.pavils').addClass('xofa');
	});
	$(".closespopap").click(function (e) {
		$('.pavils').toggleClass('xofa');
	})
	var bow = document.getElementById("bow");
	$(".inps").click(function(e) {
		console.log(this)
		$(".inps").removeClass('show');
		$(this).addClass("show");
	});
	$('.bongo').click(function () {
		$(this).toggleClass('active');
	})
	$(".avtorizeshenactives").click(function (e) {
		$(".registers").removeClass("active");
		$(".avtorizeshen").addClass("active");
	});
	$(".registersacitves").click(function (e) {
		$(".avtorizeshen").removeClass("active");
		$(".registers").addClass("active");
	});
	$(".deti").click(function (e) {
		$(".childrens").toggleClass("show");
	});
	$(".burger").click(function (e) {
		$(".menuleft").toggleClass('activemenu');
	});
	$("#burger").click(function (e) {
		$(".menuleft").toggleClass('activemenu');
	});
}

$("#registreshen").click(function(e) {
			e.preventDefault()
			bow.innerHTML + "text";
			console.log('')
		var dannie2 = $("#registeress").serialize();
	$.ajax({
		url:'http://abuxa.zzz.com.ua/app/php/register.php',
		type: 'POST',
		data:dannie2,
		success: function (dada) {
			$("#boe").append(dada);
			if ( boe == true ) {
				var login 	 = document.getElementById("login").innerHTML;
				var password = document.getElementById("pasw").innerHTML;
				window.localStorage.setItem("login", login);
				window.localStorage.setItem("password", password);
				window.location.href = "main.html";
			}
		}
	})
	});

$("#avtorizeshen").click(function(e) {
			e.preventDefault()
		var dannie = $("#avtorizeshenss").serialize();
	$.ajax({
		url:'http://abuxa.zzz.com.ua/app/php/login.php',
		type: 'POST',
		data:dannie,
		success: function (data) {
			$("#boes").append(data);
			if (boe == true) {
				var login 	 = document.getElementById("login").innerHTML;
				var password = document.getElementById("pasw").innerHTML;
				window.localStorage.setItem("login", login);
				window.localStorage.setItem("password", password);
				window.location.href = "main.html";
			}else {
			}
		}
	})
	});

$("#addpost").click(function(e) {
				e.preventDefault()
var username = document.getElementById("nameuser");
  var login = window.localStorage.getItem("login");
  console.log(login)
  username.value = login
		var dannie = $("#addposter").serialize();
	$.ajax({
		url:'http://abuxa.zzz.com.ua/app/php/addpost.php',
		type: 'POST',
		data:dannie,
		success: function (data) {
			console.log(data)
			if (data == true) {
				alert("Заявка была успешно добавленно ждите ответов");
				window.location.href = "main.html";
			}else {
			alert(data);
			}
		}
	})
	});
function exit() {
		 window.localStorage.clear();
		 window.location = href="index.html"
	}
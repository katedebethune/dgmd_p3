$(document).ready(function() {
	/*
	$('#btnValidate').click(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            alert('Email is valid');
        }
        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    }); */

	$('#email').focusout(function(e) {
        var em = $('#email').val();
        console.log(em);
        if ($.trim(em).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(em)) {
            alert('Email is valid');
        }
        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    }); 




	/* credit: http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html */
	function validateEmail(sEmail) {

	    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	    if (filter.test(sEmail)) {
			return true;
		}
		else {
			return false;
		}
	}​


})
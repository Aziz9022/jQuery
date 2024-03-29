jQuery('#myForm').validate({
    rules: {
        foodName: {
            required: true,
            minlength: 5,
        },
        foodPrice: {
            required: true,
            number: true,
            minlength: 2
        },
        foodQuantity: {
            required: true,
            number: true,
        },
        foodDescription: {
            required: true,
            minlength: 10
        },
        foodRating: {
            required: true,
            maxlength: 1,
            number: true
        }

    }, messages: {
        foodName: {
            required: "Please enter food Name",
            minlength: "Please enter atleast 5 characters"
        },
        foodPrice: {
            required: "Please enter food price",
            number: "Please enter food price in numbers",
            minlength: "Please enter atleast 2 digits"
        },
        foodQuantity: {
            required: "Please enter food quantity",
            number: "Please enter food quantity in numbers",
        }
    }, submitHandler: function (form) {
        form.submit();
    }
});

//Login Form Validation

jQuery("#loginform").validate({
    rules:{
        uemail:{
            required:true,
            email:true
        },
        upassword:{
            required:true,
            minlength:8
        }
    },
    messages:{

    },
    submitHandler:function(form){
        form.submit();
    }
});

// Load Login Page

$(document).ready(function () {

    $("#homebtn").click(function () {
        $("#addfood").fadeOut();
        $("#login").fadeOut();
        $("#main-page").fadeIn();
    });

    $("#foodbtn").click(function () {
        $("#login").fadeOut();
        $("#main-page").fadeOut();

        $("#addfood").load('foodform.html');
        $("#addfood").fadeIn();

    });

    $("#loginbtn").click(function () {
        $("#addfood").fadeOut();
        $("#main-page").fadeOut();

        $("#login").load('login.html');
        $("#login").fadeIn();
    });
});
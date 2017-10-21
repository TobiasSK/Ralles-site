(function () {
    var inputBox = $("#inputAccess");
    var submitButton = $("#btnAccess");

    //ADD ON ENTER CLICK
    submitButton.click(function () {
        var password = "skjoedt2";
        if ($("#inputAccess").val() === password) {
            window.location.href = "work.html";
        } else {
            alert('wrong password, try again!')
        }
        //var getval = ($("#inputAccess").val() ? $("#inputAccess").val() : alert('please fill the text field'))
    });

})();


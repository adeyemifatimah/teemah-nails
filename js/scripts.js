$(document).ready(function () {
    $("#tech").submit(function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const date = $("#date").val();
        const time = $("#time").val();
        const time2 = $("#time2").val();
        const nail = $("#nail").val();





        $("#output").append("Your appointment" + name +"<br>");
        $("#output").append("Has been confirmed for" + date +"<br>" )
        $("#output").append("Which is expected to start for" + time +"<br>")
        $("#output").append("And is expected to and end at" + time2 +"<br>")
        $("#output").append("Your prefered choice of service is" + nail+"<br>")


        alert("Your nail appointment has been sucessfully booked " + name)
        alert("The confirmed date is " + date)
        alert("Your preferd choice of service is " + nail)
        alert("Your nail appointment has been confirmed for " + time)
        alert("Your appointment comes to an end at " + time2)
    });
});


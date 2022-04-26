$(document).ready(function () {
    $("#tech").submit(function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const date = $("date").val();
        const time = $("time").val();
        const time2 = $("time2").val();
        const flavour = $("input:radio[name#flavor]:checked").val();
        $("#output")


        // $("#output").append("Your appointment" + name + "br/>");
        // $("#output").append("Has been confirmed for" + date + "br/>")
        // $("#output").append("Which is expected to start for" + "br/>")
        // $("#output").append("And is expected to and end at" + "br/>")
        // $("#output").append("Your prefered choice of service is" + "br/>")
    });
});


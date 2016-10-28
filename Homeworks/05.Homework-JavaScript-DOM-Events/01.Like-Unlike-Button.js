function clicked() {

    var value = document.getElementById("likeBtn").value;
    if (value == "Like") {
        value = "Unlike";
        document.getElementById("likeBtn").value = value;
    }
    else {
        value = "Like";
        document.getElementById("likeBtn").value = value;
    }
    return value;

}
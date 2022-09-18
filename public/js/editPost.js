const editPostHandler = async function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title');
    const body = document.getElementById('post-body');
    const postId = document.getElementById('post-id');

    const response = await fetch("/api/post/" + postId.value, {
        method: "PUT",
        Body: JSON.stringify({
            title: title.value,
            body: body.value
        }),
        headers: { "Content-Type": "application/json"}
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert('Failed to edit post.');
    }
}

document
    .querySelector("#edit-btn")
    .addEventListener("click", editPostHandler);
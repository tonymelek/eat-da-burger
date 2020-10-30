$(document).on('click', '.devour', function (e) {

    const id = this.classList[this.classList.length - 1]
    const burger_name = $(`#${id}`).text();
    const devoured = $(`<div class="d-flex flex-wrap justify-content-between align-items-center eaten mb-3 p-2 rounded-lg">
    <div class="" id=${id}>${burger_name}</div>
    <div class=" pl-0"> <a class="d-inline-block mx-3 btn btn-info remove ${id}" href="/api/remove/${id}">Remove it!</a></div>`)
    document.getElementById(id).parentElement.outerHTML = '';
    $('#eaten').append(devoured)

})
$(document).on('click', '.delete', function (e) {
    const id = this.classList[this.classList.length - 1]
    document.getElementById(id).parentElement.outerHTML = '';
})
$(document).on('click', '.remove', function (e) {
    const id = this.classList[this.classList.length - 1]
    const burger_name = $(`#${id}`).text();
    const removed = $(`  <div class="d-flex flex-wrap justify-content-between align-items-center uneaten mb-3 p-2 rounded-lg">
    <div id=${id}>${burger_name}</div>
    <div class=" pl-0"> <a class="d-inline-block btn  btn-dark devour ${id}"
            href="/api/devour/${id}">Devour
            it!</a>
        <a class="d-inline-block btn  btn-danger delete ${id}" href="/api/delete/${id}"><i
                class="far fa-trash-alt"></i></a>
    </div>
</div>`)
    document.getElementById(id).parentElement.outerHTML = '';
    $('#uneaten').append(removed)
})
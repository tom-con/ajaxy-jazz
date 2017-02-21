$(document).ready(() => {
  $('button').click(() => {
    let userSearch = $('#search').val();
    $.ajax({
      method: 'GET',
      url: `http://www.omdbapi.com/?s=${userSearch}`,
      dataType: 'JSON',
      success: function(data) {
        let collections = $('.collection');
        $(collections).css("display", "block")
        for (var i = 0; i < 10; i++) {
          $(collections).append(`<li class="collection-item">${data.Search[i].Title}(${data.Search[i].Year})</li>`);
        }
      },
      error: function() {
        console.log("error");
      }
    });
  });
});

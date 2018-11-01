$(function() {
  // Section Scrolling & Pagination
  $.scrollify({
		section: ".section",
    scrollbars: true,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".site-pagination .is-active").removeClass("is-active");

      $(".site-pagination").find("a[href=\"#" + ref + "\"]").addClass("is-active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"site-pagination\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "is-active";
        }
        pagination += 
        `<li class="pagination__item">
          <a class="pagination__item-link ${activeClass}" href="#${$(this).attr("data-section-name")}">
            <span class="pagination__item-text">${$(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1).replace(/[-_—]+/g,' ')}</span>
            <span class="pagination__item-number">${i + 1}</span>
          </a>
        </li>`
      });

      pagination += "</ul>";

      $(".site-header").append(pagination);
      $(".site-pagination a").on("click",$.scrollify.move);
    }
  });

  if(window.matchMedia('(max-width: 1600px)').matches) {
    $.scrollify.destroy();
  }
});
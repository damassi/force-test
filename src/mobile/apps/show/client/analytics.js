$(".entity-with-follow .artist-follow").click(function (e) {
  window.analytics.track("Show page: Artist follow", {
    artistID: $(e.currentTarget).attr("data-id"),
  })
})

$(".show-page-modal-button .icon-share").click(function (e) {
  window.analytics.track("Show page: User clicks share button")
})

window.analytics.trackLink(
  $(".show-page-modal-button .icon-facebook"),
  "Show page: Click Facebook icon share"
)

window.analytics.trackLink(
  $('.show-page-modal-button span:contains("Facebook")'),
  "Show page: Click Facebook text share"
)

window.analytics.trackLink(
  $(".show-page-modal-button .icon-twitter"),
  "Show page: Click Twitter icon share"
)

window.analytics.trackLink(
  $('.show-page-modal-button span:contains("Twitter")'),
  "Show page: Click Twitter text share"
)

window.analytics.trackLink(
  $(".show-page-modal-button .icon-pinterest"),
  "Show page: Click Pinterest icon share"
)

window.analytics.trackLink(
  $('.show-page-modal-button span:contains("Pinterest")'),
  "Show page: Click Pinterest text share"
)

window.analytics.trackLink(
  $(".show-page-location .show-page-location-map"),
  "Show page: Click map link"
)

$("#show-page .show-more-works__artworks-slider").click(function (e) {
  window.analytics.track("Show page: Click show all works")
})

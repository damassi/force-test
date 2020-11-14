const { stringifyJSONForWeb } = require("desktop/components/util/json.coffee")

export const SuperSubArticlesQuery = ids => {
  return `
    query SuperSubArticlesQuery {
      articles(ids: ${stringifyJSONForWeb(ids)}, published: true) {
        thumbnail_title
        thumbnail_image
        title
        slug
      }
    }
  `
}

export const SuperArticleQuery = id => {
  return `
    query SuperArticlesQuery {
      articles(super_article_for: "${id}", published: true ) {
        is_super_article
        thumbnail_title
        title
        slug
        super_article {
          partner_link
          partner_link_title
          partner_logo
          partner_logo_link
          partner_fullscreen_header_logo
          secondary_partner_logo
          secondary_logo_text
          secondary_logo_link
          footer_blurb
          footer_title
          related_articles
        }
      }
    }
  `
}

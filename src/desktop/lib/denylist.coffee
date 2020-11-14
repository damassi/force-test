_ = require 'underscore'

module.exports = (denylist) ->
  path: ->
    location.pathname

  current: ->
    @path().replace /\/$/, ''

  test: (pattern) ->
    new RegExp(pattern).test @current()

  check: ->
    _.any _.map(denylist, _.bind(@test, this))

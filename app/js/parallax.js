!function(h) {
  var l = h(window)
    , c = l.height();
  l.resize(function() {
      c = l.height()
  }),
  h.fn.parallax = function(i, e, n) {
      var r, u = h(this);
      function t() {
          var o = l.scrollTop();
          u.each(function() {
              var n = h(this)
                , t = n.offset().top;
              t + r(n) < o || o + c < t || u.css("backgroundPosition", i + " " + Math.round((t - o) * e) + "px")
          })
      }
      u.each(function() {
          u.offset().top
      }),
      r = n ? function(n) {
          return n.outerHeight(!0)
      }
      : function(n) {
          return n.height()
      }
      ,
      (arguments.length < 1 || null === i) && (i = "50%"),
      (arguments.length < 2 || null === e) && (e = .1),
      (arguments.length < 3 || null === n) && (n = !0),
      l.bind("scroll", t).resize(t),
      t()
  }
}(jQuery);

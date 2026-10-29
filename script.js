  document.querySelectorAll('button.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var target = document.getElementById(btn.getAttribute('data-target'));
      var original = 'Copy';
      function done(msg) {
        btn.textContent = msg;
        setTimeout(function () { btn.textContent = original; }, 1800);
      }
      function fallback() {
        try {
          var range = document.createRange();
          range.selectNodeContents(target);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          done('Selected');
        } catch (e) {
          done('Copy failed');
        }
      }
      try {
        navigator.clipboard.writeText(text).then(function () { done('Copied'); }, fallback);
      } catch (e) {
        fallback();
      }
    });
  });

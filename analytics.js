ui <- fluidPage(
    tags$head(HTML(
      "<script>
      var _paq = _paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      _paq.push(['enableHeartBeatTimer']);
      (function() {
        var u='<kovsiannikov.com/matomo>';
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '2']);
        var d=document,
            g=d.createElement('script'),
            s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; 
            g.async=true; g.defer=true;
            g.src=u+'matomo.js';
            s.parentNode.insertBefore(g,s);
      })();
    </script>"
    )),
    ...  
)
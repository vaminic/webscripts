<script>
  function provideEmail(user, secondlevel, toplevel){
    var address = user;
    var domain = secondlevel;
    var tld = toplevel;
    $(".emaillink").attr("href", 'mailto:' + address + '@' + domain + '.' + tld);
  }
</script>

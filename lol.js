console.log(
  "%c Made by master %c Join Discord: https://discord.gg/xZnPWTQBtb ",
  "background: #222; color: #bada55; font-size: 18px; font-weight: bold; padding: 4px 0;",
  "background: #7289DA; color: white; font-size: 18px; padding: 4px 0;"
);

(function() {
  console.log("%c Loading script components...", "color: orange; font-style: italic;");
  
  var jq = document.createElement('script');
  jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
  
  jq.onload = function() {
    console.log("%c jQuery loaded successfully!", "color: green;");
    
    jQuery.noConflict();
    (function($) {
      console.log("%c Character-by-character typing assistant activated", "color: lime; font-weight: bold;");
      
      var textToType = "";
      var currentCharIndex = 0;
      var isInitialized = false;
      
      $('body').on('keypress', '.txtInput', function(e) {
        e.preventDefault();
        
        if (!isInitialized) {
          textToType = $('.inputPanel tr:first').text();
          console.log("%c Text detected (" + textToType.length + " characters)", "color: #FFD700;");
          isInitialized = true;
        }
        
        if (currentCharIndex < textToType.length) {
          var currentChar = textToType[currentCharIndex];
          
          $(this).val($(this).val() + currentChar);
          
          if (currentCharIndex % 20 === 0) {
            console.log("%c Typed character #" + currentCharIndex + ": '" + currentChar + "'", "color: #36a2eb;");
          }
          
          currentCharIndex++;
        } else {
          console.log("%c Finished typing all characters!", "color: green; font-weight: bold;");
        }
      });
      
      console.log("%c Press any key to type the next character", "color: #00BFFF;");
      console.log("%c Warning: WPM above 100 may trigger captcha tests", "color: #FF6347;");
    })(jQuery);
  };
  
  jq.onerror = function() {
    console.error("%c Failed to load jQuery. Check your internet connection.", "color: red;");
  };
  
  document.getElementsByTagName('head')[0].appendChild(jq);
})();

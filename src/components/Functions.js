import React from 'react'
import $ from "jquery";

//////////FUNCTIONS//////////

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }
  
  $("#imgInp").change(function() {
    readURL(this);
  });

/////////////////////////////
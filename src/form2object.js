(function($){

    var tokenize = function(inputName){
        return inputName.match(/[^\[\]]+/g);
    };

    var addToObject = function(tokens, value, objectOut){
        var referencePoint = objectOut;

        // Iterate up until the last token adding objects to the out object, if the object doesn't exist
        for(var i=0; i<tokens.length - 1; i++){
            if(!referencePoint[tokens[i]]){
                referencePoint[tokens[i]] = {};
            }
            referencePoint = referencePoint[tokens[i]];
        }

        // For the last token, set it as the value. If something's there already, overwrite it.
        referencePoint[tokens[tokens.length-1]] = value;
    };

    $.fn.form2object = function(){
        var objectOut = {};
        $("input, select, textarea", this).each(function(){

            var name = $(this).attr("name");
            var value;
            var nodeName = $(this)[0].nodeName.toLowerCase();

            if(nodeName=="input" || nodeName=="textarea"){
                value = $(this).val();
            } else if(nodeName=="select"  || nodeName=="textarea"){
                value = $("option:selected", this).html();
            }

            // Tokenize the name around square brackets
            var tokens = tokenize(name);

            // Add this value to the object
            addToObject(tokens, value, objectOut);
        });

        return objectOut;
    };


}(jQuery));

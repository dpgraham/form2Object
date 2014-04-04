test( "Test form2object method", function(){

    // Construct an object and a form and then test that they're equal
    var formOne = $("<form></form>");
    var testObject = {};
    for(var i=0; i<3; i++){
        testObject[i + ""] = {};
        testObject[i + "sel"] = {};
        testObject[i + "textarea"] = {};
        formOne.append( $("<input>").attr("name", "obj[" + i + "]"));
        for(var j=0; j<3; j++){
            testObject[i + ""][j] = j + "";
            formOne.append( $("<input>").attr("name", "obj[" + i + "][" + j + "]").val(j) );
            testObject[i + "sel"][j] = j + "";
            formOne.append( $("<select></select>").attr("name", "obj[" + i + "sel][" + j + "]").html("<option>5</option><option>2</option><option selected>" + j + "</option>"));
            testObject[i + "textarea"][j] = j + "";
            formOne.append( $("<textarea>").attr("name", "obj[" + i + "textarea][" + j + "]").html(j) );
        }
    }

    deepEqual( {obj: testObject}, formOne.form2object() );

    var formTwo = $("<form></form>");
    var testObject = {};
    for(var i=0; i<30; i++){
        testObject[i + ""] = i + "";

        // Add a generic input
        var inp = $("<input>").attr("name", i + "").val(i + "");
        formTwo.append(inp);

        // Add a select element
        testObject[i + "sel"] = i + "";
        formTwo.append( $("<select></select>").attr("name", "" + i + "sel").html("<option>5</option><option>2</option><option selected>" + i + "</option>"));

        // Add a textarea
        testObject[i + "textarea"] = i + "";
        formTwo.append( $("<textarea>").attr("name", "" + i + "textarea").html(i) );

        // Add an element with no name
        formTwo.append( $("<input>") )
    }

    deepEqual( testObject, formTwo.form2object() );

});
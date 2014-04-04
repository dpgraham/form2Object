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
    console.log(formOne.form2object());
    deepEqual( {obj: testObject}, formOne.form2object() );

    var formTwo = $("<form></form>");
    var testObject = {};
    for(var i=0; i<30; i++){
        testObject[i + ""] = i + "";
        var inp = $("<input>").attr("name", i + "").val(i + "");
        formTwo.append(inp);
    }

    deepEqual( testObject, formTwo.form2object() );
});
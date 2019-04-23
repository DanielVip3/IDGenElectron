$(window).on('load', function() {

    // Activate dropdown's only usefulness

    $('.ui.dropdown').dropdown({
      allowAdditions: true,
    });



    // If premade charset is selected with the checkbox, then disable custom charset's inputs and viceversa.

    $("input[name='premade_charset']").click(function() {
        if ($(this).is(':checked')) {
            $("input[type=checkbox]:not(.cus_char, .pre_char)").prop("checked", false).prop("disabled", false).removeClass("disabled");
            $(".cus_char").prop("checked", false);
            $("#select-custom").prop("disabled", true).addClass("disabled");
        } else {
            $("input[type=checkbox]:not(.cus_char)").prop("checked", false).prop("disabled", true).addClass("disabled");
            $(".cus_char").prop("checked", true);
        };
    });



    // Click on the checkbox for premade charset, that should be selected by default.

    $("input[name='premade_charset']").trigger("click");



    // If "any number" checkbox is checked, unchecks "positive" and "negative" numbers checkboxes and viceversa.

    $("input[name='numbers']").click(function() {
        if ($(this).is(':checked')) {

            $("input[name='pos_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

            $("input[name='neg_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

        } else {

            $("input[name='pos_numbers']").prop("disabled", false).removeClass("disabled");

            $("input[name='neg_numbers']").prop("disabled", false).removeClass("disabled");

        };
    });



    // Click on the checkbox "any number", that should be selected by default.

    $("input[name='numbers']").trigger("click");



    // If the checkbox for positive numbers is checked, disables the "any number" checkbox.
    // If both positive and negative numbers checkboxes are checked, enables "any number" checkbox and disables positive and negative numbers checkboxes.

    $("input[name='pos_numbers']").click(function() {
        if ($(this).is(':checked')) {
            if ($("input[name='neg_numbers']").is(':checked')) {

                $("input[name='numbers']").prop("checked", true).prop("disabled", false).removeClass("disabled");

                $("input[name='pos_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

                $("input[name='neg_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

            } else {
                $("input[name='numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");
            }
        } else {
            if (!$("input[name='neg_numbers']").is(':checked')) {
                $("input[name='numbers']").prop("disabled", false).removeClass("disabled");
            };
        };
    });



    // If the checkbox for negative numbers is checked, disables the "any number" checkbox.
    // If both positive and negative numbers checkboxes are checked, enables "any number" checkbox and disables positive and negative numbers checkboxes.

    $("input[name='neg_numbers']").click(function() {
        if ($(this).is(':checked')) {
            if ($("input[name='pos_numbers']").is(':checked')) {

                $("input[name='numbers']").prop("checked", true).prop("disabled", false).removeClass("disabled");

                $("input[name='neg_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

                $("input[name='pos_numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");

            } else {
                $("input[name='numbers']").prop("checked", false).prop("disabled", true).addClass("disabled");
            }
        } else {
            if (!$("input[name='pos_numbers']").is(':checked')) {
                $("input[name='numbers']").prop("disabled", false).removeClass("disabled");
            };
        };
    });



    // If "any letter" checkbox is checked, unchecks "lower" and "upper" letters checkboxes and viceversa.

    $("input[name='letters']").click(function() {
        if ($(this).is(':checked')) {

            $("input[name='low_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

            $("input[name='high_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

        } else {

            $("input[name='low_letters']").prop("disabled", false).removeClass("disabled");

            $("input[name='high_letters']").prop("disabled", false).removeClass("disabled");

        };
    });



    // Click on the checkbox "any letter", that should be selected by default.

    $("input[name='letters']").trigger("click");



    // If the checkbox for lower letters is checked, disables the "any letter" checkbox.
    // If both upper and lower letters checkboxes are checked, enables "any letter" checkbox and disables upper and lower letters checkboxes.

    $("input[name='low_letters']").click(function() {
        if ($(this).is(':checked')) {
            if ($("input[name='high_letters']").is(':checked')) {

                $("input[name='letters']").prop("checked", true).prop("disabled", false).removeClass("disabled");

                $("input[name='low_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

                $("input[name='high_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

            } else {
                $("input[name='letters']").prop("checked", false).prop("disabled", true).addClass("disabled");
            }
        } else {
            if (!$("input[name='high_letters']").is(':checked')) {
                $("input[name='letters']").prop("disabled", false).removeClass("disabled");
            };
        };
    });



    // If the checkbox for upper letters is checked, disables the "any letter" checkbox.
    // If both upper and lower letters checkboxes are checked, enables "any letter" checkbox and disables upper and lower letters checkboxes.

    $("input[name='high_letters']").click(function() {
        if ($(this).is(':checked')) {
            if ($("input[name='low_letters']").is(':checked')) {

                $("input[name='letters']").prop("checked", true).prop("disabled", false).removeClass("disabled");

                $("input[name='high_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

                $("input[name='low_letters']").prop("checked", false).prop("disabled", true).addClass("disabled");

            } else {
                $("input[name='letters']").prop("checked", false).prop("disabled", true).addClass("disabled");
            }
        } else {
            if (!$("input[name='low_letters']").is(':checked')) {
                $("input[name='letters']").prop("disabled", false).removeClass("disabled");
            };
        };
    });



    // If custom charset is selected with the checkbox, then disable premade charset's checkboxes and viceversa.

    $("input[name='custom_charset']").click(function() {
        if ($(this).is(':checked')) {
            $("input[type=checkbox]:not(.cus_char, .pre_char)").prop("checked", false).prop("disabled", true).addClass("disabled");
            $(".pre_char").prop("checked", false);
        } else {
            $("input[type=checkbox]:not(.cus_char, .pre_char)").prop("checked", false).prop("disabled", false).removeClass("disabled");
            $(".pre_char").prop("checked", true);
        };
    });



    // Function that generates and returns the ID by taking various parameters

    function generateID(template, isCustom, customcharset, bothnum, posnum, negnum, zero, bothlet, uplet, lowlet, speclet, space) {

        // Check if the generation type is custom or not and follow a different path consequently
        if (isCustom) {
            // Instantiates the object with a custom charset.
            var object = {
                custom: customcharset
            };

            // Generates ID from the main function.
            var id = idGenFromTemplate(template, object);

            // Return the id to the other functions
            return id;

        } else {
            // Inverts zero's boolean, because the object asks if zero isn't wanted, not if it's wanted, so if it's true it should be false and viceversa.
            zero = !zero;

            // Instantiates the object without a custom charset.
            var object = {
                both_numbers: bothnum,
                positive_numbers: posnum,
                negative_numbers: negnum,
                no_zero: zero,
                both_letters: bothlet,
                low_letters: lowlet,
                high_letters: uplet,
                special_characters: speclet,
                empty_space: space
            };

            // Generates ID from the main function.
            var id = idGenFromTemplate(template, object);

            // Return the id to the other functions
            return id;

        };
    };



    // Function that shows the ID in the GUI

    function showID(id) {
        $("#template-output > input").prop("readonly", false).val(id).prop("readonly", true);
    };



    // Generation button is pressed

    $("#gen-button").click(function() {
        // declares a boolean variables that contains if the selected generation is with custom charset or with premade charset
        var isCustom = $("input[name='custom_charset']").is(":checked");

        var template = $("#template-input > input").val();

        // check if it's custom charset and follows two different paths if yes or if not
        if (isCustom) {

            // custom charset took for the ID generation
            var customcharset = $("#select-custom").dropdown('get value').split(",");

            // runs the function that will generate the ID and stores it in the "id" variable
            var id = generateID(template, true, customcharset, null, null, null, null, null, null, null, null, null);

            // finally, shows the ID in the template input
            showID(id);
        } else {

            // variables declaration for the future ID generation
            var posnum = $("input[name='pos_num']").is(":checked");
            var negnum = $("input[name='neg_num']").is(":checked");
            var bothnum = $("input[name='numbers']").is(":checked");
            var zero = $("input[name='zero']").is(":checked");
            var lowlet = $("input[name='low_letters']").is(":checked");
            var uplet = $("input[name='high_letters']").is(":checked");
            var bothlet = $("input[name='letters']").is(":checked");
            var speclet = $("input[name='spec_letters']").is(":checked");
            var space = $("input[name='spaces']").is(":checked");


            // editing secondary variables from took data

            if (bothnum && (posnum || negnum)) {
                posnum = false;
                negnum = false;
            };

            if (bothlet && (lowlet || uplet)) {
                lowlet = false;
                uplet = false;
            };

            // runs the function that will generate the ID and stores it in the "id" variable
            var id = generateID(template, false, null, bothnum, posnum, negnum, zero, bothlet, uplet, lowlet, speclet, space);

            // finally, shows the ID in the template input
            showID(id);
        };
    });



    // Copy ID when clicked

    $("#copy-button").click(function() {
        $("#template-output > input").select();
        document.execCommand("copy");
    });
});
$.fn.phoneMask = function () {
    var elem = this;
    this.keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            $phone = $(this);

            // Auto-format- do not expose the mask as the user begins to type
            if (key !== 8 && key !== 9) {
                if ($phone.val().length === 7) {
                    $phone.val($phone.val() + ')');
                }
                if ($phone.val().length === 8) {
                    $phone.val($phone.val() + ' ');
                }
                if ($phone.val().length === 12) {
                    $phone.val($phone.val() + '-');
                }
            }

            // Allow numeric (and tab, backspace, delete) keys only
            return (key == 8 ||
            key == 9 ||
            key == 46 ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
        })

        .bind('focus click', function () {
            $phone = $(this);

            if ($phone.val().length === 0) {
                $phone.val('+7 (');
            }
            else {
                var val = $phone.val();
                $phone.val('').val(val); // Ensure cursor remains at the end
            }
        })

        .blur(function () {
            $phone = $(this);

            if ($phone.val() === '+7 (' || $phone.val().length !== 17) {
                $phone.val('');
            }
        });
}

 $('input[name=phone]').phoneMask();
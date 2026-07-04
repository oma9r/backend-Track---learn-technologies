setTimeout(function () {

    console.log('I execute first.');

    setTimeout(function () {

        console.log('I execute next.');

        setTimeout(function () {

            console.log('I execute last');

        }, 1000);

    }, 1500);

}, 2000);
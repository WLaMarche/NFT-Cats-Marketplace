
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.face, .torso').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('.eye').css('background', '#' + color)  //This changes the color of the cat
    $('#eyescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function pupilsColor(color,code) {
    $('.pupils').css('background', '#' + color)  //This changes the color of the cat
    $('#pupilscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnapupils').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earsColor(color,code) {
    $('.earLine').css('background', '#' + color)  //This changes the color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earTipsColor(color,code) {
    $('.ear, .cat-tail').css('background', '#' + color)  //This changes the color of the cat
    $('#earTipsColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeartips').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tummyColor(color,code) {
    $('.stomach').css('background', '#' + color)  //This changes the color of the cat
    $('#tummyCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatummy').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function pawColor(color,code) {
    $('.catPawLeft, .catPawRight, .backPawLeft, .backPawRight').css('background', '#' + color)  //This changes the color of the cat
    $('#pawColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnapaws').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function shadowColor(color,code) {
    $('.backPawLeft, .backPawRight, .cat-tail, .torso, .face, .eye').css('box-shadow', ' 8px 8px 5px #' + color)  //This changes the color of the cat
    $('#shadowColorCode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnashadow').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}


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
            $('#eyeShapeCode').html('Big')
            break

        case 2:
            normalEyes()
            $('#eyeShapeCode').html('Cute')
            eyesType1()
            break

        case 3:
            normalEyes()
            $('#eyeShapeCode').html('Chillin')
            eyesType2()
            break

        case 4:
            normalEyes()
            $('#eyeShapeCode').html('Happy Pills')
            eyesType3()
            break

    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#vibeCode').html('Default')
            break

        case 2:
            normaldecoration()
            $('#vibeCode').html('Cross')
            stomach2()
            break

        case 3:
            normaldecoration()
            $('#vibeCode').html('X')
            stomach3()
            break

        case 4:
            normaldecoration()
            $('#vibeCode').html('TBD')
            stomach4()
            break
    }
}

async function normalEyes() {
    await $('.eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.eye').find('span').css('border-left', '10px solid')
}

async function eyesType2() {
    await $('.eye').find('span').css('border-top', '10px solid')
}

async function eyesType3() {
    await $('.eye').find('span').css('border-bottom', '10px solid')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.stomach').css({'left': '20px',
    'top': '82px',
    'width': '98px',
    'height': '40px',
    'border': '5px solid transparent',
    'border-radius': '50% 50% 40% 40%',
    'clip-path': 'none'})
    //$('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    //$('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function stomach2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.stomach').css({'left': '20px',
    'top': '82px',
    'width': '98px',
    'height': '40px',
    'border': '5px solid transparent',
    //'border-radius': '40% 30% 80% 50%',
    'clip-path': 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%'})
    //$('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    //$('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function stomach3() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.stomach').css({'left': '20px',
    'top': '82px',
    'width': '98px',
    'height': '40px',
    'border': '5px solid transparent',
    //'border-radius': '40% 30% 80% 50%',
    'clip-path': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%'})
    //$('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    //$('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function stomach4() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.stomach').css({'left': '20px',
    'top': '82px',
    'width': '98px',
    'height': '40px',
    'border': '5px solid transparent',
    //'border-radius': '40% 30% 80% 50%',
    'clip-path': 'none',
    'content': '$'})
    //$('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    //$('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

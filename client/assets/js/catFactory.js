
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
            $('#eyeShapeCode').html('Default')
            break
        case 2:
            normalEyes()
            $('#eyeShapeCode').html('Big')
            eyesType2()
            break
        case 3:
            normalEyes()
            $('#eyeShapeCode').html('Right')
            eyesType3()
            break
        case 4:
            normalEyes()
            $('#eyeShapeCode').html('Night Vision')
            eyesType4()
            break
        case 5:
            normalEyes()
            $('#eyeShapeCode').html('Chillin')
            eyesType5()
            break
        case 6:
            normalEyes()
            $('#eyeShapeCode').html('Happy Pills')
            eyesType6()
            break
    }
}

async function normalEyes() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': '10px solid',
    'border-right': 'none',
    'border-top': 'none',
    'border-bottom': 'none',
    'position': 'absolute'})
}

async function eyesType2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': 'none',
    'border-right': 'none',
    'border-top': 'none',
    'border-bottom': 'none',
    'position': 'absolute'})
}

async function eyesType3() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': 'none',
    'border-right': '10px solid',
    'border-top': 'none',
    'border-bottom': 'none',
    'position': 'absolute'})
}

async function eyesType4() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': '10px solid',
    'border-right': '10px solid',
    'border-top': 'none',
    'border-bottom': 'none',
    'position': 'absolute'})
}

async function eyesType5() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': 'none',
    'border-right': 'none',
    'border-top': '10px solid',
    'border-bottom': 'none',
    'position': 'absolute'})
}

async function eyesType6() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.pupils').css({'background-color': '#4DE1FF',
    'border-radius': '50%',
    'width': '30px',
    'height': '25px',
    'margin-left': '8px',
    'margin-top': '3px',
    'border-left': 'none',
    'border-right': 'none',
    'border-top': 'none',
    'border-bottom': '10px solid',
    'position': 'absolute'})
}

function decorationVariation(num) {
    $('#dnaanimation').html(num)
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
            $('#vibeCode').html('Message')
            stomach4()
            break
    }
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
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
    })
    //$('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    //$('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

function animationVariation(num){
  $('#dnaanimation').html(num)
  switch (num) {
    //need to add the .movingTail class to a specific element
    //jQuery --> find element you want to animate using an ID
      case 1:
          resetAnimation();
          $('#animationCode').html('None')
          break
      case 2:
          resetAnimation();
          $('#animationCode').html('Test 1')
          animation1()
          break
      case 3:
          resetAnimation();
          $('#animationCode').html('Test 2')
          animation2()
          break
    }
  }

  async function animation1() {
    //reset any animations to allow for new one to be implemented
    resetAnimation();
    //the 'tail' element is given an ID in index.html file
    $('#tail').addClass('movingTail')
  }

  async function animation2() {
    resetAnimation();
    $('#head').addClass('movingTail')
  }

  function resetAnimation(){
    $('#tail').removeClass('movingTail');
    $('#head').removeClass('movingTail');
  }

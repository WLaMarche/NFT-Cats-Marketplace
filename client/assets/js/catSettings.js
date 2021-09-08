
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 58,
    "eyescolor" : 24,
    "pupilscolor" : 60,
    "earColor" : 53,
    "earTipColor" : 15,
    "tummyColoring" : 35,
    "pawColoring" : 43,
    "shadowColoring" : 35,
    //Cattributes
    "eyesShape" : 5,
    "decorationPattern" : 1,
    "animations" :  2,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnapupils').html(defaultDNA.pupilsColor);
  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnaeartips').html(defaultDNA.earTipsColor);
  $('#dnatummy').html(defaultDNA.tummyColor);
  $('#dnapaws').html(defaultDNA.pawColor);
  $('#dnashadow').html(defaultDNA.shadowColor);

  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnaanimation').html(defaultDNA.animations)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnapupils').html()
    dna += $('#dnaears').html()
    dna += $('#dnaeartips').html()
    dna += $('#dnatummy').html()
    dna += $('#dnapaws').html()
    dna += $('#dnashadow').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)

    eyesColor(colors[dna.eyescolor],dna.eyescolor)
    $('#eyesColor').val(dna.eyescolor)

    pupilsColor(colors[dna.pupilscolor],dna.pupilscolor)
    $('#pupils').val(dna.pupilscolor)

    earsColor(colors[dna.earColor],dna.earColor)
    $('#pupils').val(dna.earColor)

    earTipsColor(colors[dna.earTipColor],dna.earTipColor)
    $('#earTipsColor').val(dna.earTipColor)

    tummyColor(colors[dna.tummyColoring],dna.tummyColoring)
    $('#tummyColor').val(dna.tummyColoring)

    pawColor(colors[dna.pawColoring],dna.pawColoring)
    $('#pawColor').val(dna.pawColoring)

    shadowColor(colors[dna.shadowColoring],dna.shadowColoring)
    $('#shadowColor').val(dna.shadowColoring)

    eyeVariation(1)
    $('#eyeShape').val(dna.eyesShape)

    decorationVariation(1)
    $('#vibe').val(dna.decorationPattern)

    animationVariation(2)
    $('#animations').val(dna.animations)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
});

$('#eyesColor').change(()=>{
    var colorVal = $('#eyesColor').val()
    eyesColor(colors[colorVal],colorVal)
});

$('#pupils').change(()=>{
    var colorVal = $('#pupils').val()
    pupilsColor(colors[colorVal],colorVal)
});

$('#earscolor').change(()=>{
    var colorVal = $('#earscolor').val()
    earsColor(colors[colorVal],colorVal)
});

$('#earTipsColor').change(()=>{
    var colorVal = $('#earTipsColor').val()
    earTipsColor(colors[colorVal],colorVal)
});

$('#tummyColor').change(()=>{
    var colorVal = $('#tummyColor').val()
    tummyColor(colors[colorVal],colorVal)
});

$('#pawColor').change(()=>{
    var colorVal = $('#pawColor').val()
    pawColor(colors[colorVal],colorVal)
});

$('#shadowColor').change(()=>{
    var colorVal = $('#shadowColor').val()
    shadowColor(colors[colorVal],colorVal)
});

$('#eyeShape').change(()=>{
    var shapeVal = parseInt($('#eyeShape').val())
    eyeVariation(shapeVal)
});

$('#vibe').change(()=>{
    var value = parseInt($('#vibe').val())
    decorationVariation(value)
});

$('#animations').change(()=>{
    var animationValue = parseInt($('#animations').val())
    animationVariation(animationValue)
});

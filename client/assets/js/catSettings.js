
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 76,
    "eyesColor" : 10,
    "pupilsColor" : 75,
    "earsColor" : 10,
    "earTipsColor" : 10,
    "tummyColor" : 10,
    "pawColor" : 10,
    "shadowColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnapupils').html(defaultDNA.mouthColor);
  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnaeartips').html(defaultDNA.earTipsColor);
  $('#dnatummy').html(defaultDNA.tummyColor);
  $('#dnapaws').html(defaultDNA.pawColor);
  $('#dnashadow').html(defaultDNA.shdowColor);

  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
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
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
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

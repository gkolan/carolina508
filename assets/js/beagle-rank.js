// http://stackoverflow.com/questions/1960473/unique-values-in-an-array
function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
}

// Assign Variables
var allFontFamilies     = [];
var allFontSizes        = [];
var allColors           = [];
var allFontStyles       = [];
var allBackgroundColors = [];
var uniqueFontFamilies  = [];
var uniqueFontSizes     = [];
var uniqueColors        = [];
var uniqueBgColors      = [];

$('body *').each(function(index, value){
      //Calculate Parameters
      allFontFamilies.push($(this).css('font-family'));
      allFontSizes.push($(this).css('font-size'));
      allColors.push($(this).css('color'));
      allFontStyles.push($(this).css('font-style'));
      allFontStyles.push($(this).css('text-decoration'));
      allBackgroundColors.push($(this).css('background-color'));
});

// Calculate Unique Parameters
uniqueFontFamilies   = allFontFamilies.filter(onlyUnique);
uniqueFontSizes      = allFontSizes.filter(onlyUnique);
uniqueColors         = allColors.filter(onlyUnique);
uniqueBgColors       = allBackgroundColors.filter(onlyUnique);

// Calculate Rank
var rank = (uniqueFontSizes.length - 1) + (uniqueColors.length - 1) + (uniqueBgColors.length - 1) + (uniqueFontFamilies.length - 1);

// Console Log
console.log(allFontStyles.filter( onlyUnique ));
console.log(allBackgroundColors.filter( onlyUnique ));

// Add Beagle Code Rank at the end of the page
$("body").append('<div id="beagle"></div>');

// Styling Beagle
$('#beagle').css({'min-height':'300px','background-color':'#F2F2F2','border-top':'1px solid #ccc','font-size':'14spx','color':'#000','padding':'30px 100px 120px 100px'});
$("#beagle").prepend('<div id="beagle-detail-info"></div>');
$("#beagle").prepend('<div id="beagle-rank"></div>');
$('#beagle-rank').css({'width':'20%','float':'left'});
$('#beagle-detail-info').css({'width':'80%','float':'right'});

// Beagle Rank
$("#beagle-rank").html('<b>Beagle Rank:</b> ' + rank );

// Print Unique Background Colors
$("#beagle-detail-info").prepend('<div id="beagle-bg-color-details" class="beagle-line"></div>')
$("#beagle-bg-color-details").html('<b>Background Colors[' + (uniqueBgColors.length - 1) + ']:</b> <i>' +  uniqueBgColors + ' </i><br>');

// Print Unique Colors
$("#beagle-detail-info").prepend('<div id="beagle-color-details" class="beagle-line"></div>')
$("#beagle-color-details").html('<b>Colors[' + (uniqueColors.length - 1) + ']:</b> <i>' +  uniqueColors + ' </i><br>');

// Unique Font Families
$("#beagle-detail-info").prepend('<div id="beagle-font-size-details" class="beagle-line"></div>');
$("#beagle-font-size-details").html("<b>Font Family's[" + (uniqueFontFamilies.length - 1) + "]:</b> <i>" + uniqueFontFamilies + " </i><br>");

// Unique Font Fonts
$("#beagle-detail-info").prepend('<div id="beagle-font-size-details" class="beagle-line"></div>');
$("#beagle-font-size-details").html('<b>Fonts[' + (uniqueFontSizes.length - 1) + ']:</b> <i>' + uniqueFontSizes + ' </i><br>');

// Add Horizontal Line
$('.beagle-line').css({'border':'1px solid #BBB','padding':'20px 20px 20px 20px'});

// Console Log
console.log(parseInt($("#golden-rule").css('line-height'))/parseInt($("#golden-rule").css('font-size')));
console.log($("#golden-rule").css('line-height'));
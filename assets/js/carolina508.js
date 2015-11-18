// Timestamp
var timestamp = Math.floor(Date.now() / 1000);
var carolina_timestamp = "carolina-" + timestamp;
var carolina = "#" + carolina_timestamp;

// Global Declorations
var anchor_tags = [];
var image_tags = [];

// Compute Anchor Data
$('a').each(function(index, value){
   var anchor = {};
   var href = $(this).attr("href");
   anchor["href"]    =  '<a href="'+href+'" target="_blank"><span>Opens in new window </span>'+href+'</a>';
   anchor["span"]   =  $(this).attr("title");
   if (anchor["span"] === undefined) {
      anchor["span"] = "**undefined title attr**";
   }
   anchor["text"]    =  $(this).text().replace(anchor["span"],'');
   anchor["code"]    =  $(this).clone().wrap('<p>').parent().html();
   var target        =  $(this).attr("target");
   if (target === undefined) {
      target = "";
   } else {
      target = "Yes";
   }
   anchor["target"]  =  target;
   anchor_tags.push(anchor);
});

// Compute Image Data
$('img').each(function(index, value){
   var image = {};
   var current_width   = $(this).css("width");
   var current_height  = $(this).css("height");
   var not_found = "";
   $(this).error(function() {
      not_found = " ( Image does not exist )";
    });
   image["current_hw"]  = current_height + ' and ' + current_width;
    var theImage = new Image();
    theImage.src = $(this).attr("src");
     var native_width   = theImage.width + 'px';
     var native_height = theImage.height + 'px';
    image["native_hw"]  = native_height + ' and ' + native_width;
    image["code"]    =  $(this).clone().wrap('<p>').parent().html();
    image["alt_text"]   =  $(this).attr("alt");
    if (image["alt_text"] === undefined) {
      image["alt_text"] = "****** alt not found in image attributes *****";
      image["alt_text_length"] = "***";
    } else {
    image["alt_text_length"]   = $(this).attr("alt").length;
    }
    image["not_found"]   =  not_found;
    image["is_link_data"] = "";
    var c = $(this).parent();
    if(c.is("a")) {
      image["is_link_data"] = "Yes";
    }
   image_tags.push(image);
});

// Create Report
$("body").append('<div id="'+carolina_timestamp+'"></div>');
$(carolina).css({'background-color':'#EAEAEA','margin-top':'0px','min-height':'200px','border-top':'5px solid #4C6881','font-size':'14px','color':'#000','padding':'20px 100px 120px 100px','font-family': 'Arial, Helvetica, sans-serif'});
$(carolina).append('<div class="carolina-title">Carolina508 Webpage Report</div>');
$(".carolina-title").css({'font-size':'28px','margin-bottom':'40px','color':'#4C6881'});

// Title Tag Info
$(carolina).append('<div class="carolina-section"><div id="carolina-title-section"></div></div>');
$('#carolina-title-section').append('<table class="fixed-layout"><tr><td class="section-title border-B2B5C3" id="title-tag-name"></td><td rowspan="2" class="border-B2B5C3 white-background"><textarea disabled="true" class="carolina-code white-background" id="title-code-info"></textarea></td></tr><tr><td class="section-information border-B2B5C3" id="title-tag-information"></td></tr></table>');
$( "#title-tag-name").html("title tag");
$( "#title-tag-information").html("If each page on the website has the same title, screen readers would not be able to easily distinguish different pages.");
$( "#title-code-info").html($('title').clone().wrap('<p>').parent().html());

// Anchor Tag Info
$(carolina).append('<div class="carolina-section"><div id="carolina-anchor-section"></div></div>');
$('#carolina-anchor-section').append('<table class="fixed-layout"><tr><td class="section-title border-B2B5C3" id="anchor-tag-name"></td><td class="border-B2B5C3" rowspan="2"><div class="carolina-code text-left" id="anchor-tag-example1"></div><textarea disabled="true" class="carolina-code-inline height-100" id="anchor-tag-example2"></textarea></td></tr><tr><td id="anchor-tag-information" class="section-information border-B2B5C3"></td></tr></table>');
$( "#anchor-tag-name").html("anchor tag");
$( "#anchor-tag-information").html("1. Link description should have abundant information and always include < span > for the screen readers as shown in the example on right.</br></br>2. Avoid making users open links in new window as there is no chance of back button. Accessibility person will face difficulty because of this. If it is unavoidable include that in < span > like this: (Opens in new window)");
$( "#anchor-tag-example1").html("<b>Example (<a href='https://silktide.com/i-thought-title-text-improved-accessibility-i-was-wrong/' target='_blank'><span>Title text improved accessibility (Opens in new window) </span>source</a>)</b><br><br>a span { height: 1px; width: 1px; position: absolute; overflow: hidden; top: -10px; }");
$( "#anchor-tag-example2").html('<a href="#"><span>Washington stimulates economic growth </span>Read More</a> Notice there is space before </span> this is to make sure screen reader does not read it as growthRead More');
$('#carolina-anchor-section').append('<table class="fixed-layout" id="anchor-report"><tr class="white-background"><th class="border-B2B5C3-top-none padding-10 text-center report-srno">#</th><th class="border-B2B5C3-top-none padding-10 text-center anchor-span-description">Title Description</th><th class="border-B2B5C3-top-none padding-10 text-center anchor-description">Link Description</th><th class="border-B2B5C3-top-none padding-10 text-center anchor-new-window">Opens in new window?</th><th class="border-B2B5C3-top-none padding-10 text-center anchor-url">URL</th><th class="border-B2B5C3-top-none padding-10 text-center code-link">Code</th></tr></table>');
for (var i = 0; i < anchor_tags.length; i++) {
   $('#anchor-report').append('<tr class="white-background word-break"><td class="border-B2B5C3-top-none padding-10 text-center report-srno">'+(i+1)+'</td><td class="border-B2B5C3-top-none padding-10 text-center anchor-description">'+anchor_tags[i].span+'</td><td class="border-B2B5C3-top-none padding-10 text-center anchor-description">'+anchor_tags[i].text+'</td></td><td class="border-B2B5C3-top-none padding-10 text-center anchor-new-window">'+anchor_tags[i].target+'<td class="border-B2B5C3-top-none padding-10 anchor-url text-center">'+anchor_tags[i].href+'</td><td class="border-B2B5C3-top-none padding-10 anchor-url text-center anchor-report-data" id="anchor-report-data-'+(i+1)+'">&#9661;</td></tr><tr class="white-background word-break white-background code-data-row border-B2B5C3-top-none" id="anchor-report-code-'+(i+1)+'"><td colspan="6"><textarea disabled="true" class="carolina-code-inline white-background border-B2B5C3-top-none anchor-code-data">'+anchor_tags[i].code+'</textarea></td></tr>');
}
$(".anchor-report-data").click(function() {
   var row_id_num = $(this).attr('id').match(/\d+/)[0];
   var code_id = '#anchor-report-code-'+row_id_num;
   $(code_id).toggle();
});

// Image Tag Info
$(carolina).append('<div class="carolina-section"><div id="carolina-image-section"></div></div>');
$('#carolina-image-section').append('<table class="fixed-layout"><tr><td class="section-title border-B2B5C3" id="image-tag-name"></td><td class="border-B2B5C3" rowspan="2"></div><textarea disabled="true" class="carolina-code-inline height-100" id="image-tag-example2"></textarea></td></tr><tr><td id="image-tag-information" class="section-information border-B2B5C3"></td></tr></table>');
$( "#image-tag-name").html("image tag");
$( "#image-tag-information").html("1. Images with alt='' are ignored by screen readers as they are considered decorative. <br><br> 2. Limit alt(alternative) text eplanation to 125 characters. Jaws treats it different if it exceeds.");
$('#carolina-image-section').append('<table class="fixed-layout" id="image-report"><tr class="white-background"><th class="border-B2B5C3-top-none padding-10 text-center report-srno">#</th><th class="border-B2B5C3-top-none padding-10 text-center report-image-preview">Image</th><th class="border-B2B5C3-top-none padding-10 text-center image-description">Alternate Text Description</th><th class="border-B2B5C3-top-none padding-10 text-center report-image-length">Alternate Text Length</th><th class="border-B2B5C3-top-none padding-10 text-center report-image-link">Is this image a link?</th><th class="border-B2B5C3-top-none padding-10 text-center report-image-size">Native Image Size<br><span class="supressed-text">Height and  Width in px</span></th><th class="border-B2B5C3-top-none padding-10 text-center report-image-size">Current Image Size<br><span class="supressed-text">Height and  Width in px</span></th><th class="border-B2B5C3-top-none padding-10 text-center code-link">Code</th></tr></table>');
for (var i = 0; i < image_tags.length; i++) {
  $('#image-report').append('<tr class="white-background word-break"><td class="border-B2B5C3-top-none padding-10 text-center report-srno">'+(i+1)+'</td><td class="border-B2B5C3-top-none padding-10 text-center report-image-preview">'+image_tags[i].code+'</td><td class="border-B2B5C3-top-none padding-10 text-center image-description">'+image_tags[i].alt_text+'</td><td class="border-B2B5C3-top-none padding-10 text-center report-image-length">'+image_tags[i].alt_text_length+'</td><td class="border-B2B5C3-top-none padding-10 text-center report-image-link">'+  image_tags[i].is_link_data+'</td><td class="border-B2B5C3-top-none padding-10 text-center report-image-size">'+image_tags[i].native_hw+'</td><td class="border-B2B5C3-top-none padding-10 text-center report-image-size">'+image_tags[i].current_hw+'</td><td class="border-B2B5C3-top-none padding-10 anchor-url text-center image-report-code" id="image-report-data-'+(i+1)+'">&#9661;</td></tr><tr class="white-background word-break white-background code-data-row border-B2B5C3-top-none" id="image-report-code-'+(i+1)+'"><td colspan="8"><textarea disabled="true" class="carolina-code-inline white-background border-B2B5C3-top-none">'+image_tags[i].code+'</textarea></td></tr>');
}
$(".image-report-code").click(function() {
   var row_id_num = $(this).attr('id').match(/\d+/)[0];
   var code_id = '#image-report-code-'+row_id_num;
   $(code_id).toggle();
});

// Global Animations
$(".code-data-row").hide();

// CSS
$(".carolina-section").css({'font-size':'14px','margin-bottom':'50px'});
$(".section-title").css({'width':'350px','text-align':'center','background-color':'#B2B5C3','font-size':'24px'});
$(".section-title-information").css({'width':'80%;'});
$(".fixed-layout").css({'table-layout':'fixed','width':'100%'});
$(".white-background").css({'background-color':'#FFFFFF'});
$(".supressed-text").css({'color':'#999','font-size':'12px'});
$(".text-center").css({'text-align':'center'});
$(".text-left").css({'text-align':'left'});
$(".text-right").css({'text-align':'right'});
$(".border-B2B5C3").css({'border':'1px solid #B2B5C3'});
$(".border-B2B5C3-top-none").css({'border':'1px solid #B2B5C3','border-top':'none'});
$(".padding-10").css({'padding':'10px'});
$(".report-srno").css({'width':'60px'});
$(".code-link").css({'width':'60px'});
$(".anchor-description").css({'width':'300px'});
$(".report-image-preview").css({'width':'290px'});
$(".report-image-preview img").css({'max-height':'150px','max-width':'150px','display':'block','margin-left':'auto','margin-right':'auto'});
$(".report-image-length").css({'width':'120px'});
$(".report-image-link").css({'width':'120px'});
$(".report-image-size").css({'width':'180px'});
$(".anchor-new-window").css({'width':'125px'});
$(".anchor-span-description").css({'width':'290px'});
$(".anchor-code-data").css({'margin-top':'5px'});
$(".carolina-code").css({'font-family':'"Courier New", Courier, monospace','width':'100%','height':'125px','max-width':'100%','max-height':'125px','padding':'20px','border':'none','word-break': 'break-word'});
$(".carolina-code-inline").css({'font-family':'"Courier New", Courier, monospace','width':'100%','max-width':'100%','border':'none','background-color':'#EAEAEA','word-break': 'break-word','padding-left': '20px','padding-right': '20px'});
$(".height-100").css({'height':'100px'});
$(".section-information").css({'padding':'20px'});
$("a span").css({'height':'1px','width':'1px','position':'absolute','overflow':'hidden','top':'-10px'});
$(".word-break").css({'word-break':'break-word'});

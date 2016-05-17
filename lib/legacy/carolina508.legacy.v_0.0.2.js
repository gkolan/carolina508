if (window.jQuery) {
// http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
function randomstring(L){
    var s= '';
    var randomchar=function(){
      var n= Math.floor(Math.random()*62);
      if(n<10) return n; //1-10
      if(n<36) return String.fromCharCode(n+55); //A-Z
      return String.fromCharCode(n+61); //a-z
    }
    while(s.length< L) s+= randomchar();
    return s;
}

// UUID, Timestamp, Random String
var carolina508_uuid = "carolina508-grk-7675180339340254";
var carolina508_random_string = randomstring(32);
var carolina508_timestamp = Math.floor(Date.now() / 1000);
var carolina508_project_name  = "legacy";

// Project Functions
function genUniqTxtCarolina(str) {
  return "carolina-" + carolina508_project_name + "-" + str + "-"+ carolina508_random_string + carolina508_timestamp;
}
function genIdCarolina(str) {
  return "#" + str;
}
function genClsCarolina(str) {
  return "." + str;
}
function genCodeCarolina(str) {
  return '<textarea disabled="true">' + str + '</textarea>';
}

// Global Declarations
var title_tag = "";
var anchor_tags = [];
var dup_anchor_tags = [];
var image_tags = [];
var form_tags = [];
var input_tags = [];
var button_tags = [];


// Compute Title Information
title_tag = $(document).find("title").clone().wrap('<p>').parent().html();
if (title_tag === undefined) {
  title_tag = "****** title tag not found *****";
}
// Compute Anchor Data
$('a').not(genClsCarolina(carolina508_uuid) + ' a').map(function(index, value){
    var anchor = {};
    anchor["title"]   =  $(this).attr("title");
    if (anchor["title"] === undefined) {
      anchor["title"] = "****** title attribute not found ******";
    }
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
$('img').not(genClsCarolina(carolina508_uuid) + ' img').each(function(index, value){
   var image = {};
   var current_width   = $(this).css("width");
   var current_height  = $(this).css("height");
   var not_found = "";
   $(this).error(function() {
      not_found = " ( Image does not exist )";
    });
   image["current_hw"]  = ' ( h: ' + current_height + ' &amp; w: ' + current_width + ' ) ';
    var theImage = new Image();
    theImage.src = $(this).attr("src");
     var native_width   = theImage.width + 'px';
     var native_height = theImage.height + 'px';
    image["native_hw"]  = ' ( h: ' + native_height + ' &amp; w: ' + native_width + ' ) ';
    image["code"]    =  $(this).clone().wrap('<p>').parent().html();
    image["alt_text"]   =  $(this).attr("alt");
    if (image["alt_text"] === undefined) {
      image["alt_text"] = "****** alt attribute not found *****";
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

// Compute Form Data
$('form').not(genClsCarolina(carolina508_uuid) + ' form').each(function(index, value){
    var all_buttons = [];
    var all_inputs = [];
    var form_data = {};
    form_data["action_info"] = $(this).attr('action');
    $(this).find("button").each(function(index, value){
      var button_data = {};
      button_data["id"] = $(this).attr('id');
      button_data["text"] = $(this).text();
      all_buttons.push(button_data);
    });
    $(this).find("input").each(function(index, value){
      var input_data = {};
      input_data["id"] = $(this).attr('id');
      input_data["name"] = $(this).attr('name');
      input_data["type"] = $(this).attr('type');
      input_data["is_focused"] = $(this).is(":focus");
      all_inputs.push(input_data);
    });
    form_data["buttons"] = all_buttons;
    form_data["inputs"] = all_inputs;
    form_tags.push(form_data);
    console.log(form_tags);
});

//Project Declarations
var carolina508_clr_hex         = "#001F3F";
var carolina508_bg_hex          = "#F0F0F0";
var carolina508_border_hex      = "#CCCCCC";

var carolina508_project_timestamp     = genUniqTxtCarolina("");
var carolina508_id                    = genIdCarolina(carolina508_project_timestamp);
var carolina508_report                = genUniqTxtCarolina("report");
var carolina_section                  = genUniqTxtCarolina("section");
var fixed_layout                      = genUniqTxtCarolina("fixed-layout");
var table_title                       = genUniqTxtCarolina("table-title");
var table_references                  = genUniqTxtCarolina("table-references");
var table_instructions                = genUniqTxtCarolina("table-instructions");
var table_result                      = genUniqTxtCarolina("table-result");
var table_results_matrix              = genUniqTxtCarolina("table-results-matrix");
var table_results_matrix_no_width       = genUniqTxtCarolina("table-results-matrix-no");
var table_results_matrix_details_width  = genUniqTxtCarolina("table-results-matrix-details");

var table_cell_header_css             = genUniqTxtCarolina("table-cell-header");
var table_cell_data_left_css          = genUniqTxtCarolina("table-cell-data-right");
var table_cell_data_right_css         = genUniqTxtCarolina("table-cell-data-right");
var table_cell_data_center_css        = genUniqTxtCarolina("table-cell-data-right");

// Create Report
$("body").append('<div class="'+carolina508_uuid+'" id="'+carolina508_project_timestamp+'"></div>');
$(carolina508_id).append('<div class="'+ carolina508_report +'">CAROLINA508 <i>'+ carolina508_project_name +'</i></div>');

// Title Tag Info
// Title Declarations
var c_s_title                   = genUniqTxtCarolina("section-title");
var c_s_title_heading_info      = genUniqTxtCarolina("section-title-heading-info");
var c_s_title_references_info   = genUniqTxtCarolina("section-title-references-info");
var c_s_title_instructions_info = genUniqTxtCarolina("section-title-instructions-info");
var c_s_title_result_title      = genUniqTxtCarolina("section-title-result");
var c_s_title_result_info       = genUniqTxtCarolina("section-title-result-info");
// Title HTML
$(carolina508_id).append('<div class="'+ carolina_section +'"><div id="'+ c_s_title +'"></div></div>');
$(genIdCarolina(c_s_title)).append('<table class="'+ fixed_layout +'"><tr><td class="'+ table_title +'" id="'+ c_s_title_heading_info +'"></td><td class="'+table_references+'" id="'+ c_s_title_references_info +'"></td></tr><tr><td colspan="2" class="'+table_instructions+'" id="'+ c_s_title_instructions_info +'"></td></tr><tr><td class="'+table_result+'" id="'+ c_s_title_result_title +'"></td><td class="'+table_result+'" id="'+ c_s_title_result_info +'"></td></tr></table>');
// Title Bind Data
$(genIdCarolina(c_s_title_heading_info)).html("title tag");
$(genIdCarolina(c_s_title_references_info)).html("<b>References:</b>");
$(genIdCarolina(c_s_title_instructions_info)).html("<ul><li>If each page on the website has the same title, screen readers would not be able to easily distinguish different pages.</li></ul>");
$(genIdCarolina(c_s_title_result_title)).html("PAGE RESULT");
$(genIdCarolina(c_s_title_result_info)).html(genCodeCarolina(title_tag));

// Anchor Tag Info
// Anchor Declarations
var c_s_anchor                   = genUniqTxtCarolina("section-anchor");
var c_s_anchor_heading_info      = genUniqTxtCarolina("section-anchor-heading-info");
var c_s_anchor_references_info   = genUniqTxtCarolina("section-anchor-references-info");
var c_s_anchor_instructions_info = genUniqTxtCarolina("section-anchor-instructions-info");
var c_s_anchor_result_title      = genUniqTxtCarolina("section-anchor-result");
var c_s_anchor_result_info       = genUniqTxtCarolina("section-anchor-result-info");
var c_s_anchor_table             = genUniqTxtCarolina("section-anchor-table");

// Anchor HTML
$(carolina508_id).append('<div class="'+ carolina_section +'"><div id="'+ c_s_anchor +'"></div></div>');
$(genIdCarolina(c_s_anchor)).append('<table class="'+ fixed_layout +'"><tr><td class="'+ table_title +'" id="'+ c_s_anchor_heading_info +'"></td><td class="'+table_references+'" id="'+ c_s_anchor_references_info +'"></td></tr><tr><td colspan="2" class="'+table_instructions+'" id="'+ c_s_anchor_instructions_info +'"></td></tr><tr><td colspan="2" id="'+ c_s_anchor_table +'"></td></tr></table>');
// Anchor Bind Data
$(genIdCarolina(c_s_anchor_heading_info)).html("anchor tag");
$(genIdCarolina(c_s_anchor_references_info)).html("<b>References:</b>");
$(genIdCarolina(c_s_anchor_instructions_info)).html("<ul><li>Links should always have description in the title attribute.</li><li>Avoid making users open links in new window as there is no chance of back button.</li><li>Accessibility person will face difficulty because of this. If it is unavoidable include that in title attribute like this: 'Your Link Description'<br>followed by (Opens in new window)</li></ul>");
// Anchor Results Matrix
var t_r_m_anchor                   = genUniqTxtCarolina("table-results-matrix-anchor");
var t_r_m_a_accessibility_title    = genUniqTxtCarolina("table-results-matrix-anchor-accessability-title");
var t_r_m_a_new_window             = genUniqTxtCarolina("table-results-matrix-anchor-new-window");
var t_r_m_a_link_description       = genUniqTxtCarolina("table-results-matrix-anchor-link-description");
var t_r_m_a_more_details           = genUniqTxtCarolina("table-results-matrix-anchor-more-details");

$(genIdCarolina(c_s_anchor_table)).html('<table class="'+ table_results_matrix +'" id="'+ t_r_m_anchor +'"><thead><th class="'+table_results_matrix_no_width+'">#</th><th class="'+t_r_m_a_new_window+'">Link opens in<br>new window?</th><th class="'+t_r_m_a_accessibility_title+'">Accessibility Title</th><th class="'+t_r_m_a_link_description+'">Link Description</th><th class="'+table_results_matrix_details_width+'">Click for<br>more details</th></thead><tbody><tr></tr></tbody></table>');
for (var i = 0; i < anchor_tags.length; i++) {
   $(genIdCarolina(t_r_m_anchor)).append('<tr><td>'+(i+1)+'</td><td>'+anchor_tags[i].target+'</td><td>'+anchor_tags[i].title+'</td></td><td>'+anchor_tags[i].code+'</td><td class="'+t_r_m_a_more_details+'" id="'+t_r_m_a_more_details+'-'+(i+1)+'">&#8595;</td></tr><tr class="'+t_r_m_a_more_details+'-'+(i+1)+'"><tr class="'+t_r_m_a_more_details+'-'+(i+1)+'"><td>'+(i+1)+'.1</td><td colspan="5"><textarea disabled="true">'+anchor_tags[i].code+'</textarea></td></tr>');
   $(genClsCarolina(t_r_m_a_more_details)+'-'+(i+1)).hide();
}
$(genClsCarolina(t_r_m_a_more_details)).click(function() {
  $(genClsCarolina($(this).attr('id'))).toggle(50, function() {
        if ($(this).is(':visible')) {
          $(genIdCarolina($(this).attr('class'))).html('&#8593;')                  
        } else {
          $(genIdCarolina($(this).attr('class'))).html('&#8595;')
        }        
    });       
});
$(genClsCarolina(t_r_m_a_accessibility_title)).css({'width':'100%'});
$(genClsCarolina(t_r_m_a_link_description)).css({'width':'250px'});
$(genClsCarolina(t_r_m_a_new_window)).css({'width':'120px'});


// Image Tag Info
// Image Declarations
var c_s_image                   = genUniqTxtCarolina("section-image");
var c_s_image_heading_info      = genUniqTxtCarolina("section-image-heading-info");
var c_s_image_references_info   = genUniqTxtCarolina("section-image-references-info");
var c_s_image_instructions_info = genUniqTxtCarolina("section-image-instructions-info");
var c_s_image_table             = genUniqTxtCarolina("section-image-table");

$(carolina508_id).append('<div class="'+ carolina_section +'"><div id="'+ c_s_image +'"></div></div>');
$(genIdCarolina(c_s_image)).append('<table class="'+ fixed_layout +'"><tr><td class="'+ table_title +'" id="'+ c_s_image_heading_info +'"></td><td class="'+table_references+'" id="'+ c_s_image_references_info +'"></td></tr><tr><td colspan="2" class="'+table_instructions+'" id="'+ c_s_image_instructions_info +'"></td></tr><tr><td colspan="2" id="'+ c_s_image_table +'"></td></tr></table>');

// Image Bind Data
$(genIdCarolina(c_s_image_heading_info)).html("image tag");
$(genIdCarolina(c_s_image_references_info)).html("<b>References:</b>");
$(genIdCarolina(c_s_image_instructions_info)).html("<ul><li>Images with alt=' ' are ignored by screen readers as they are considered decorative.</li><li>Limit alt(alternative) text eplanation to 125 characters. Jaws treats it different if it exceeds.</li></ul>");
// Image Results Matrix
var t_r_m_image                     = genUniqTxtCarolina("table-results-matrix-image");
var t_r_m_img_alt_text_description  = genUniqTxtCarolina("table-results-matrix-image-alt-text-desc");
var t_r_m_img_alt_text_length       = genUniqTxtCarolina("table-results-matrix-image-alt-text-length");
var t_r_m_img_info                  = genUniqTxtCarolina("table-results-matrix-image-info");
var t_r_m_img_more_details           = genUniqTxtCarolina("table-results-matrix-image-more-details");

$(genIdCarolina(c_s_image_table)).html('<table class="'+ table_results_matrix +'" id="'+ t_r_m_image +'"><thead><th class="'+table_results_matrix_no_width+'">#</th><th class="'+t_r_m_img_alt_text_description+'">Alternate Text Description</th><th class="'+t_r_m_img_alt_text_length+'">Alternate Text<br>Length</th><th class="'+t_r_m_img_info+'">Image</th><th class="'+table_results_matrix_details_width+'">Click for<br>more details</th></thead><tbody><tr></tr></tbody></table>');
for (var i = 0; i < image_tags.length; i++) {
   $(genIdCarolina(t_r_m_image)).append('<tr><td>'+(i+1)+'</td><td>'+image_tags[i].alt_text+'</td><td>'+image_tags[i].alt_text_length+'</td></td><td>'+image_tags[i].code+'</td><td class="'+t_r_m_img_more_details+'" id="'+t_r_m_img_more_details+'-'+(i+1)+'">&#8595;</td></tr><tr class="'+t_r_m_img_more_details+'-'+(i+1)+'"><tr class="'+t_r_m_img_more_details+'-'+(i+1)+'"><td>'+(i+1)+'.1</td><td colspan="5"><b>Current Image Size:</b> '+image_tags[i].current_hw+' &nbsp;&nbsp;&nbsp;&nbsp; <b>Native Image Size:</b> '+image_tags[i].native_hw+'</td></tr><tr class="'+t_r_m_img_more_details+'-'+(i+1)+'"><tr class="'+t_r_m_img_more_details+'-'+(i+1)+'"><td>'+(i+1)+'.2</td><td colspan="5"><textarea disabled="true">'+image_tags[i].code+'</textarea></td></tr>');
   $(genClsCarolina(t_r_m_img_more_details)+'-'+(i+1)).hide();
}
$(genClsCarolina(t_r_m_img_more_details)).click(function() {
  $(genClsCarolina($(this).attr('id'))).toggle(50, function() {
        if ($(this).is(':visible')) {
          $(genIdCarolina($(this).attr('class'))).html('&#8593;')                  
        } else {
          $(genIdCarolina($(this).attr('class'))).html('&#8595;')
        }        
    });       
});
$(genClsCarolina(t_r_m_img_alt_text_description)).css({'width':'100%'});
$(genClsCarolina(t_r_m_img_info)).css({'width':'200px'});
$(genClsCarolina(t_r_m_img_alt_text_length)).css({'width':'120px'});


// Report CSS
$(carolina508_id).css({'background-color':carolina508_bg_hex,'margin-top':'0px','min-height':'200px','border-top':'5px solid #001F3F','border-bottom':'2px dashed #001F3F','font-size':'14px','color':'#000','font-family': '"Lucida Sans Unicode", "Lucida Grande", sans-serif','padding-bottom':'200px'});
$(genClsCarolina(carolina508_report)).css({'font-size':'28px','color':'#001F3F','border-bottom':'1px solid #001F3F','padding':'20px', 'letter-spacing': '2px', 'text-align': 'center', 'background-color': '#FFFFFF'});
$(genClsCarolina(carolina_section)).css({'display':'block','margin-left':'auto','margin-right':'auto','padding':'40px 40px 0px 40px','width':'1140px'});
$(carolina508_id + ' table').css({'border-collapse':'collapse'});
$(carolina508_id + ' td img').css({'width':'100%','height':'auto'});
$(carolina508_id + ' table, th, td').css({'border-style':'solid','border-width':'1px','border-color':carolina508_border_hex,'word-break':'break-all'});
$(carolina508_id + ' ul li').css({'margin-top':'10px'});
$(genClsCarolina(fixed_layout)).css({'table-layout':'fixed','width':'100%','border-style':'solid'});
$(genClsCarolina(table_title)).css({'background-color':carolina508_clr_hex,'text-align':'center','color':'#FFF','width':'200px','letter-spacing':'2px','font-size':'24px'});
$(genClsCarolina(table_references)).css({'background-color':'#FFF','color':'#000','font-size':'16px','padding':'10px'});
$(genClsCarolina(table_instructions)).css({'background-color':'#FFF','color':'#000','font-size':'14px','padding':'10px 25px 10px 10px'});
$(genClsCarolina(table_result)).css({'background-color':'#FFF','font-size':'16px','padding':'10px','text-align':'center','letter-spacing':'2px'});
$(carolina508_id + ' textarea').css({'background-color':'#FFF','border':'none','width':'100%','padding':'20px','height':'70px', 'font-family': 'monospace','max-width':'100%','max-height':'200px','font-size':'14px','color':'#555'});
$(genClsCarolina(table_results_matrix)).css({'table-layout':'fixed','width':'100%'});
//These two need some work!
$(genClsCarolina(table_results_matrix) + ' table').css({'border-collapse':'collapse','border-style':'hidden'});
$(genClsCarolina(table_results_matrix) + ' th').css({'background-color':'#FFF','text-align':'center','border-top':'none','padding':'10px 0px'});
$(genClsCarolina(table_results_matrix) + ' td').css({'background-color':'#FFF','border-top':'none','padding':'10px','text-align':'center'});
$(genClsCarolina(table_results_matrix_no_width)).css({'width':'60px','word-break':'break-all'});
$(genClsCarolina(table_results_matrix_details_width)).css({'width':'100px'});

} else {

    // jQuery is not loaded
}
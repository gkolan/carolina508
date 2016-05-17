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

$('body *').not(genClsCarolina(carolina508_uuid) + ' *').each(function(index, value){
  //Calculate Parameters
  allFontFamilies.push($(this).css('font-family')+'<br>');
  allFontSizes.push($(this).css('font-size')+'<br>');
  allColors.push($(this).css('color')+'<br>');
  allFontStyles.push($(this).css('font-style')+'<br>');
  allFontStyles.push($(this).css('text-decoration')+'<br>');
  allBackgroundColors.push($(this).css('background-color')+'<br>');
});

// Calculate Unique Parameters
uniqueFontFamilies   = allFontFamilies.filter(onlyUnique);
uniqueFontSizes      = allFontSizes.filter(onlyUnique);
uniqueColors         = allColors.filter(onlyUnique);
uniqueBgColors       = allBackgroundColors.filter(onlyUnique);

// Calculate Rank
var rank = (uniqueFontSizes.length) + (uniqueColors.length) + (uniqueBgColors.length) + (uniqueFontFamilies.length);

// UUID, Timestamp, Random String
var carolina508_uuid = "carolina508-grk-7675180339340254";
var carolina508_random_string = randomstring(32);
var carolina508_timestamp = Math.floor(Date.now() / 1000);
var carolina508_project_name  = "picasso";


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
var dup_page_visual_details_tags = [];
var image_tags = [];
var form_tags = [];
var input_tags = [];
var button_tags = [];


// Compute Title Information
title_tag = $(document).find("title").clone().wrap('<p>').parent().html();
if (title_tag === undefined) {
  title_tag = "****** title tag not found *****";
}

//Project Declarations
var carolina508_clr_hex         = "#3D8F79";
var carolina508_bg_hex          = "#f1fcf9";
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

// Page Visual Details Info
// Page Visual Details Declarations
var c_s_page_visual_details                   = genUniqTxtCarolina("section-page-visual-details");
var c_s_page_visual_details_heading_info      = genUniqTxtCarolina("section-page-visual-details-heading-info");
var c_s_page_visual_details_references_info   = genUniqTxtCarolina("section-page-visual-details-references-info");
var c_s_page_visual_details_instructions_info = genUniqTxtCarolina("section-page-visual-details-instructions-info");
var c_s_page_visual_details_result_title      = genUniqTxtCarolina("section-page-visual-details-result");
var c_s_page_visual_details_result_info       = genUniqTxtCarolina("section-page-visual-details-result-info");
var c_s_page_visual_details_table             = genUniqTxtCarolina("section-page-visual-details-table");

// Page Visual Details HTML
$(carolina508_id).append('<div class="'+ carolina_section +'"><div id="'+ c_s_page_visual_details +'"></div></div>');
$(genIdCarolina(c_s_page_visual_details)).append('<table class="'+ fixed_layout +'"><tr><td class="'+ table_title +'" id="'+ c_s_page_visual_details_heading_info +'"></td><td class="'+table_references+'" id="'+ c_s_page_visual_details_references_info +'"></td></tr><tr><td colspan="2" class="'+table_instructions+'" id="'+ c_s_page_visual_details_instructions_info +'"></td></tr><tr><td colspan="2" id="'+ c_s_page_visual_details_table +'"></td></tr></table>');
// Page Visual Details Bind Data
$(genIdCarolina(c_s_page_visual_details_heading_info)).html(rank);
$(genIdCarolina(c_s_page_visual_details_references_info)).html("The lower the score, the less busy the page for a user");
$(genIdCarolina(c_s_page_visual_details_instructions_info)).html("<ul><li>Links should always have description in the title attribute.</li><li>Avoid making users open links in new window as there is no chance of back button.</li><li>Accessibility person will face difficulty because of this. If it is unavoidable include that in title attribute like this: 'Your Link Description'<br>followed by (Opens in new window)</li></ul>");
// Page Visual Details Results Matrix
var t_r_m_page_visual_details       = genUniqTxtCarolina("table-results-matrix-page-visual-details");
var t_r_m_visual_category           = genUniqTxtCarolina("table-results-matrix-page-visual-details-visual-category");
var t_r_m_details                   = genUniqTxtCarolina("table-results-matrix-page-visual-details-information");
var t_r_m_font_family               = genUniqTxtCarolina("table-results-matrix-page-visual-details-font-family");
var t_r_m_font_family_details       = genUniqTxtCarolina("table-results-matrix-page-visual-details-font-family-details");
var t_r_m_font_size                 = genUniqTxtCarolina("table-results-matrix-page-visual-details-font-size");
var t_r_m_font_size_details         = genUniqTxtCarolina("table-results-matrix-page-visual-details-font-size-details");
var t_r_m_colors                    = genUniqTxtCarolina("table-results-matrix-page-visual-details-color");
var t_r_m_colors_details            = genUniqTxtCarolina("table-results-matrix-page-visual-details-color-details");
var t_r_m_bg_colors                 = genUniqTxtCarolina("table-results-matrix-page-visual-details-bg-color");
var t_r_m_bg_colors_details         = genUniqTxtCarolina("table-results-matrix-page-visual-details-bg-color-details");

$(genIdCarolina(c_s_page_visual_details_table)).html('<table class="'+ table_results_matrix +'" id="'+ t_r_m_page_visual_details +'"><thead><th class="'+table_results_matrix_no_width+'">#</th><th class="'+t_r_m_visual_category+'">Visual Category</th><th class="'+t_r_m_details+'">Details</th></thead><tbody><tr></tr></tbody></table>');

$(genIdCarolina(t_r_m_page_visual_details)).append('<tr class="'+t_r_m_font_family+'"><td>1</td><td> font-families </td><td id="'+t_r_m_font_family_details+'"></td></tr>');
$(genIdCarolina(t_r_m_font_family_details)).html(uniqueFontFamilies);

$(genIdCarolina(t_r_m_page_visual_details)).append('<tr class="'+t_r_m_font_size+'"><td>2</td><td> font sizes </td><td id="'+t_r_m_font_size_details+'"></td></tr>');
$(genIdCarolina(t_r_m_font_size_details)).html(uniqueFontSizes);

$(genIdCarolina(t_r_m_page_visual_details)).append('<tr class="'+t_r_m_colors+'"><td>3</td><td> colors </td><td id="'+t_r_m_colors_details+'"></td></tr>');
$(genIdCarolina(t_r_m_colors_details)).html(uniqueColors);


$(genIdCarolina(t_r_m_page_visual_details)).append('<tr class="'+t_r_m_bg_colors+'"><td>4</td><td> background-colors </td><td id="'+t_r_m_bg_colors_details+'"></td></tr>');
$(genIdCarolina(t_r_m_bg_colors_details)).html(uniqueBgColors);

$(genClsCarolina(t_r_m_visual_category)).css({'width':'300px'});
$(genClsCarolina(t_r_m_a_link_description)).css({'width':'100%'});
$(genIdCarolina(t_r_m_a_new_window)).css({'width':'120px'});


// Report CSS
$(carolina508_id).css({'background-color':carolina508_bg_hex,'margin-top':'0px','min-height':'200px','border-top':'5px solid #3D8F79','border-bottom':'2px dashed #3D8F79','font-size':'14px','color':'#000','font-family': '"Lucida Sans Unicode", "Lucida Grande", sans-serif','padding-bottom':'100px'});
$(genClsCarolina(carolina508_report)).css({'font-size':'28px','color':'#3D8F79','border-bottom':'1px solid #3D8F79','padding':'20px', 'letter-spacing': '2px', 'text-align': 'center', 'background-color': '#FFFFFF'});
$(genClsCarolina(carolina_section)).css({'display':'block','margin-left':'auto','margin-right':'auto','padding':'40px 40px 0px 40px','width':'1140px'});
$(carolina508_id + ' table').css({'border-collapse':'collapse'});
$(carolina508_id + ' td img').css({'width':'100%','height':'auto'});
$(carolina508_id + ' table, th, td').css({'border-style':'solid','border-width':'1px','border-color':carolina508_border_hex,'word-break':'break-all'});
$(carolina508_id + ' ul li').css({'margin-top':'10px'});
$(genClsCarolina(fixed_layout)).css({'table-layout':'fixed','width':'100%','border-style':'solid'});
$(genClsCarolina(table_title)).css({'background-color':carolina508_clr_hex,'text-align':'center','color':'#FFF','width':'200px','letter-spacing':'2px','font-size':'24px'});
$(genClsCarolina(table_references)).css({'background-color':'#FFF','color':'#000','font-size':'16px','padding':'10px','text-align':'center'});
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
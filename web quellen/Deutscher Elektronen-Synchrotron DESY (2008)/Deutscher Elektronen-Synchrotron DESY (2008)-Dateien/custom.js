
var insertFlash = true;
function insertFlashMedium(filename, width, height, alttext) {
  if (insertFlash == true) {
    document.writeln("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' height='" + height + "' width='" + width + "'>"); 
    document.writeln("<param name='movie' value='" + filename + "'/>");
    document.writeln("<param name='quality' value='high'/>"); 
    document.writeln("<embed height='" + height + "' pluginspage='http://www.macromedia.com/go/getflashplayer' quality='high' src='" + filename + "' type='application/x-shockwave-flash' width='" + width + "'/>"); 
		if (alttext != "") {
		document.writeln("<p class='flashDescription'>" + alttext + "</p>"); 
		}
		document.writeln("</object>");
  } else {
    document.writeln("<p>" + alttext + "</p>"); 
  } 
}

(function($) {
	$.fn.syncHeight = function(settings) {
		var max = 0;
		var browser_id = 0;
		var property = [
		   ['min-height','0px'],
			['height','1%']
		];

		// check for IE6 ...
		if($.browser.msie && $.browser.version < 7){
			browser_id = 1;
		}
		
		// get maximum element height ...
		$(this).each(function() {
			// fallback to auto height before height check ...
			$(this).css(property[browser_id][0],property[browser_id][1]);
			var val=$(this).height();
			if(val > max){
			   max = val;
			}
		});
		
		// set synchronized element height ...
 		$(this).each(function() {
  			$(this).css(property[browser_id][0],max+'px');
		});
		return this;
	};	
})(jQuery);

var bodyId = "";
var contentProfileValue; 
var rootPath = ""; 
var highlightingEnabled = true;

$(document).ready(function() {

	// get content profile
	if ($("body.cp_0").size() > 0) {
		contentProfileValue = 0;
	} else if ($("body.cp_1").size() > 0) {
		contentProfileValue = 1;
	} else if ($("body.cp_2").size() > 0) {
		contentProfileValue = 2;
	}  
		
	if ($("body.relative_depth_1").size() > 0) {
		rootPath = "../";
	} else if ($("body.relative_depth_2").size() > 0) {
		rootPath = "../../";
	} else if ($("body.relative_depth_3").size() > 0) {
		rootPath = "../../../";
	} else if ($("body.relative_depth_4").size() > 0) {
		rootPath = "../../../../";
	}
	
	bodyId = $("body").id();

});


var featureBoxes = new Object(); 

function initSelectionBox(name) {
	hideAll(eval(featureBoxes[name])); 
	eval("$('#selectionStageEntry_" + name + "_einleitung').show();"); 
}


function hideAll(arr) {

	for (var i = 0; i < arr.length; i++) {
		eval("$('#selectionStageEntry_" + arr[i] + "').hide();");
		eval("$('#selector_" + arr[i] + "').removeClass('selectorSelected')");
	}
}


function initializeFeatureBox(name) {
	
	featureBoxes[name] = new Array(); 

	var selectionStageEntryPrefix = "selectionStageEntry_" ;

	$("#selectionStage_" + name + " div.selectionStageEntry").each(function(i) {
		var id = $(this).id();
		id = id.substr(selectionStageEntryPrefix.length);
		featureBoxes[name].push(id);
	});

	initSelectionBox(name); 
	
	for (var i = 0; i < featureBoxes[name].length; i++) {

		eval(
			"$('a#selector_" + featureBoxes[name][i] + "').mouseover(function() " +
			"{hideAll(featureBoxes[name]); $('#selectionStageEntry_" + featureBoxes[name][i] + "').show();});" 
	);
	}
}

$(document).ready(function() {

	if (bodyId.indexOf("home") > -1) {
		initializeFeatureBox("kennenlernen"); 
		initializeFeatureBox("nachschlagen"); 
		//$(".featureBoxContainerFor3 .featureBoxBody").syncHeight(); 
		$(".featureBoxContainerFor3 .featureBoxBody").syncHeight(); 
												 
		$(window).resize(function(){
			//$(".featureBoxContainerFor3 .featureBoxBody").syncHeight(); 
			$(".featureBoxContainerFor3 .featureBoxBody").syncHeight(); 
		});												 
	}
});



$(document).ready(function() {
	
	$("#sidebarControl").show(); 
			
	
	$("#sidebarControlButtonClose").click(function() {	
																								 
			$(".sidebarBox").slideUp("fast", maxifyTimeline);
		 
			$("#sidebarControlButtonClose").hide();
			$("#sidebarControlButtonOpen").show();	
			$("#content.blockcontentWithSidebar").addClass("blockcontentWithoutSidebar").removeClass("blockcontentWithSidebar");			
	}); 
	
	$("#sidebarControlButtonOpen").click(function() {	
			$(".sidebarBox").slideDown(); 	
			$("#sidebarControlButtonClose").show();
			$("#sidebarControlButtonOpen").hide();		
			$("table#timeline").css("width", "");
			$("#content.blockcontentWithoutSidebar").addClass("blockcontentWithSidebar").removeClass("blockcontentWithoutSidebar");
	}); 
	
	$("#sidebarControlButtonClose").show();
	$("#sidebarControlButtonOpen").hide();		

	$(".sidebarBoxTitle").click(function() {
																			 
			$(this).next().slideToggle("fast");
	});
});

										

/*
jQuery.fn.vjustify=function() {
    var maxHeight=0;
    this.each(function(){
        if (this.offsetHeight>maxHeight) {maxHeight=this.offsetHeight;}
    });
    this.each(function(){
        $(".featureBox", this).height(maxHeight + "px");
        if (".featureBox", this.offsetHeight>maxHeight) {
            $(".featureBox", this).height((maxHeight-(this.offsetHeight-maxHeight))+"px");
        }
    });
};


*/

/*

	HIGHLIGHTING 
	-- mouse over effects --
	
*/


$(document).ready(function() {
													 
	$("ul.news li:odd img").removeClass("newsItemTeaser").addClass("newsItemTeaserLeft");
	
	
	if (highlightingEnabled) {
	
	$("table.highlightable tr").mouseover(function() {		
																		 $("td", this).addClass("highlighted");																		 
																		 }).mouseout(function() {
																			 
																			$("td", this).removeClass("highlighted"); 
																		 }); 		
	
		$(".selectable").mouseover(function() {		
																			$(this).parent().children().each(function() {$(this).removeClass("highlighted");})
																		 $(this).addClass("highlighted");																	 
																		 }); 		
	
	
	
	$(".highlightable").mouseover(function() {																		 
																		 $(this).addClass("highlighted");																	 
																		 }).mouseout(function() {
																			 
																			$(this).removeClass("highlighted"); 
																		 }); 		
	$(".teaser").click(function() {
																 $(this).removeClass("highlighted"); 
																 document.location.href= $("a.teaserLink", this).attr("href");
																 
																 });
	}
});



	
/*
STYLESHEETS
*/	



/*
	ASSESSMENT ELEMENTS
*/

var testElementSessions = new Object(); 

var interactionViewMode = new Object(); 
interactionViewMode.interactionAllowed = true; 
interactionViewMode.outcomeToBeShown = false;
interactionViewMode.responseToBeShown = false;
interactionViewMode.solutionToBeShown = false;
interactionViewMode.feedbackToBeShown = false;

var feedbackViewMode = new Object(); 
feedbackViewMode.interactionAllowed = false; 
feedbackViewMode.outcomeToBeShown = true;
feedbackViewMode.responseToBeShown = true;
feedbackViewMode.solutionToBeShown = true;
feedbackViewMode.feedbackToBeShown = true;



$(document).ready(function(){
	
	if ($("body").is(".testElementContainer")) {
		
		
	// for all test element divs: load data, display it. save session in array for processing
		
		$(".testElement").each(function(i, element) {
																		
			var id = $(element).id(); 																		
			
			var filename = id.replace("--", "."); 			
			$.getJSON(rootPath + "testElements/" + filename + "/json.js", function(jsondata) {

        /* Parse JSON objects */
																	
						var testElement = jsondata;
						var testElementSession = new TestElementSession(); 
						testElementSession.testElement = testElement; 
						testElementSessions[id] = testElementSession;						
						testElementSession.renderAsXhtml(interactionViewMode);

			});	
		});
	}
});



function getResponse(id) {
	
	var response = new Object(); 
	response.value = new Array();
	
	var elements = $("#" + id + " .RESPONSE");
	
	for (var i=0, max=elements.length; i < max; i++) {


		var el = elements[i]; 
		var t = el.type;
		if (((t == 'checkbox' || t == 'radio') && el.checked) || t=="text") {
			//check whether value is already in array.
			var valueFound = false;
			for (var j=0; j < response.value.length; j++) {
				if (response.value[j] == elements[i].value)
					valueFound = true;
			}	
	
			if (valueFound == false)
				response.value.push(elements[i].value);	
		}
	}

	return response;

}


function processResponse(session) {
		

	session.setResponseVariable("RESPONSE", getResponse(session.testElement.id)); 

	var responseProcessor = new QtiMatchCorrectResponseProcessingWithFeedback(); 
	responseProcessor.processResponse(session); 
	
}


function TestElementSession() {
	
	this.testElement = null;
	this.response = null;
	this.outcomeVariables = new Object(); 
	
	this.getResponseVariable = function (name) {
		return this.response; 
	}	
	
	this.setResponseVariable =  function (name, response) {	
		this.response = response;
	}
	
	this.getOutcomeVariable = function (name) {
		return this.outcomeVariables[name]; 
	}	
	
	this.setOutcomeVariable =  function (name, outcome) {	
		this.outcomeVariables[name] = outcome;
	}
	
	this.renderAsXhtml = function(viewMode) {
				
		var result = ""; 
		result += "<div class='testElementHeader'>" + this.testElement.title + "</div>"; 
		result += "<div class='testElementBody'>"; 
		result += "<div class='testElementItemProblem'>" + this.testElement.itemProblem + "</div>";
		
		if (viewMode.feedbackToBeShown) {
			
			if (this.getOutcomeVariable("OUTCOME_IS_RESPONSE_CORRECT") == "TRUE") {
			
				if (this.testElement.globalFeedbackForCorrectResponse) {					
					result += "<div class='testElementGlobalFeedbackCorrect'>"; 
					result += this.testElement.globalFeedbackForCorrectResponse; 
					result += "</div>"; 				
				}				
				
			} else {
				
				if (this.testElement.globalFeedbackForIncorrectResponse) {					
					result += "<div class='testElementGlobalFeedbackIncorrect'>"; 
					result += this.testElement.globalFeedbackForIncorrectResponse; 
					result += "</div>"; 				
				}
			}			
		}
		
		if (this.testElement.itemType == "multipleChoice") {		
		
			var buttonType = "checkbox"; 
			if (this.testElement.multiplySelectable == "false") {
					buttonType = "radio"; 
			}
	
			result += "<ul class='multipleChoice' id='" + this.testElement.id +".REPONSE'>"; 
			var disabledParam = ""; 
			if (!viewMode.interactionAllowed) {
				disabledParam = "disabled='disabled' ";
			}
			
			for (var i = 0; i < this.testElement.choices.length; i++) {
				
				var checkedParam = ""; 
				var choiceFeedback = ""; 
					
	
				if (viewMode.outcomeToBeShown) {
					
					var isChecked = false; 
					for (var j = 0; j < this.getResponseVariable("RESPONSE").value.length; j++) {
						if (this.getResponseVariable("RESPONSE").value[j] == this.testElement.choices[i].id) {
							isChecked = true; 
						}				
					}
				
					if (isChecked) {
						checkedParam = " checked='checked' "; 
					}
					
					if (viewMode.feedbackToBeShown) {
						
						if (isChecked && this.testElement.choices[i].feedbackSelected) {							
							choiceFeedback = "<div class='choiceFeedback'>" + this.testElement.choices[i].feedbackSelected + "</div>"; 														
						}
						if (!isChecked && this.testElement.choices[i].feedbackNotSelected) {							
							choiceFeedback = "<div class='choiceFeedback'>" + this.testElement.choices[i].feedbackNotSelected + "</div>"; 														
						}
	
					}
					
				}
				result += "  <li>" + "<input class='RESPONSE' " + checkedParam + disabledParam + " name='" + this.testElement.id + ".RESPONSE' id='" + this.testElement.id + ".RESPONSE:" + this.testElement.choices[i].id + "' type='" + buttonType + "' value='" + this.testElement.choices[i].id + "'/><label for='" + this.testElement.id + ".RESPONSE:" + this.testElement.choices[i].id + "'>" + this.testElement.choices[i].body; 				
				result += choiceFeedback; 
				result += "</li>"; 
			}
			
			result += "</ul>"; 
		}
		
		
		if (this.testElement.itemType == "fillInTheBlank") {		
		
			var valueParam = ""; 
			if (this.getResponseVariable("RESPONSE") && viewMode.outcomeToBeShown) {
				
				valueParam = " value='" + this.getResponseVariable("RESPONSE").value + "'";
			}
	
			result += "<input class='RESPONSE' name='RESPONSE' type='text' " + valueParam + " width='50' />";
		}
		
		result += "</div>"; 
		
		if (viewMode.interactionAllowed) {
			result += "<div class='buttonRow'><input name='' type='button' id='" + this.testElement.id + ".processResponseButton' class='processResponseButton' value='Ergebnis &uuml;berpr&uuml;fen' /></div>";
		}
		if (viewMode.feedbackToBeShown) {
			result += "<div class='buttonRow'><input name='' type='button' id='" + this.testElement.id + ".clearResponseButton' class='clearResponseButton' value='Ergebnis zurücksetzen' /></div>";
		}
		
		

		
		$("#" + this.testElement.id).html(result);
		
		$("#" + this.testElement.id + " ul.multipleChoice li input").click(function() {
	
			$(this).parents("ul").children().each(function(i) {
																									if ($("input", this).attr("checked")) {
																										$(this).addClass("selected"); 
																									} else {																									
																										$(this).removeClass("selected"); 																									
																									}
																									}); 
		});
		
		$("#" + this.testElement.id + " .processResponseButton").click(function() {
															
			var id = $(this).parents("div.testElement").id();	
		
			var session = testElementSessions[id]; 
			processResponse(session);
			session.renderAsXhtml(feedbackViewMode);
	
			return false; 
																														
		});
		
		$("#" + this.testElement.id + " .clearResponseButton").click(function() {
															
			var id = $(this).parents("div.testElement").id();	
			
			var session = testElementSessions[id]; 
			
			session.response = null;
			session.outcomeVariables = new Object(); 

			session.renderAsXhtml(interactionViewMode);
	
			return false; 
																														
		});	
	
	}

}



function QtiMatchCorrectResponseProcessingWithFeedback() {

	this.processResponse = function (session) {
	
	
		var responseDeclaration = session.testElement.responseDeclaration; 

		var responseVariable = session.getResponseVariable("RESPONSE"); 
		
		var isCorrect = false;
		if (responseDeclaration.cardinality == "single") {
			
		
			//alert(responseDeclaration.correctResponses[0]); 
			for (var i = 0; i < responseDeclaration.correctResponses.length; i++) {
				
				if (responseVariable.value[0] == responseDeclaration.correctResponses[i]) {
						isCorrect = true; 
				}				
			}
		
		} else if (responseDeclaration.cardinality == "multiple") {
		
			var responseString = getSerializedOrderedArray(responseDeclaration.correctResponses); 
			//alert(responseString); 
	
			var correctResponseString = getSerializedOrderedArray(responseVariable.value); 
			//alert(responseVariable.value); 

			if (responseString == correctResponseString) {
			isCorrect = true; 
			}
		}
	
		if (isCorrect == true) {
			session.setOutcomeVariable("OUTCOME_IS_RESPONSE_CORRECT", "TRUE"); 
		} else {			
			session.setOutcomeVariable("OUTCOME_IS_RESPONSE_CORRECT", "FALSE"); 
		}
		
		session.setOutcomeVariable("OUTCOME_RESPONSE", responseVariable); 
	
		
	}
}



function getSerializedOrderedArray(array) {
	
	var orderedArray = new Array(); 
	for (var i = 0; i < array.length; i++) {
		orderedArray[i] = array[i]; 
	}
	orderedArray.sort(); 

	var result = orderedArray.join(""); 
	return result; 

}





/*
ENCYCLOPAEDIA INDEX
*/


$(document).ready(function() {
													 	
	// check if in encyclopaedia
	if (bodyId.indexOf("encyclopaediaEntry") > -1) {
		
		// load index
		var indexName = bodyId.substr(31, 1);
		if (indexName.match(/[a-z]/)) {
			
				$("#index").html("<img src='"  + rootPath + "/_images/ajax-loader.gif' alt='laden...' />"); 				
				$.get(rootPath + "lexikon/index/" + indexName + "-" + contentProfileValue + "/ajax-index.html", function(data){
  				$("#index").html(data);
					relatifyPaths("#index");
					$("#index .highlightable").mouseover(function() {																		 
																		 $(this).addClass("highlighted");																	 
																		 }).mouseout(function() {
																			 
																			$(this).removeClass("highlighted"); 
																		 }); 		
			})
				
		} else {
	
				$("#index").html("<img src='"  + rootPath + "/_images/ajax-loader.gif' alt='laden...' />"); 				
				$.get(rootPath + "lexikon/index/special-" + contentProfileValue + "/ajax-index.html", function(data){
				$("#index").load(rootPath + "lexikon/index/special-" + contentProfileValue + "/ajax-index.html", function(){
	  			$("#index").html(data);
					relatifyPaths("#index");
					$("#index .highlightable").mouseover(function() {																		 
																		 $(this).addClass("highlighted");																	 
																		 }).mouseout(function() {
																			 
																			$(this).removeClass("highlighted"); 
																		 }); 		
			})
				
			});
		}
		
	}
	// activate index
		$(".indexSelection li a").click(function() {
			var id = $(this).id();
			var indexName = id.substr(6, 1);
			
			
				$("#index").html("<img src='"  + rootPath + "/_images/ajax-loader.gif' alt='laden...' />"); 				
				$.get(rootPath + "lexikon/index/" + indexName + "-" + contentProfileValue + "/ajax-index.html", function(data){
  				$("#index").html(data);
					relatifyPaths("#index");
					$("#index .highlightable").mouseover(function() {																		 
																		 $(this).addClass("highlighted");																	 
																		 }).mouseout(function() {
																			 
																			$(this).removeClass("highlighted"); 
																		 }); 		
			});
			
			
			return false;
		}); 		
		
});


function relatifyPaths(selector) {
	
	$(selector + " img").each(function() {
		
		if ($(this).attr("src").indexOf("/") == 0) {			
			$(this).attr("src", rootPath + $(this).attr("src")); 		
		}
 
	}); 
	
	$(selector + " a").each(function() {
		
		if ($(this).attr("href").indexOf("/") == 0) {			
			$(this).attr("href", rootPath + $(this).attr("href")); 		
		}
 
	}); 
	
}






function updateTimeline() {

	// read category selector
	$("#timelineSelector input").each(function(n) {
		
		var prefix = "timelineSelectorCheckbox-";
		var timelineName = $(this).id().substr(prefix.length); 
		
		if (this.checked) {

			$("#timeline tr." + timelineName + ":hidden").show();
		
		} else {
			
			$("#timeline tr." + timelineName + ":visible").hide();
		}
	});
	
	$("#timelineStatistics").html("Zeitleiste mit "  + $("#timeline tr:visible").size() + " Einträgen."); 
	
}

function openTimelineEntry(entry) {
  var id = $(entry).attr('id'); 
  var objectId = id.substring(id.indexOf("-") + 1); 
	$(".body", entry).html("<img src='"  + rootPath + "/_images/ajax-loader.gif' alt='laden...' />"); 
	$(".body", entry).load(rootPath + "zeitleiste/zeitleiste." + objectId + "/" + contentProfileValue + "/ajax.html");
}
function closeTimelineEntry(entry) {
	$(".body", entry).html(""); 	
}


function openAllTimelineEntries() {
	$('#timeline tr.timelineEntry').each(function(i,element) {openTimelineEntry(element);}); 
	$("#timelineOpenAll").hide(); 
	$("#timelineCloseAll").show(); 
}

function closeAllTimelineEntries() {
	$('#timeline tr.timelineEntry').each(function(i,element) {closeTimelineEntry(element)}); 
	$("#timelineOpenAll").show(); 
	$("#timelineCloseAll").hide(); 
}


$(function() {
					 
	if (bodyId.indexOf("timelinePage") > -1) {

		$("#timelineOpenAll").click(openAllTimelineEntries); 
		$("#timelineOpenAll").show(); 
		$("#timelineCloseAll").click(closeAllTimelineEntries); 
		$("#timelineCloseAll").hide(); 
	
	
		$("#timelineSelector li").each(function() {
			$("input", this).attr("checked", "checked"); 												
		});	
	
		$("#timelineSelector input").click(function() {
			updateTimeline(); 
		})
	
		updateTimeline(); 
		
		
		
		$('#timeline tr.timelineEntry').click(function(event) {
		
		
				var target = "" + event.target; 
				if (target.indexOf("index.html") == -1) {
				var id = $(this).attr('id'); 
				var objectId = id.substring(id.indexOf("-") + 1); 
				
				if ($(".body", this).html() == "") {
					openTimelineEntry(this);
				} else {
					closeTimelineEntry(this)  		
				}
				return false;
				}
			});
		
		
	}	
	
	

	
		
		
});



function openFAQEntry(liElement) {
  var id = $(liElement).attr('id'); 
	$(liElement).addClass("isOpen");
	$(".clickForMore", liElement).css("visibility", "hidden"); 	
	$(".body", liElement).html("<img src='"  + rootPath + "/_images/ajax-loader.gif' alt='laden...' />"); 
	$(".body", liElement).load(rootPath + "fragenundantworten/" + id + "/" + contentProfileValue + "/ajax.html");
}
function closeFAQEntry(liElement) {
	$(liElement).removeClass("isOpen");
	$(".body", liElement).html(""); 
	$(".clickForMore", liElement).css("visibility", "visible"); 
}


$(function () {
						
	if (bodyId == "faqPage") {

		$('#faq > li').mouseover(function(event) {
			
  		var target = $(event.target);
			if (!target.is("li")) {
				target = target.parent("li");
			}
  		if (!target.is(".isOpen")) {
				$(".shortAnswer", target).addClass("shortAnswerHighlighted");
				$(".clickForMore", target).css("visibility", "visible"); 
  		}		
			return false;
		}); 
		
		$('#faq > li').mouseout(function(event) {

  		var target = $(event.target);
			if (!target.is("li")) {
				target = target.parent("li");
			}
  		if (!target.is(".isOpen")) {
				$(".shortAnswer", target).removeClass("shortAnswerHighlighted"); 
				$(".clickForMore", target).css("visibility", "hidden"); 				
			}
			return false;
	}); 
		
		$('#faq > li').click(function() {
	
			var liObject = this;
	
			//$(liObject).each(function() {alert(this.tagName);});
	
			if (!$(liObject).is("li")) {
				liObject = $(liObject).parent("li");
			}
		
			//$(liObject).each(function() {alert(this.tagName);});

			if ($(liObject).is(".isOpen")) {
				closeFAQEntry(liObject);
			} else {
		    openFAQEntry(liObject)  		
			}
			return false;
	});
	}
});

function maxifyTimeline() {
	$("table#timeline").css("width", "100%");
	$("table#timeline").css("border-right", "none");
}

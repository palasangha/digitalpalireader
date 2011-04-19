var G_prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

function aboutPrompt() {

	var items = ["View Help File", "Open DPR Homepage", "Send Feedback"]; // list items

	var selected = {};

	var result = G_prompts.select(null, 'Digital Pali Reader v. ' + version, 'For more information:', items.length, items, selected);

	// result is true if OK was pressed, false if cancel. selected is the index of the item array
	// that was selected. Get the item using items[selected].value.
	switch(selected.value) {
		case 0:
			helpXML();
		break;
		case 1:
			openDPRTab('http://pali.sirimangalo.org/');
		break;
		case 2:
			openDPRTab('chrome://digitalpalireader/content/contact.htm','DPRc');
		break;
	}
}

function promptData(title,data) {
	G_prompts.alert(null, title, data);
}

function promptDataEx(title,data) {
	var check = {value: false};                  // default the checkbox to false
	var flags = G_prompts.BUTTON_POS_0 * G_prompts.BUTTON_TITLE_SAVE +
            G_prompts.BUTTON_POS_1 * G_prompts.BUTTON_TITLE_IS_STRING  +
            G_prompts.BUTTON_POS_2 * G_prompts.BUTTON_TITLE_CANCEL;
	G_prompts.confirmEx(null, title, data,flags,"","Ok","",null,check);
}

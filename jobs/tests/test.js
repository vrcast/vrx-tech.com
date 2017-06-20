function test() {
	if (window.test) {
		func1();
		func2();
		func3();
		func1();
		func2();
		return true;
	}
	else {
		return false;
	}
}

(function(){
"use strict";

	message = "a message";
    if ( isAGoodIntership() ) {
        console.log("This is a message" + ',' + " for you" + ',' + message);
	} else {
    	console.warn("Better leave this alone");
    }
    console.log('test', test());

})();
	
let day = { 
	
    events : ["cook", "sleep", "running"],
	
    accident: false
	
};
let journal = [
    {
     events: ["work", "touched tree", "pizza",
              "running", "television"],
     accident: false
    },
    {
     events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     accident: false
    },
    {
      events: ["weekend", "cycling", "break", 
              "peanuts","beer"],
      accident: true
    }
  ]

  	
let journal = [];
	
 
	
function addEntry(events, accident) {
	
  journal.push({events, accident});
	
    /******************************************         
	
     * Is {events, accident}  shorthand to    *
	
     * {events: events, accident: accident}   *
	
     *****************************************/
	
}
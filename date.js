//Getting date 

//excess module
//module exports
exports.getDate = function() {


const today = new Date();

//formnated date 
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'

};

//the formated date is passed to the day var
return today.toLocaleDateString("en-US", options);


};

//function getDay() {
//get this function
exports.getDay = function() {

    const today = new Date();
    
    //formnated date 
    const options = {
        weekday: 'long',
        
    
    };
    
    //the formated date is passed to the day var
    return today.toLocaleDateString("en-US", options);

    
    }
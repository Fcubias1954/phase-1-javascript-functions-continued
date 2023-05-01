function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
saturdayFun("bathe my dog");
// 'This saturday, I want to bathe my dog!'
saturdayFun();
// 'This Saturday, I want to roller-skate!'


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
mondayWork();
//'This Monday, I will go to the office.'
mondayWork("work from home");
//'This Monday, I will work from home.' 
 
function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    }
}
wrapAdjective("||")("a dedicated programmer");
// You are a dedicated programmer||!
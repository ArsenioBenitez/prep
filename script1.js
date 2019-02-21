var nums = [11,4,41,50,7,19,8,18,2,6,43,6,20,43,2,23,12,24,31];
var mean = 0;
var mode = "2,6,43";
var median = nums[](nums.length - 1) / 2];
nums.forEach(function(d)){
  mean += d;
}
document.getElementById("p").innerHTML= "List:" + nums;
document.getElementById("p").innerHTML=  "Mean: "+ mean ;
document.getElementById("p").innerHTML=  "Mode: "+ mode ;
document.getElementById("p").innerHTML= "Median: " +median;

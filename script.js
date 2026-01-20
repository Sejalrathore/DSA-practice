// arrays leetcode problems 


// TwoSum

//input = nums=[2,3,4,5,6]
//output = target = 11


//code

var twosum = function(nums,target){
    for(let i = 0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [nums[i],nums[j]]
            }
        }
    }
}

var a = twosum([2,3,4,5,6],11);
console.log(a)


// longest common prefix 

var longestcommonprefix = function(strs){
    if(strs.length==0)return "";
    let prefix = strs[0];
    for(let i =1;i<strs.length;i++){
        while(strs[i].indexOf[prefix]!==0){
            prefix = prefix.slice(0,-1);
            if(prefix == "")return "";
        }
    }
    return prefix;
}


// remove duplicates 

var removeDuplicates = function(nums) {
    if (nums.length ===0 )return 0;

    let k =1;

    for (let i =1;i<nums.length;i++){
        if (nums[i] !==nums[i - 1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k;
};


var removeElement = function(nums, val) {

    let k = 0;
    for (let i =0;i<nums.length;i++){
        if (nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }

return k;
    
};


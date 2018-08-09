debugger;
str_1 = "1";
let str_1_incr;
{ // let str_1_incr = str_1++;
  let step_1 = Number(str_1);
  str_1_incr = step_1;
  let step_2 = step_1 + 1; 
  str_1 = step_2;
};

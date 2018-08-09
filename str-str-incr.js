debugger

str_e = "e";
let str_e_incr;
{ // let str_e_incr = str_e++;
  let step_1 = Number(str_e);
  str_e_incr = step_1;
  let step_2 = step_1 + 1;
  str_e = step_2;
};

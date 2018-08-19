# increament-implicit-coercion

Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @devendrk Sign out
1
0 0 devendrk/increament-implicit-coercion
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
increament-implicit-coercion/README.md/excercise.js
48370ab  10 days ago
@devendrk devendrk Create excercise.js
     
71 lines (58 sloc)  1.24 KB
# increament-implicit-coercion
// incrementor operator: ++variable
// implicit coercion
// adding to NaN
// String(x) returns a new value
//  x is being read only

// -debbuger

let num_1 = 1;
let incr_num_1;
{ // let incr_1 = ++num_1;
  let step_1 = num_1 + 1;
  incr_num_1 = step_1;
  num_1 = step_1;
};

// -------------------------------

num_1 = 1;
let num_1_incr;
{ // let num_1_inc = num_1++;
  num_1_incr = num_1;
  let step_1 = num_1 + 1;
  num_1 = step_1;
};

// -------------------------------

let str_1 = "1";
let incr_str_1;
{ // let incr_str_1 = ++str_1;
  let step_1 = Number(str_1);
  let step_2 = step_1 + 1;
  incr_str_1 = step_2;
  str_1 = step_2;
};

// -------------------------------

str_1 = "1";
let str_1_incr;
{ // let str_1_incr = str_1++;
  let step_1 = Number(str_1);
  str_1_incr = step_1;
  let step_2 = step_1 + 1; 
  str_1 = step_2;
};

// -------------------------------

let str_e = "e";
let incr_str_e;
{ // let incr_str_e = ++str_e;
  let step_1 = Number(str_e);
  let step_2 = step_1 + 1;
  incr_str_e = step_2;
  str_e = step_2;
};

// -------------------------------

str_e = "e";
let str_e_incr;
{ // let str_e_incr = str_e++;
  let step_1 = Number(str_e);
  str_e_incr = step_1;
  let step_2 = step_1 + 1;
  str_e = step_2;
};
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.

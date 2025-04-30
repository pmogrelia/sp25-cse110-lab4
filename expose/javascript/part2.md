1. At line 12 the value 3 will be printed, this is because i is a var defined in the loop and var's can be accessed within the entire function scope. Additionally the value will be 3 since it is the first value where the conditional defined in our loop would be broken, to elaborate once i=3 our conditional i < prices.length would be false since 3 < 3 is false, and then we break from our loop and reach line 12. Hence line 12 prints 3. 
2. At line 13 the value 150 will be printed. This is because the var can be accessed within the entire function scope and the discounted price's last definition was the last item in the array discounted by 50%, which is 50% off 300 which is 150.
3. At line 14 the value 150 will be printed. This is because var is function scoped and the last update of the variable final price will store Math.round(150 * 100)/100 which evaluates back to 150 and is called to print at line 14.
4. This function returns the array [50,100,150]. This is because discounted is an array that is pushed to on each iteration of the for loop, where within the loop they calculate the discounted price of at each index of the input array with the percentage parameter, and is then rounded afterwards. With 0.5 discount and our input array of [100,200,300] our output from this function will clearly be [50,100,150]
5. This will result in an error, this is because the i was defined using let which is block scoped, and after the completion of the loop the variable i will no longer exist, hence when attempting to print a non defined variable we will get an error.
6. This is also going to be an error for the same reason as above, since discountedPrice was defined using let, and let is block scoped, hence cannot be printed from outside it's block. 
7. This will print 150, despite it using let this just means that the block scope of this variable ends up being the entire function, since the variable was originally declared at the top of the function, thus it's scope is the whole function and we are able to print the most recent value of finalPrice, which as we know from earlier is 150.
8. This function will not throw an error and return the discounted array of [50,100,150]. This is because our discounted array is defined at the top of the function and it's scope is the entire function, hence the function will operate and populate discounted as usual as described in answer 4. 
9. Line 11 will throw an error since i was defined as a loop variable using let, which means that it is block scoped and is tied to the loop it is in. Hence when we try to retrieve i at line 11 outside of the loop, we will get an error.
10. This time line 12 will print 3 since the variable length is defined at the top of the function using const, meaning that it is block scoped to the entire function and can be used at line 12. Length has value of 3 since the array we input to the function has length 3.
11. This function will return [50,100,150] since the const discounted is declared at the top of the function and is block scoped to the entire function. Similarly to questions 8 and 4 the functionality of the function will discount the array values and give us the discounted array with no errors. 
12. a. student.name
    b. student["Grad Year]
    c. student.greeting();
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]
13. - a. '32' is the output since the integer changes to its string representation and the + operator appends the strings together.
    - b. 1 is the output since when we use the - operation javascript converts our string '3' to int 3. 
    - c. 3 is the output. This is because null was mapped to the int value 0.
    - d. '3null' is the output. This is because null is taken as a string and the + operand concatenates both strings. 
    - e. 4 is the output. This is because the true is converted to int value of 1.
    - f. 0 is the output. This is because the false and null are converted to int value of 0.
    - g. '3undefined' is the output. This is because undefined is taken as a string and the + operand concatenates the string. 
    - h. NaN is the output. Since the - operand only works on integers but undefined has no integer conversion so NaN is returned. 
14. - a. True is the output. Since the '2' string is converted to the int 2 for the comparison. 
    - b. False is the output. Since both sides are strings it does alphabetical string comparison.
    - c. True is the output. Since it loosely compares the two it converts both sides to the same type. Either string or int.
    - d. False is the output. Since we are doing === the types will not be converted and they will not be equal. 
    - e. False is the output. Since it's loose comparison we convert the true to a 1 and 1 and 2 are not equal.
    - f. True is the output. This is because all numbers greater than 0 are cast to true by the boolean function.
15. == is less strict than === comparison. To elaborate in == both elements are converted to the same data type before comparison, whearas === assumes both are the same type already and will not aid in changing types. Thus being more strict than ==.
16. In part2-question16.js
17. [2,4,6] is the output. This is because for each run of the for loop we run callback on an index of our original input array. Our callback simply multiplies the number by 2, hence we end up multiplying each number in our array by 2 and then pushing it onto our newArr which is then returned after all indexes have been covered in our original array. 
18. In part2-question18.js
19. It prints 1 4 3 2 with each of the numbers in a new line in that order.

1. The result printed is "values added: 20"
2. The result printed is "final result: 20"
3. We should not use var since var is function scoped, meaning it can be accessed outside of the block it is defined in.
4. The result printed is "values added: 20"
5. We get an error, since our result was defined using let it cannot be accessed from outside of the if block it was defined in. 
6. Nothing is printed at line 9, since we have an error at line 7 since we are trying to reassign a new value to a constant variable, which is not possible.
7. Similarly nothing is printing at line 13 due to our assignment error at line 7, from assigning a new value to a const variable. 
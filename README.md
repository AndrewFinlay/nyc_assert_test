# nyc_assert_test
Shows an unexpected difference in assert behaviour between nyc and mocha

Under node 10 our test returns a different assertion failure message depending on whether you're running mocha through nyc or mocha on its own.
It seems that when running mocha under nyc we see the node 8 assertion failure message, while running mocha on its own we see
the node 10 message.

The message is the same whether running mocha through nyc or mocha on its own under node v8.

Assuming you're using nvm, to see the differences run: 

```
 $ nvm use v10
 $ npm test
 $ npm run cover
```

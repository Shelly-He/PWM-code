The bulk of our code is within the src folder. Inside the providers folder are all the typescript class storage files as well as the Main.ts and the Database.js. Database.js is what will link firebase to our project and it will interact will all the other files in this directory.
The Main class will be imported by the various ____.page.ts files found the in the corresponding app page directories (home, list are the only two there as of now). 


Steps to checkout and run the code:
1. Run 'npm install -g ionic' to get the ionic framework
2. Run 'npm install angular'
3. Run 'npm install --save-dev  --unsafe-perm node-sass'
4. Run 'npm install firebase @angular/fire --save'
5. Now you should have all the necesarry packages/libraries. Use 'git clone https://github.com/tlieb21/PWM2.git' to clone our repository
6. To actually run the app and view it in a web browser use 'ionic serve' inside the PWM app directory

 
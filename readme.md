# Base to work with Laravel Mix, SASS and ES6.
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) allows us to work with these technologies and many more in a simple way and with practically no configuration.

### Requirements
To work with this boilerplate, it is necessary to have installed [Node.js and NPM](https://nodejs.org/en/)
You can check if you have npm installed by running this command:
```bash
npm -v
```
Which should return something like `6.14.0`

## Installation
Download the repository and install laravel mix boilerplate using npm
```bash
git clone https://github.com/endani/laravel-mix-boilerplate my-project
cd my-project
npm install
```
That is all. From now on, you can now compile your assets.
Remember that `npm install` can take a long time to finish. It is normal, don't worry.

Then you just need to run this command to compile
```bash
npm run dev
```

### Watch (automatically compile on save)
To have the laravel mix boilerplate automatically compile when you make a change to the SASS, you can run this command:
```bash
npm run watch
```

#### Structure

In the `webpack.mix.js` file is the configuration that tells Laravel mix what to compile and where.

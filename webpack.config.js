//Webpack consfig file is used to show the entry & o/p & file 

var webpack= require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    // In externals we provide key & value where key is the module name and value is variable name which we want in our external scripts
    externals:{
        'jquery':'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',  //When we see $ we gonna use jquery module
            'jQuery':'jquery'
        })
    ],
    //output options tell Webpack how to write the compiled files to disk
    output: {
        path : __dirname,  // It for showing the current drectory//option determines the location on disk the files are written
        filename : './public/bundle.js'
    },
    //Options affecting the resolving of modules
    resolve: {

        //root :__dirname,
        modules:[
            'node_modules',
            //'./app/Components'
            path.resolve(__dirname, "./app/Components"), "node_modules",
            path.resolve(__dirname, "./app/api"), "node_modules"
            //path.resolve(__dirname, "app/style/"), "node_modules"
        ], 
        //Replace modules with other modules or paths.
         alias:{
            //ToDoApp: path.resolve(__dirname, 'app/Components'),
            applicationStyles: 'app/style/app.scss'
        }, 
        //which is what enables users to leave off the extension when importing:
        extensions: ['.js','.jsx']
    },
     
    //Need loader if we add jsx file , We use bable loader to test our file and parse them through react and get the
    //output & run throught the ES2017 */
    module: {
        loaders: [
            {
                 loader: 'babel-loader',
                 query: {                   // passing the data into bable loader and tell them to what exactly require
                     presets: ['react','es2017']// presets are built in bablel
                 },
                test: /\.jsx?$/,  // specify the folder wich we wannna parse
                exclude:/(node_modules|bower_components)/
            }  ,
        ]
    }/* ,
    sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  }, */
    
};

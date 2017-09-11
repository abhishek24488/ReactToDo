//Webpack consfig file is used to show the entry & o/p & file 

var webpack= require('webpack');

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
    output: {
        path : __dirname,  // It for showing the current drectory
        filename : './public/bundle.js'
    },
    resolve: {
        
       /*  alias:{
            Greeter : path.resolve( __dirname,'public/Components/Greeter.jsx'),
            GreeterForm : path.resolve( __dirname,'public/Components/GreeterForm.jsx'),
            GreeterMessage : path.resolve( __dirname,'public/Components/GreeterMessage.jsx')
        }, */
        extensions: ['.js','.jsx']
    },
    /* 
    Need loader if we add jsx file , We use bable loader to test our file and parse them through react and get the
    output & run throught the ES2017 */
    module: {
        loaders: [
            {
                 loader: 'babel-loader',
                 query: {                   // passing the data into bable loader and tell them to what exactly require
                     presets: ['react','es2017']// presets are built in bablel
                 },
                test: /\.jsx?$/,  // specify the folder wich we wannna parse
                exclude:/(node_modules|bower_components)/
            }           
        ]
    }   
};

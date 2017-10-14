//Webpack consfig file is used to show the entry & o/p & file 

var webpack= require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV= process.env.NODE_ENV || 'development';


try{
    envFile(path.join(__dirname,'config/' + process.env.NODE_ENV+ '.env'));
   
}catch(e){

}

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
    devServer:{
        historyApiFallback: true
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',  //When we see $ we gonna use jquery module
            'jQuery':'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV : JSON.stringify(process.env.NODE_ENV),
                API_KEY : JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN : JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL : JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET : JSON.stringify(process.env.STORAGE_BUCKET)
            }
        })
    ],
    //output options tell Webpack how to write the compiled files to disk
    output: {
        path : __dirname,  // It for showing the current drectory//option determines the location on disk the files are written
        filename : './public/bundle.js',
        publicPath: '/'
    },
    //Options affecting the resolving of modules
    resolve: {

        //root :__dirname,
        modules:[
            'node_modules',
            //'./app/Components'
            path.resolve(__dirname, "./app/Components"), "node_modules",
            path.resolve(__dirname, "./app/api"), "node_modules",
            //path.resolve(__dirname, "./app/actions"), "node_modules",
            //path.resolve(__dirname,"./app/reducers"), "node_modules",
            //path.resolve(__dirname,"./app/store"), "node_modules"
            //path.resolve(__dirname, "app/style/"), "node_modules"
        ], 
        //Replace modules with other modules or paths.
         alias:{
            //ToDoApp: path.resolve(__dirname, 'app/Components'),
           // applicationStyles: path.resolve(__dirname, "./app/style/app.scss"),
            actions:path.resolve(__dirname, "./app/actions/actions.jsx"),
            reducers:path.resolve(__dirname,"./app/reducers/reducers.jsx"),
            //firebase:path.resolve(__dirname,"./app/firebase/firebase.jsx"),
            configureStore:path.resolve(__dirname,"./app/store/configureStore.jsx")
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
                     presets: ['react','es2017','stage-3']// presets are built in bablel
                 },
                test: /\.jsx?$/,  // specify the folder wich we wannna parse
                exclude:/(node_modules|bower_components)/
            }  ,
        ]
    },/* ,
    sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  }, */
    
  devtool: process.env.NODE_ENV === 'production'?  undefined: 'cheap-module-eval-source-map'
};

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].bundle.[hash].${ext}`;

const babelOptions = (preset) => {
    const opts = {
        presets: ["@babel/preset-env"],
        plugins: [
            "@babel/plugin-proposal-class-properties"
        ]
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const jsLoaders = () => {
    return [
        {
            loader: "babel-loader",
            options: babelOptions(),
        },
    ];
};

const cssLoaders = () => {
    return {
        loader: MiniCssExtractPlugin.loader,
    };
};

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/img/"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename(".css")
        })
    ];

    // if (isProd) {
    //     base.push(new BundleAnalyzerPlugin());
    // }

    return base;
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./index.tsx"]
    },
    output: {
        publicPath: "",
        filename: filename(".js"),
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".json", ".png", ".jpg", ".jpeg"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 4200
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-typescript"),
                }
            },
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    },
                }
            },
            {
                test: /\.jsx$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: babelOptions("@babel/preset-react"),
                }
            },
            {
                test: /\.css$/,
                use: [
                    cssLoaders(),
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    cssLoaders(),
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    cssLoaders(),
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            },
            {
                test: /\.csv$/,
                use: ["csv-loader"]
            },
        ]
    }
};
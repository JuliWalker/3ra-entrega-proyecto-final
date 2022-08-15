import 'dotenv/config'

const options = {
    mongoDB:{
        URL: "mongodb+srv://julian:juliyluli@ecommerce.zjwuzjv.mongodb.net/ecommerce?retryWrites=true&w=majority",
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

export default options
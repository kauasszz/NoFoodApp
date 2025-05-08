const variables = {
    Api: {
       port: process.env.port || 3000
    },
    Database: {
       connection: 'mongodb+srv://kauasss:zU1fH61O6T1DLVKw@cluster0.bxrmaxl.mongodb.net/nofood?retryWrites=true&w=majority'
    }
   
}

module.exports = variables;
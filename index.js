const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model.js')
const productRoutes = require('./routes/routes.js')
const app = express();

//Middleware to parse JSON requeste
app.use(express.json());
//Middleware to parse URL encoded requests
app.use(express.urlencoded({extended: false}));
const pass = "Juventus2002"
const dbURI = "mongodb+srv://mattdema:" + pass + "@cluster0.uiixzn6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"

//Routes
app.use('/api/products', productRoutes);

mongoose.connect(dbURI)
    .then(() =>
    {
        console.log("Connected to DB!")
        app.listen(3000, () => 
        {
            console.log("Server is running on port 3000 ")
        });
            
    })
    .catch((err) =>
    {
        console.log(err)
    })


app.get('/', (req,res) =>
{
    res.send("Hello Worldddd!")
});

/*
app.post('/api/products', async (req,res) =>
{
    try 
    {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products', async (req,res) =>
{
    try 
    {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
})

app.get('/api/products/:id', async (req,res) =>
    {
        try 
        {
            const { id } = req.params;
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) 
        {
            console.log(error)
            res.status(500).json({message: error.message});
        }
    })

//Update a product
app.put('/api/products/:id', async (req, res) =>
{
    try 
    {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product)
        {
            return res.status(404).json({"message":"Not exists"});
        }
        else
        {
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        }
    } catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
});
    

//Delete a product

app.delete('/api/products/:id', async (req, res) =>
{
    try 
    {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product)
        {
            return res.status(404).json({"message":"Not exists"});
        }
        else
        {
            res.status(200).json({"message":"Product deleted successfully"});
        }

    } catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
});
*/
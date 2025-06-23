const {ProductRepository} = require('../repositories/productRepository');

class ProductController {
    //get products
    async getAllProducts(req, res) {
        try {
            const products = await ProductRepository.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving products', error});
        }
    }
    //get products/id
    async getProductById(req, res) {
        const productId = req.params.id;
        try {
            const product = await ProductRepository.findById(productId);
            if (!product) {
                return res.status(404).json({message: 'Product not found'});
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({message: 'Error retrieving product', error});
        }
    }

    //POST products
    async createProduct(req, res) {
        const productData = req.body;
        console.log(req.body);
        try{
            const productRepository = new ProductRepository();
            const newProduct = await productRepository.createProduct(productData).then((product) => {
                return product;
            });
        } catch (error) {
            console.error('Error creating product:', error);
            return res.status(500).json({message: 'Error creating product', error});
        }
    }
}

module.exports = new ProductController();
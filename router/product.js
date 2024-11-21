


import express from 'express'; 

 const router = express.Router(); // Simulated database with products (replace with a real database)

  let products = [

     { id: "1",
     name: "Telefon", 
     stock: 50, 
     title: "Fantastisk Smartphone",
      description: "En kraftfull smartphone med högkvalitativ kamera och snabb processor.",
       price: 5999, 
       discountPercentage: 10, 
       rating: 4.5, 
       category: "Elektronik" }, 

       { id: "2", 
        name: "Laptop", 
        stock: 500, 
        title: "Slank och kraftfull Laptop",
         description: "En lätt och kraftfull laptop perfekt för arbete och underhållning.",
          price: 12999, 
          discountPercentage: 5, 
          rating: 4.2,
           category: "Elektronik" },

            { id: "3", name: "Tablet", 
                stock: 100, 
                title: "Multifunktionell Tablet", 
                description: "En användarvänlig tablet för surfning, filmer och spel.",
                 price: 3999, 
                 discountPercentage: 0, 
                 rating: 3.8, 
                 category: "Elektronik" }, 

                 { id: "4",
                     name: "Hörlurar", 
                     stock: 200, 
                     title: "Högkvalitativa Hörlurar",
                      description: "Trådlösa hörlurar med fantastisk ljudkvalitet och lång batteritid.", 
                      price: 1999, 
                      discountPercentage: 15,
                       rating: 4.7, 
                       category: "Audio" } ,
                     
                       {
                        id: "5",
                        name: "Hörlurar",
                        stock: 200,
                        title: "Högkvalitativa Hörlurar",
                        description: "Trådlösa hörlurar med fantastisk ljudkvalitet och lång batteritid.",
                        price: 1999,
                        discountPercentage: 15,
                        rating: 4.7,
                        category: "Audio"
                    }
                  ];                
                     // GET /products - Retrieve all products 
                       router.get('/', (req, res) => { res.json(products); }); // GET /products/:id - Retrieve a product by ID 
                       router.get('/:id', (req, res) => { 
                        const id = req.params.id; 
                        const product = products.find(p => p.id === id);

                        if (product) { res.json(product); 

                        } else { res.status(404).send("Product not found"); } }); // POST /products - Create a new product 

                        router.post('/', (req, res) => {
                             const newProduct = req.body; products.push(newProduct); 

                             res.status(201).send(`Product with id ${req.body.id} has been added`); }); // PUT /products/:id - Update an existing product

                              router.put('/:id', (req, res) => {
                                 const id = req.params.id; 

                                 const updatedProduct = req.body; 
                                 const index = products.findIndex(p => p.id === id);

                                  if (index !== -1) { products[index] = updatedProduct; 
                                    res.send('Product updated'); }

                                   else { res.status(404).send('Product not found'); } }); // DELETE /products/:id - Delete a product 
                                   router.delete('/:id', (req, res) => { const id = req.params.id;

                                     products = products.filter(p => p.id !== id); 
                                     res.send('Product deleted'); });
                                   
                                     export default router;

                                    





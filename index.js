


import express from 'express';
import productRouter from './router/product.js'; // Importerar rutter för produkter
const app = express();
const PORT = 100; // Använd en annan port än 3306 om du har MySQL på samma maskin
app.use(express.json()); // För att hantera JSON-data i begäranden
// Rot-rutt för att kontrollera att servern är igång
app.get('/', (req, res) => {
res.send('API-servern är igång!');
});
// Använder rutter för produkter från productRouter
app.use('/products', productRouter);
app.listen(PORT, () => {
console.log(`Server lyssnar på http://localhost:${PORT}`);

});


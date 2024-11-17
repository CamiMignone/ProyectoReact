

const productos= [
    { "id": 1, "name": "Manzana Roja", "stock": 150, "price": 0.5, "description": "Manzanas frescas de cultivo local.", "img": "https://example.com/images/manzana_roja.jpg", "category": "frutaverdura" },
    { "id": 2, "name": "Plátano", "stock": 200, "price": 0.3, "description": "Plátanos maduros y dulces.", "img": "https://example.com/images/platano.jpg", "category": "frutaverdura" },
    { "id": 3, "name": "Leche Entera 1L", "stock": 180, "price": 1.2, "description": "Leche pasteurizada de vaca.", "img": "https://example.com/images/leche_entera.jpg", "category": "lacteos" },
    { "id": 4, "name": "Queso Gouda 200g", "stock": 100, "price": 2.5, "description": "Queso gouda con textura cremosa.", "img": "https://example.com/images/queso_gouda.jpg", "category": "lacteos" },
    { "id": 5, "name": "Pan Integral", "stock": 120, "price": 1.5, "description": "Pan integral recién horneado.", "img": "https://example.com/images/pan_integral.jpg", "category": "almacen" },
    { "id": 6, "name": "Huevos (12 unidades)", "stock": 250, "price": 2.0, "description": "Huevos frescos de gallinas camperas.", "img": "https://example.com/images/huevos.jpg", "category": "lacteos" },
    { "id": 7, "name": "Arroz Largo 1kg", "stock": 300, "price": 1.0, "description": "Arroz largo de alta calidad.", "img": "https://example.com/images/arroz_largo.jpg", "category": "almacen" },
    { "id": 8, "name": "Pasta Spaghetti 500g", "stock": 200, "price": 1.2, "description": "Spaghetti de trigo duro.", "img": "https://example.com/images/pasta_spaghetti.jpg", "category": "almacen" },
    { "id": 9, "name": "Pollo Entero", "stock": 50, "price": 6.5, "description": "Pollo fresco listo para cocinar.", "img": "https://example.com/images/pollo_entero.jpg", "category": "congelados" },
    { "id": 10, "name": "Carne Molida 500g", "stock": 80, "price": 4.0, "description": "Carne molida 100% res.", "img": "https://example.com/images/carne_molida.jpg", "category": "congelados" },
    { "id": 11, "name": "Zanahorias 1kg", "stock": 220, "price": 1.1, "description": "Zanahorias frescas para ensaladas.", "img": "https://example.com/images/zanahorias.jpg", "category": "frutaverdura" },
    { "id": 12, "name": "Tomate 1kg", "stock": 180, "price": 1.3, "description": "Tomates rojos y jugosos.", "img": "https://example.com/images/tomate.jpg", "category": "frutaverdura" },
    { "id": 13, "name": "Aceite de Oliva 1L", "stock": 120, "price": 4.0, "description": "Aceite virgen extra.", "img": "https://example.com/images/aceite_oliva.jpg", "category": "almacen" },
    { "id": 14, "name": "Azúcar Blanca 1kg", "stock": 200, "price": 0.9, "description": "Azúcar refinada de alta calidad.", "img": "https://example.com/images/azucar_blanca.jpg", "category": "almacen" },
    { "id": 15, "name": "Sal Fina 1kg", "stock": 250, "price": 0.7, "description": "Sal fina para cocina.", "img": "https://example.com/images/sal_fina.jpg", "category": "almacen" },
    { "id": 16, "name": "Café Molido 500g", "stock": 150, "price": 3.5, "description": "Café molido de aroma intenso.", "img": "https://example.com/images/cafe_molido.jpg", "category": "bebidas" },
    { "id": 17, "name": "Té Verde 25 sobres", "stock": 100, "price": 2.0, "description": "Té verde natural en sobres.", "img": "https://example.com/images/te_verde.jpg", "category": "bebidas" },
    { "id": 18, "name": "Galletas de Chocolate", "stock": 150, "price": 1.8, "description": "Galletas con chips de chocolate.", "img": "https://example.com/images/galletas_chocolate.jpg", "category": "postres" },
    { "id": 19, "name": "Helado de Vainilla 1L", "stock": 80, "price": 3.0, "description": "Helado cremoso sabor vainilla.", "img": "https://example.com/images/helado_vainilla.jpg", "category": "postres" },
    { "id": 20, "name": "Cereal Integral 500g", "stock": 140, "price": 2.5, "description": "Cereal integral para desayunos.", "img": "https://example.com/images/cereal_integral.jpg", "category": "almacen" },
    { "id": 21, "name": "Jugo de Naranja 1L", "stock": 130, "price": 1.5, "description": "Jugo de naranja natural.", "img": "https://example.com/images/jugo_naranja.jpg", "category": "bebidas" },
    { "id": 22, "name": "Mantequilla 250g", "stock": 100, "price": 2.0, "description": "Mantequilla tradicional.", "img": "https://example.com/images/mantequilla.jpg", "category": "lacteos" },
    { "id": 23, "name": "Papel Higiénico 12 rollos", "stock": 80, "price": 4.5, "description": "Papel higiénico suave y resistente.", "img": "https://example.com/images/papel_higienico.jpg", "category": "limpieza" },
    { "id": 24, "name": "Detergente Líquido 1L", "stock": 90, "price": 2.8, "description": "Detergente líquido para ropa.", "img": "https://example.com/images/detergente.jpg", "category": "limpieza" },
    { "id": 25, "name": "Cebollas 1kg", "stock": 200, "price": 0.8, "description": "Cebollas frescas y de sabor fuerte.", "img": "https://example.com/images/cebollas.jpg", "category": "frutaverdura" },
    { "id": 26, "name": "Papas 1kg", "stock": 220, "price": 1.0, "description": "Papas ideales para freír o cocinar.", "img": "https://example.com/images/papas.jpg", "category": "frutaverdura" },
    { "id": 27, "name": "Lentejas 1kg", "stock": 150, "price": 1.5, "description": "Lentejas ricas en proteínas.", "img": "https://example.com/images/lentejas.jpg", "category": "almacen" },
    { "id": 28, "name": "Garbanzos 1kg", "stock": 160, "price": 1.6, "description": "Garbanzos de textura cremosa.", "img": "https://example.com/images/garbanzos.jpg", "category": "almacen" },
    { "id": 29, "name": "Cerveza Lager 6x330ml", "stock": 70, "price": 5.0, "description": "Pack de cervezas lager.", "img": "https://example.com/images/cerveza.jpg", "category": "bebidas" },
    { "id": 30, "name": "Vino Tinto 750ml", "stock": 60, "price": 6.0, "description": "Vino tinto de reserva.", "img": "https://example.com/images/vino_tinto.jpg", "category": "bebidas" },
    { "id": 31, "name": "Atún en Lata 200g", "stock": 190, "price": 1.2, "description": "Atún en aceite de oliva.", "img": "https://example.com/images/atun.jpg", "category": "almacen" },
    { "id": 32, "name": "Sardinas en Salsa de Tomate", "stock": 140, "price": 1.5, "description": "Sardinas frescas en salsa.", "img": "https://example.com/images/sardinas.jpg", "category": "almacen" },
    { "id": 33, "name": "Chocolate Negro 70%", "stock": 90, "price": 2.5, "description": "Chocolate con alto contenido de cacao.", "img": "https://example.com/images/chocolate_negro.jpg", "category": "postres" },
    { "id": 34, "name": "Mermelada de Fresa 400g", "stock": 150, "price": 2.3, "description": "Mermelada de fresa sin conservantes.", "img": "https://example.com/images/mermelada_fresa.jpg", "category": "postres" },
    { "id": 35, "name": "Mayonesa 500g", "stock": 130, "price": 2.0, "description": "Mayonesa cremosa.", "img": "https://example.com/images/mayonesa.jpg", "category": "almacen" },
    { "id": 36, "name": "Ketchup 500g", "stock": 140, "price": 1.8, "description": "Ketchup con tomates frescos.", "img": "https://example.com/images/ketchup.jpg", "category": "almacen" },
    { "id": 37, "name": "Bebida Energética 500ml", "stock": 100, "price": 1.5, "description": "Bebida energética con taurina.", "img": "https://example.com/images/bebida_energetica.jpg", "category": "bebidas" },
    { "id": 38, "name": "Harina de Trigo 1kg", "stock": 200, "price": 0.9, "description": "Harina para todo uso.", "img": "https://example.com/images/harina_trigo.jpg", "category": "almacen" },
    { "id": 39, "name": "Galletas Digestivas 500g", "stock": 100, "price": 2.0, "description": "Galletas integrales y saludables.", "img": "https://example.com/images/galletas_digestivas.jpg", "category": "postres" },
    { "id": 40, "name": "Cereal de Avena 500g", "stock": 120, "price": 1.7, "description": "Avena rica en fibra.", "img": "https://example.com/images/cereal_avena.jpg", "category": "almacen" },
    { "id": 41, "name": "Detergente para Platos 750ml", "stock": 90, "price": 1.5, "description": "Líquido para lavar platos.", "img": "https://example.com/images/detergente_platos.jpg", "category": "limpieza" },
    { "id": 42, "name": "Servilletas 100 unidades", "stock": 150, "price": 1.0, "description": "Servilletas de papel resistentes.", "img": "https://example.com/images/servilletas.jpg", "category": "limpieza" },
    { "id": 43, "name": "Manzanas Verdes", "stock": 150, "price": 0.6, "description": "Manzanas verdes frescas.", "img": "https://example.com/images/manzana_verde.jpg", "category": "frutaverdura" },
    { "id": 44, "name": "Pimiento Rojo 1kg", "stock": 180, "price": 1.8, "description": "Pimientos rojos frescos.", "img": "https://example.com/images/pimiento_rojo.jpg", "category": "frutaverdura" },
    { "id": 45, "name": "Lechuga 1 unidad", "stock": 100, "price": 1.2, "description": "Lechuga fresca y crujiente.", "img": "https://example.com/images/lechuga.jpg", "category": "frutaverdura" },
    { "id": 46, "name": "Aguacate 1kg", "stock": 80, "price": 2.5, "description": "Aguacates maduros.", "img": "https://example.com/images/aguacate.jpg", "category": "frutaverdura" },
    { "id": 47, "name": "Pescado Congelado 500g", "stock": 90, "price": 3.0, "description": "Filetes de pescado congelados.", "img": "https://example.com/images/pescado_congelado.jpg", "category": "congelados" },
    { "id": 48, "name": "Pizza Congelada", "stock": 120, "price": 3.5, "description": "Pizza lista para hornear.", "img": "https://example.com/images/pizza_congelada.jpg", "category": "congelados" },
    { "id": 49, "name": "Yogur de Fresa", "stock": 150, "price": 0.9, "description": "Yogur sabor fresa.", "img": "https://example.com/images/yogur_fresa.jpg", "category": "lacteos" },
    { "id": 50, "name": "Agua Mineral 1.5L", "stock": 500, "price": 0.7, "description": "Agua mineral pura de manantial.", "img": "https://example.com/images/agua_mineral.jpg", "category": "bebidas" }
  ]

export const getProducts = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },3000)
    })
}

export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay data')
            }
        },2000)
    })
}
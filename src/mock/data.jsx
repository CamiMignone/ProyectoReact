

const productos= [
    { "id": 1, "name": "Durazno", "stock": 150, "price": 0.5, "description": "Duraznos frescos de cultivo local.", "img": "/public/durazno.jpg", "category": "frutaverdura" },
    { "id": 2, "name": "Plátano", "stock": 200, "price": 0.3, "description": "Plátanos maduros y dulces.", "img": "/public/banana.jpg", "category": "frutaverdura" },
    { "id": 3, "name": "Leche Entera 1L", "stock": 180, "price": 1.2, "description": "Leche pasteurizada de vaca.", "img": "/public/lechevegetal.jpg", "category": "lacteos" },
    { "id": 4, "name": "Queso Gouda 200g", "stock": 100, "price": 2.5, "description": "Queso gouda con textura cremosa.", "img": "/public/queso1.jpg", "category": "lacteos" },
    { "id": 5, "name": "Pan Integral", "stock": 120, "price": 1.5, "description": "Pan integral recién horneado.", "img": "/public/panintegral.jpg", "category": "almacen" },
    { "id": 6, "name": "Huevos (12 unidades)", "stock": 250, "price": 2.0, "description": "Huevos frescos de gallinas camperas.", "img": "/public/huevos.jpg", "category": "lacteos" },
    { "id": 7, "name": "Arroz Largo 1kg", "stock": 300, "price": 1.0, "description": "Arroz largo de alta calidad.", "img": "/public/arroz.jpg", "category": "almacen" },
    { "id": 8, "name": "Pasta Spaghetti 500g", "stock": 200, "price": 1.2, "description": "Spaghetti de trigo duro.", "img": "/public/fideos1.jpg", "category": "almacen" },
    { "id": 9, "name": "Pollo Entero", "stock": 50, "price": 6.5, "description": "Pollo fresco listo para cocinar.", "img": "/public/pollo.jpg", "category": "congelados" },
    { "id": 10, "name": "Carne Molida 500g", "stock": 80, "price": 4.0, "description": "Carne molida 100% res.", "img": "/public/carne.jpg", "category": "congelados" },
    { "id": 11, "name": "Zanahorias 1kg", "stock": 220, "price": 1.1, "description": "Zanahorias frescas para ensaladas.", "img": "/public/zanahoria.jpg", "category": "frutaverdura" },
    { "id": 12, "name": "Tomate 1kg", "stock": 180, "price": 1.3, "description": "Tomates rojos y jugosos.", "img": "/public/tomate.jpg", "category": "frutaverdura" },
    { "id": 13, "name": "Aceite de Oliva 1L", "stock": 120, "price": 4.0, "description": "Aceite virgen extra.", "img": "/public/aceiteoliva.jpg", "category": "almacen" },
    { "id": 14, "name": "Azúcar Blanca 1kg", "stock": 200, "price": 0.9, "description": "Azúcar refinada de alta calidad.", "img": "/public/azucar.jpg", "category": "almacen" },
    { "id": 15, "name": "Sal Fina 1kg", "stock": 250, "price": 0.7, "description": "Sal fina para cocina.", "img": "/public/sal.jpg", "category": "almacen" },
    { "id": 16, "name": "Café Molido 500g", "stock": 150, "price": 3.5, "description": "Café molido de aroma intenso.", "img": "/public/cafe.jpg", "category": "bebidas" },
    { "id": 17, "name": "Té Verde 25 sobres", "stock": 100, "price": 2.0, "description": "Té verde natural en sobres.", "img": "/public/te1.jpg", "category": "bebidas" },
    { "id": 18, "name": "Galletas de Chocolate", "stock": 150, "price": 1.8, "description": "Galletas con chips de chocolate.", "img": "/public/gallechocolate.jpg", "category": "postres" },
    { "id": 19, "name": "Helado de Vainilla 1L", "stock": 80, "price": 3.0, "description": "Helado cremoso sabor vainilla.", "img": "/public/helado.jpg", "category": "postres" },
    { "id": 20, "name": "Cereal Integral 500g", "stock": 140, "price": 2.5, "description": "Cereal integral para desayunos.", "img": "/public/cereal1.jpg", "category": "almacen" },
    { "id": 21, "name": "Jugo de Naranja 1L", "stock": 130, "price": 1.5, "description": "Jugo de naranja natural.", "img": "/public/jugonaranja.jpg", "category": "bebidas" },
    { "id": 22, "name": "Mantequilla 250g", "stock": 100, "price": 2.0, "description": "Mantequilla tradicional.", "img": "/public/manteca.jpg", "category": "lacteos" },
    { "id": 23, "name": "Papel Higiénico 12 rollos", "stock": 80, "price": 4.5, "description": "Papel higiénico suave y resistente.", "img": "/public/papelhigienico.jpg", "category": "limpieza" },
    { "id": 24, "name": "Detergente Líquido 1L", "stock": 90, "price": 2.8, "description": "Detergente líquido para ropa.", "img": "/public/jabonliquido.jpg", "category": "limpieza" },
    { "id": 25, "name": "Cebollas 1kg", "stock": 200, "price": 0.8, "description": "Cebollas frescas y de sabor fuerte.", "img": "/public/cebolla.jpg", "category": "frutaverdura" },
    { "id": 26, "name": "Papas 1kg", "stock": 220, "price": 1.0, "description": "Papas ideales para freír o cocinar.", "img": "/public/papas.jpg", "category": "frutaverdura" },
    { "id": 27, "name": "Lentejas 1kg", "stock": 150, "price": 1.5, "description": "Lentejas ricas en proteínas.", "img": "/public/lenteja.jpg", "category": "almacen" },
    { "id": 28, "name": "Garbanzos 1kg", "stock": 160, "price": 1.6, "description": "Garbanzos de textura cremosa.", "img": "/public/garbanzo.jpg", "category": "almacen" },
    { "id": 29, "name": "Cerveza Lager 6x330ml", "stock": 70, "price": 5.0, "description": "Pack de cervezas lager.", "img": "/public/cerveza.jpg", "category": "bebidas" },
    { "id": 30, "name": "Vino Tinto 750ml", "stock": 60, "price": 6.0, "description": "Vino tinto de reserva.", "img": "/public/vino.jpg", "category": "bebidas" },
    { "id": 31, "name": "Atún en Lata 200g", "stock": 190, "price": 1.2, "description": "Atún en aceite de oliva.", "img": "/public/atun.jpg", "category": "almacen" },
    { "id": 32, "name": "Sardinas en Salsa de Tomate", "stock": 140, "price": 1.5, "description": "Sardinas frescas en salsa.", "img": "/public/sardinas.jpg", "category": "almacen" },
    { "id": 33, "name": "Chocolate Negro 70%", "stock": 90, "price": 2.5, "description": "Chocolate con alto contenido de cacao.", "img": "/public/chocolate100.jpg", "category": "postres" },
    { "id": 34, "name": "Mermelada de Fresa 400g", "stock": 150, "price": 2.3, "description": "Mermelada de fresa sin conservantes.", "img": "/public/mermeladafrutilla.jpg", "category": "postres" },
    { "id": 35, "name": "Mayonesa 500g", "stock": 130, "price": 2.0, "description": "Mayonesa cremosa.", "img": "/public/mayonesa.jpg", "category": "almacen" },
    { "id": 36, "name": "Ketchup 500g", "stock": 140, "price": 1.8, "description": "Ketchup con tomates frescos.", "img": "/public/ketchup.jpg", "category": "almacen" },
    { "id": 37, "name": "Bebida Energética 500ml", "stock": 100, "price": 1.5, "description": "Bebida energética con taurina.", "img": "/public/gatorade.jpg", "category": "bebidas" },
    { "id": 38, "name": "Harina de Trigo 1kg", "stock": 200, "price": 0.9, "description": "Harina para todo uso.", "img": "/public/harina.jpg", "category": "almacen" },
    { "id": 39, "name": "Galletas Digestivas 500g", "stock": 100, "price": 2.0, "description": "Galletas integrales y saludables.", "img": "/public/galleintegral.jpg", "category": "postres" },
    { "id": 40, "name": "Cereal de Avena 500g", "stock": 120, "price": 1.7, "description": "Avena rica en fibra.", "img": "/public/avena.jpg", "category": "almacen" },
    { "id": 41, "name": "Detergente para Platos 750ml", "stock": 90, "price": 1.5, "description": "Líquido para lavar platos.", "img": "/public/detergente.jpg", "category": "limpieza" },
    { "id": 42, "name": "Jabon en polvo", "stock": 150, "price": 1.0, "description": "Jabon en polvo.", "img": "/public/jabonpolvo.jpg", "category": "limpieza" },
    { "id": 43, "name": "Manzanas Verdes", "stock": 150, "price": 0.6, "description": "Manzanas verdes frescas.", "img": "/public/manzanaverde.jpg", "category": "frutaverdura" },
    { "id": 44, "name": "Pimiento Rojo 1kg", "stock": 180, "price": 1.8, "description": "Pimientos rojos frescos.", "img": "/public/pimiento.jpg", "category": "frutaverdura" },
    { "id": 45, "name": "Lechuga 1 unidad", "stock": 100, "price": 1.2, "description": "Lechuga fresca y crujiente.", "img": "/public/lechuga.jpg", "category": "frutaverdura" },
    { "id": 46, "name": "Aguacate 1kg", "stock": 80, "price": 2.5, "description": "Aguacates maduros.", "img": "/public/palta.jpg", "category": "frutaverdura" },
    { "id": 47, "name": "Pescado Congelado 500g", "stock": 90, "price": 3.0, "description": "Filetes de pescado congelados.", "img": "/public/pescado.jpg", "category": "congelados" },
    { "id": 48, "name": "Pizza Congelada", "stock": 120, "price": 3.5, "description": "Pizza lista para hornear.", "img": "/public/pizza.jpg", "category": "congelados" },
    { "id": 49, "name": "Yogurt fits", "stock": 150, "price": 0.9, "description": "Yogur sabor fresa.", "img": "/public/yogurt.jpg", "category": "lacteos" },
    { "id": 50, "name": "CocaCola Lata", "stock": 500, "price": 0.7, "description": "Lata de CocaCola.", "img": "/public/cocacola.jpg", "category": "bebidas" }
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

//Opcion sensilla
// export const getOneProduct = ()=>{
//     let error=false
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!error){
//                 resolve(productos[1])
//             }else{
//                 reject('No hay data')
//             }
//         },3000)
//     })
// }

//Opcion dinamica

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
        },3000)
    })
}
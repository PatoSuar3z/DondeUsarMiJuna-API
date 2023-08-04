CREATE DATABASE IF NOT EXISTS localesdb;

USE localesdb;

CREATE TABLE local (
    id INT(10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    ciudad VARCHAR(45) NOT NULL,
    redes VARCHAR(150) NOT NULL,
    especialidad VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    logo  VARCHAR(255) NOT NULL,
    imagen_tienda VARCHAR(255) NOT NULL,
    url VARCHAR(255),
    PRIMARY KEY (id)
);

DESCRIBE local;


INSERT INTO local VALUES 
(1,'Pulcinella Pizzeria', 'Av Nueva Providencia 1549, local 15', 'Santiago', 'https://www.instagram.com/pizzeriapulcinella.cl/', 'Pizza', 'Pulcinella Pizzeria es un restaurante italiano ubicado en el corazón de Providencia, Santiago de Chile. Nuestro objetivo es ofrecer a nuestros clientes una experiencia gastronómica única, con los mejores ingredientes y sabores de Italia. ¡Te esperamos!', 'https://static.wixstatic.com/media/c7412b_654d3297335f4bc8a48e8a59e7e03f75~mv2.png/v1/crop/x_16,y_0,w_449,h_450/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pulcinella_PNG.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg', 'https://www.pizzeriapulcinella.cl/')


{ 
"nombre" : "streetfood.chile18", 
"direccion" : "Halcón 584, 9290633 Maipú, Región Metropolitana", 
"ciudad" : "Santiago", 
"redes" : "https://www.instagram.com/streetfood.chile18/",
"especialidad" : "Pizza , Churrasco , Completos , Salchipapas , Hamburguesas, Sushi",
"descripcion" : "",
"logo" : "https://cdn.mer-cat.com/streetfood/img/settings/whatsapp_image_20230209_at_2_1675963412nqh8pd.22.41_pm.jpeg",
"imagen_tienda" : "https://cdn.mer-cat.com/streetfood/img/settings/whatsapp_image_20230209_at_2_1675963412nqh8pd.22.41_pm.jpeg",
"url" : "https://www.streetfoodchile.cl/",
"comuna " : "Maipú"
}
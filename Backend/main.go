package main

import (
	"github.com/alfandnap/asaba/controllers"
	"github.com/alfandnap/asaba/initializers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/products", controllers.GetAllProducts)
	r.GET("/products/:id", controllers.GetProductByPK)
	r.PUT("/products/:id", controllers.PutProductByPK)
	r.POST("/products", controllers.CreateProduct)
	r.DELETE("/products/:id", controllers.DeleteProductByPK)

	r.Run()
}

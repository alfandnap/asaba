package controllers

import (
	"github.com/alfandnap/asaba/initializers"

	"github.com/alfandnap/asaba/models"
	"github.com/gin-gonic/gin"
)

func CreateProduct(c *gin.Context) {

	var body struct {
		Nama      string
		Jumlah    int
		Deskripsi string
		Status    bool
	}

	c.Bind(&body)

	product := models.Product{Nama: body.Nama, Jumlah: body.Jumlah, Deskripsi: body.Deskripsi, Status: body.Status}

	result := initializers.DB.Create(&product)

	if result.Error != nil {
		c.Status(505)
		return
	}

	c.JSON(201, gin.H{
		"message": result,
	})

}

func GetAllProducts(c *gin.Context) {

	var products []models.Product
	initializers.DB.Find(&products)

	c.JSON(200, gin.H{
		"products": products,
	})
}

func GetProductByPK(c *gin.Context) {

	id := c.Param("id")

	var product []models.Product
	initializers.DB.First(&product, id)

	c.JSON(200, gin.H{
		"product": product,
	})
}

func PutProductByPK(c *gin.Context) {

	id := c.Param("id")

	var body struct {
		Nama      string
		Jumlah    int
		Deskripsi string
		Status    bool
	}

	c.Bind(&body)

	var product []models.Product
	initializers.DB.First(&product, id)

	initializers.DB.Model(&product).Updates(models.Product{Nama: body.Nama, Jumlah: body.Jumlah, Deskripsi: body.Deskripsi, Status: body.Status})

	c.JSON(200, gin.H{
		"product": product,
	})
}

func DeleteProductByPK(c *gin.Context) {

	id := c.Param("id")

	initializers.DB.Delete(&models.Product{}, id)

	c.JSON(200, gin.H{
		"message": "success deleting product",
	})
}

package main

import (
	"github.com/alfandnap/asaba/initializers"
	"github.com/alfandnap/asaba/models"
)

func init() {
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.Product{})
}

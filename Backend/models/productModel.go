package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Nama      string
	Jumlah    int
	Deskripsi string
	Status    bool
}

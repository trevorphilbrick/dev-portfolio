package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	_ "modernc.org/sqlite"
)


func main() {
	fmt.Println("Starting server...")

	router := gin.Default()



	router.Run("0.0.0.0:8080")
}

package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
    fmt.Println("Step 1: Starting main")

    router := gin.Default()
    fmt.Println("Step 2: Gin router created")

    err := router.Run("0.0.0.0:8080")
    if err != nil {
        fmt.Println("Step 3: Error starting server:", err)
    } else {
        fmt.Println("Step 3: Server should be running (this won’t print unless Run returns)")
    }
}
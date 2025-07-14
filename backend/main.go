package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
    fmt.Println("🚀 Starting")

    r := gin.Default()
    fmt.Println("✅ Gin initialized")

    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })

    fmt.Println("🌐 Server starting on :8080")
    err := r.Run("0.0.0.0:8080")
    if err != nil {
        fmt.Println("❌ Server failed:", err)
    }
}

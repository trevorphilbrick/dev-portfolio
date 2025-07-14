package main

import (
	"github.com/gin-gonic/gin"
	_ "modernc.org/sqlite"
)

type DbArgs struct {
	dbType string
	dbPath string
}

var dbArgs = DbArgs{
	dbType: "sqlite",
	dbPath: "../db/trevorphilbrick.db",
}



// todo: get proper types for posts
type Post struct {
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Description string `json:"description"`
	Content   string `json:"content"`
	Image     string `json:"image"`
	Timestamp string `json:"timestamp"`
}

// func checkToken(token string) bool {
// 	trimmedToken := strings.ReplaceAll(token, "Bearer ", "")
// 	sourceTokenByteCode, err := os.ReadFile(("../shared/sourceToken.txt"))

// 	if err != nil {
// 		fmt.Printf("Error reading token file: %v\n",err)
// 	}

// 	if trimmedToken == string(sourceTokenByteCode) {
// 		return true
// 	}
// 	return false
// }

// func getPosts(c *gin.Context) {
// 	token := c.GetHeader("Authorization")
// 	if !checkToken(token) {
// 		c.JSON(401, gin.H{"error": "Unauthorized"})
// 		return
// 	}

// 	db, err := sql.Open(dbArgs.dbType, dbArgs.dbPath)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// Check the connection
// 	if err := db.Ping(); err != nil {
// 		panic(err)
// 	}

// 	// get all posts from database
// 	rows, err := db.Query("SELECT * FROM blog_posts")
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer rows.Close()

// 	var posts []Post
// 	for rows.Next() {
// 		var post Post
// 		err := rows.Scan(&post.Id, &post.Title, &post.Description, &post.Content, &post.Image, &post.Timestamp)
// 		if err != nil {
// 			panic(err)
// 		}
// 		posts = append(posts, post)
// 	}

// 	fmt.Println("Connected to SQLite database.")

// 	c.JSON(200, gin.H{
// 		"posts": posts,
// 	})
//   	}

// func createPost(c *gin.Context) {
// 	token := c.GetHeader("Authorization")
// 	if !checkToken(token) {
// 		c.JSON(401, gin.H{"error": "Unauthorized"})
// 		return
// 	}
// 	db, err := sql.Open(dbArgs.dbType, dbArgs.dbPath)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// get post data from request
// 	var post Post
// 	if err := c.ShouldBindJSON(&post); err != nil {
// 		c.JSON(400, gin.H{"error": err.Error()})
// 		return
// 	}

// 	// check if post is valid
// 	if  post.Title == "" || post.Description == "" || post.Content == "" || post.Image == "" {
// 		c.JSON(400, gin.H{"error": "Invalid post data"})
// 		return
// 	}

// 	// insert post into database
// 	stmt, err := db.Prepare("INSERT INTO blog_posts (title, description, content, image, timestamp) VALUES (?, ?, ?, ?, ?)")
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer stmt.Close()


// 	// execute statement
// 	_, err = stmt.Exec(post.Title, post.Description, post.Content, post.Image, time.Now().Format("2006-01-02 15:04:05"))
// 	if err != nil {
// 		panic(err)
// 	}

// 	c.JSON(200, gin.H{
// 		"message": "Post created successfully",
// 	})
// }

// func createTables() {
// 	db, err := sql.Open(dbArgs.dbType, dbArgs.dbPath)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// create blog_posts table
// 	_, err = db.Exec("CREATE TABLE IF NOT EXISTS blog_posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, content TEXT, image TEXT, timestamp DATE)")
// 	if err != nil {
// 		panic(err)
// 	}

// 	// create tags table
// 	_, err = db.Exec("CREATE TABLE IF NOT EXISTS tags (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL)")
// 	if err != nil {
// 		panic(err)
// 	}

// 	// create post_tags junction table
// 	_, err = db.Exec("CREATE TABLE IF NOT EXISTS post_tags (post_id INTEGER, tag_id INTEGER, PRIMARY KEY (post_id, tag_id), FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE, FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE)")
// 	if err != nil {
// 		panic(err)
// 	}

// 	fmt.Println("All tables created successfully")
// }

// func getPost(c *gin.Context) {
// 	token := c.GetHeader("Authorization")
// 	if !checkToken(token) {
// 		c.JSON(401, gin.H{"error": "Unauthorized"})
// 		return
// 	}
// 	id := c.Param("id")
// 	db, err := sql.Open(dbArgs.dbType, dbArgs.dbPath)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// get post from database
// 	row := db.QueryRow("SELECT * FROM blog_posts WHERE id = ?", id)
// 	var post Post
// 	err = row.Scan(&post.Id, &post.Title, &post.Description, &post.Content, &post.Image, &post.Timestamp)
// 	if err != nil {
// 		panic(err)
// 	}

// 	c.JSON(200, gin.H{
// 		"post": post,
// 	})
// }

// func deletePost(c *gin.Context) {
// 	token := c.GetHeader("Authorization")
// 	if !checkToken(token) {
// 		c.JSON(401, gin.H{"error": "Unauthorized"})
// 		return
// 	}
// 	id := c.Param("id")
// 	db, err := sql.Open(dbArgs.dbType, dbArgs.dbPath)
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer db.Close()

// 	// delete post from database
// 	_, err = db.Exec("DELETE FROM blog_posts WHERE id = ?", id)
// 	if err != nil {
// 		panic(err)
// 	}

// 	c.JSON(200, gin.H{
// 		"message": "Post deleted successfully",
// 	})
// }
func main() {
	// createTables()

	router := gin.Default()

	// router.GET("/blog/posts", getPosts)
	// router.POST("/blog/posts", createPost)
	// router.GET("/blog/posts/:id", getPost)
	// router.DELETE("/blog/posts/:id", deletePost)

	router.Run("0.0.0.0:8080")
}

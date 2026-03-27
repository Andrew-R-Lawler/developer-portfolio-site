package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Models

type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	ImageURL    string   `json:"imageUrl"`
	Tags        []string `json:"tags"`
	RepoURL     string   `json:"repoUrl"`
	LiveURL     string   `json:"liveUrl"`
}

type Skill struct {
	Category string   `json:"category"`
	Items    []string `json:"items"`
}

type Profile struct {
	Name     string `json:"name"`
	Role     string `json:"role"`
	Bio      string `json:"bio"`
	Email    string `json:"email"`
	Github   string `json:"github"`
	LinkedIn string `json:"linkedin"`
}

type ContactMessage struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required"`
}

// Placeholder Data

var projects = []Project{
	{
		ID:          "1",
		Title:       "Distributed Task Queue",
		Description: "A high-performance, resilient distributed task queue built with Go and Redis.",
		ImageURL:    "/images/project-1.png",
		Tags:        []string{"Go", "Redis", "Docker", "gRPC"},
		RepoURL:     "https://github.com",
		LiveURL:     "https://example.com",
	},
	{
		ID:          "2",
		Title:       "E-Commerce Microservices",
		Description: "A scalable e-commerce backend built with asynchronous event-driven architecture.",
		ImageURL:    "/images/project-2.png",
		Tags:        []string{"Kubernetes", "Kafka", "PostgreSQL", "React"},
		RepoURL:     "https://github.com",
		LiveURL:     "",
	},
	{
		ID:          "3",
		Title:       "AI Integration Toolkit",
		Description: "A toolkit for seamlessly integrating LLMs into existing enterprise applications.",
		ImageURL:    "/images/project-3.png",
		Tags:        []string{"Python", "LangChain", "OpenAI", "FastAPI"},
		RepoURL:     "https://github.com",
		LiveURL:     "https://example.com",
	},
}

var skills = []Skill{
	{Category: "Languages", Items: []string{"Go", "TypeScript", "Python", "Rust", "SQL"}},
	{Category: "Frontend", Items: []string{"React", "Vite", "Tailwind CSS", "Next.js", "Zustand"}},
	{Category: "Backend", Items: []string{"Gin", "Node.js", "PostgreSQL", "Redis", "gRPC"}},
	{Category: "DevOps", Items: []string{"Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"}},
}

var profile = Profile{
	Name:     "Alex Mercer",
	Role:     "Senior Full-Stack Developer",
	Bio:      "I build robust, scalable applications from the database all the way to the pixel-perfect frontend. Passionate about clean code, system architecture, and modern web technologies.",
	Email:    "hello@example.com",
	Github:   "https://github.com/example",
	LinkedIn: "https://linkedin.com/in/example",
}

func main() {
	r := gin.Default()

	// CORS configuration
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type"}
	r.Use(cors.New(config))

	// API Routes
	api := r.Group("/api/v1")
	{
		api.GET("/projects", func(c *gin.Context) {
			c.JSON(http.StatusOK, projects)
		})

		api.GET("/skills", func(c *gin.Context) {
			c.JSON(http.StatusOK, skills)
		})

		api.GET("/profile", func(c *gin.Context) {
			c.JSON(http.StatusOK, profile)
		})

		api.POST("/contact", func(c *gin.Context) {
			var msg ContactMessage
			if err := c.ShouldBindJSON(&msg); err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
				return
			}
			
			// MOCK SENDING EMAIL
			fmt.Printf("--- MOCK EMAIL SENT ---\nTo: %s\nFrom: %s (%s)\nMessage: %s\n-----------------------\n", 
				profile.Email, msg.Name, msg.Email, msg.Message)

			c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Email sent successfully!"})
		})
	}

	// Serve Static Files for Frontend
	r.NoRoute(func(c *gin.Context) {
		// Attempt to serve file from frontend/dist
		path := c.Request.URL.Path
		if path != "/" {
			c.FileFromFS("../frontend/dist"+path, gin.Dir("", false))
		}
		
		// Fallback to index.html for SPA routing if file not found
		// In a real production setup, we'd more rigorously check if the file exists.
		c.File("../frontend/dist/index.html")
	})

	log.Println("Server running on http://localhost:8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

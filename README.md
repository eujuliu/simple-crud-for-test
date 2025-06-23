# Simple CRUD for Test Purposes

This repository was created to serve as a collection of simple CRUD (Create, Read, Update, Delete) applications and APIs, implemented in multiple languages and frameworks. The main goal is to provide a diverse set of minimal, well-documented projects that can be used for testing, learning, and experimentation.

## Project Purpose

- **Multi-language & Multi-framework**: Showcase CRUD implementations using different programming languages and frameworks.
- **Testing & Experimentation**: Serve as a resource for testing tools, CI/CD pipelines, deployment strategies, and more.
- **Learning Resource**: Help developers understand basic CRUD patterns across various stacks.

## Contribution Guidelines

If you want to add a new API or web application to this repository, please follow these rules:

1. **Include Automated Tests**
   Every new project must have automated tests to verify its functionality.

2. **Provide Documentation**
   Each project should include clear documentation (e.g., a `README.md` in its folder) explaining how to install, run, and test the application.

3. **CRUD Domain**
   All projects in this repository should implement a simple CRUD for a **Task Manager** domain, with the following entities and fields as a minimum:

   **User**

   ```json
   {
     "id": 1,
     "name": "Julio Martins",
     "email": "julio@example.com"
   }
   ```

   **Project**

   ```json
   {
     "id": 1,
     "name": "Personal Website",
     "ownerId": 1
   }
   ```

   **Task**

   ```json
   {
     "id": 1,
     "title": "Fix mobile layout",
     "description": "Homepage breaks on mobile",
     "completed": false,
     "userId": 1,
     "projectId": 1,
     "tags": [1, 2]
   }
   ```

   **Tag**

   ```json
   {
     "id": 1,
     "name": "frontend"
   }
   ```

   This standardization makes it easy to compare implementations across different languages and frameworks.

4. **Folder Naming Convention**
   Name your project folder using the main technologies used, separated by hyphens.
   **Example:**
   - `nodejs-mongodb-express`
   - `python-flask-sqlite`
   - `go-gin-gorm`

## Example Structure

```
apis/
├── nodejs-mongodb-express/
│   ├── README.md
│   ├── src/
│   ├── tests/
│   └── ...
├── python-flask-sqlite/
│   ├── README.md
│   ├── app/
│   ├── tests/
│   └── ...
└── ...
```

## How to Contribute

1. Fork this repository.
2. Create your project following the rules above.
3. Add your project folder to the root of the repository.
4. Submit a pull request with a clear description of your addition.

---

Feel free to use these projects for your own testing and learning needs!

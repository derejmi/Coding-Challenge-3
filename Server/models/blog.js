const db = require("../db/config");
const SQL = require("sql-template-strings");

class Blog {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.message = data.message;
    this.link = data.link;
    this.date = new Date();
  }

  //get all posts
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(SQL`SELECT * FROM blogs;`);
        console.log(blogData, "blogData");
        const blogs = blogData.rows.map((blog) => new Blog(blog));
        resolve(blogs);
      } catch (err) {
        reject("Error retriveing blogs");
      }
    });
  }

  //get by Id
  static findByID(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(`SELECT * FROM blogs WHERE id = 1;`);
        let blog = new Blog(blogData.rows[0]);
        resolve(blog);
      } catch (err) {
        reject("Blog not found");
      }
    });
  }

  //create
  static create(title, message, link) {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(
          SQL`INSERT INTO blogs (title, message, link) VALUES (${title}, ${message}, ${link}) RETURNING *`
        );
        const newBlog = new Blog(blogData.rows[0]);

        resolve(newBlog);
      } catch (err) {
        reject("Error creating blog");
      }
    });
  }
}

module.exports = Blog;

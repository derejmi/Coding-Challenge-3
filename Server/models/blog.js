const db = require("../db/config");
const SQL = require("sql-template-strings");

class Blog {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.messages = data.messages;
    this.link = data.link;
    this.date = new Date();
  }

  //get all posts
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(SQL`SELECT * FROM blogs;`);
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
        const blogData = await db.run(`SELECT * FROM blogs WHERE id = ${id};`);
        console.log(blogData, "blogData2");
        let blog = new Blog(blogData.rows[0]);
        console.log(blog, "blog");
        resolve(blog);
      } catch (err) {
        reject("Blog not found");
      }
    });
  }

  //create
  static create(title, messages, link) {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(
          SQL`INSERT INTO blogs (title, messages, link) VALUES (${title}, ${messages}, ${link}) RETURNING *`
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

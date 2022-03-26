import "./blog.scss"

export default function Blog() {
  return (
    <div className="blog" id="blog">
    <h2>Blog</h2>
    <h6>Check out my posts</h6>
            <div className="wrapper">
                  <div className="par">
                      <p>I share technology news and resources for digital marketers <p></p>web designers and
                      web developers </p>
                  </div>
                  <div className="blogLink">
                      <a href="https://webdevelperdotblog.wordpress.com/">   
                      <button className="blogBtn">Visit my blog</button>
                    </a>  
                  </div>
            </div>
      </div>

  )
}

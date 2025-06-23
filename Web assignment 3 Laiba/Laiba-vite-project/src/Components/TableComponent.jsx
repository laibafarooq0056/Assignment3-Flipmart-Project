export default function TableComponent(){
    return (
      <div className="center">
        <div className="form"> 
          <form action>
            <table>
              <tbody><tr>
                  <td>*Name</td>
                  <td>*Email</td>
                </tr>
                <tr>
                  <td><input type="text" defaultValue="john doe" id="name" required /></td>
                  <td><input type="email" defaultValue="john.doe@gmail.com" id="email" required /></td>
                </tr>
                <tr>
                  <td>Telephone</td>
                </tr>
                <tr colSpan={2}>
                  <td colSpan={2}> <input type="tel" id="tel" /></td>
                </tr>
                <tr>
                  <td>*Comment</td>
                </tr>
                <tr>
                  <td colSpan={2}><textarea required id="Comment" defaultValue={""} /></td>
                </tr>
                <tr><td>*Required Fields</td></tr>
                <tr><td>
                    <input type="submit" id="submit" />
                  </td></tr>
              </tbody></table>
          </form>
        </div>
        <div className="company">
          <h4>Company</h4>
          <hr />
          <div id="link">
            <nav id="links">
              <a href>&gt; About Us</a>
              <a href>&gt; Sitemap </a>
              <a href>&gt; Terms of Service</a>
              <a href>&gt; Search Terms</a>
              <a href id="contact">&gt; Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    );
}
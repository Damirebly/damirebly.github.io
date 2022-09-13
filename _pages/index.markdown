---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


title: Home
permalink: /
---


<div class="index-content">
  <div class="index-latest">
    
    <div class="index-latest-blog">
    <h2>Latest blog post</h2>
        <ul>
          {% for post in site.posts limit: 1 %}
          <li><div class="post-title">{{ post.title }}</div></li>
          <div class="post-date">{{ post.date | date: "%b %-d, %Y" }}</div>
          {{ post.excerpt }} 
          <a href="{{ post.url }}">Read full post</a>
          {% endfor %}
        </ul>
      
    </div>


    <hr>

    <div class="index-latest-art">
       <h2>Latest art</h2>
      <ul class="gallerylist">
          {% for art in site.data.artfiles limit:3 %}
            <li>
              <a href="{{ art.title | datapage_url: 'gallery' }}"><img src="{{ art.thumbnail }}" class="galleryimg" alt="{{ art.alttext }} class="></a>
            </li>
          {% endfor %}
      </ul>
    </div>
 </div>

  <div class="index-side">
    <ul>
        {% for art in site.data.indexartfocus limit:1 %}
          <li>
            <img src="{{ art.imagepath }}" class="index-art-focus"/>
          </li>
        {% endfor %}
    </ul>
  </div>
</div>
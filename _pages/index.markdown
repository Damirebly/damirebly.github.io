---
title: Home
permalink: /
---


<div class="index-content">

  <div class="index-latest">
    <h1>Damirebly.net - Home</h1>
    <div class="index-latest-blog">
      <h2>Latest blog post</h2>
      <div class="index-latest-blog__content">
          {% for post in site.posts limit: 1 %}
          <h3>{{ post.title }}</h3>
          <div class="post__date">{{ post.date | date: "%b %-d, %Y" }}</div>
          {{ post.excerpt | strip_html | truncatewords: 100 }} 
          <div class="post-link"><a href="{{ post.url }}">Read full post</a></div>
          {% endfor %}
      </div>
    </div>



    <div class="index-latest-art">
       <h2>Latest art</h2>
      <ul class="gallery__list">
          {% assign arts = site.data.artfiles | sort: 'date' | reverse %}
          {% for art in arts limit:3 %}
            <li>
              <a href="{{ art.title | datapage_url: 'gallery' }}"><img src="{{ art.thumbnail }}" class="galleryimg" alt="{{ art.alttext }} class="></a>
            </li>
          {% endfor %}
      </ul>
    </div>
 </div>

  <div class="index-side">
     {% include randomize.html %}
  </div>
</div>

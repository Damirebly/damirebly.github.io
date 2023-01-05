---

title: Blog
permalink: /blog
---

<div class="blog__container">
<div class="sidebar__container">
  {% include toggleSidebar.html %}
  <nav class="sidebar" id="foo">
<div id="medium-title">Blog navigation</div>
<ul class="sidebar__latest-posts">
  {% for post in site.posts limit:12 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<div>
<a href="/blog/archive">Blog archive</a><br>
<a href="/blog/tags">All tags</a><br><br>
<a href="/feed.xml">RSS feed</a>
</div>
</nav>
</div>


<div class="blog__content">
<h1>Recent blog posts</h1>
  <ul>
  {% for post in site.posts %}
  <li class="blog__post">
   <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <div class="post__date">{{ post.date | date: "%-d %b %Y" }}</div>
   <div class="post__tags">
   <ul><li>
    {% if post %}
      {% assign tags = post.tags %}
    {% else %}
      {% assign tags = page.tags %}
    {% endif %}
    {% for tag in tags %}
      <a href="/blog/tags/{{tag|slugize}}">{{tag}}</a>
      <!-- separates the tags with a comma and a space, unless its the last item -->
      {% unless forloop.last %},&nbsp;{% endunless %}
    {% endfor %}
    </li>
    </ul>
    </div>
   
   <div class="post__content">{{ post.content }}</div>  </li>
  {% endfor %}
  </ul>

</div>
</div>
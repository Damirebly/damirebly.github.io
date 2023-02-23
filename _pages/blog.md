---

title: Blog
permalink: /blog
---

<div class="blog__container">
<div class="sidebar__container">
  {% include blog-sidebar.html %}
</div>


<div class="blog__content" id="dimmable">
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
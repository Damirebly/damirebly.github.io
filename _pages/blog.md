---

title: Blog
permalink: /blog
---

## My Blog Posts

<ul>
  {% for post in site.posts limit:5 %}
  <li><a href="{{ post.url }}" class="post-preview">{{ post.title }}</a></li>
  {% endfor %}
</ul>


<a href="/blog/categories">All categories</a>
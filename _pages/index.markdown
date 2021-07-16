---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


title: Home
permalink: /
---

# Hello!

Latest blog post

<ul>
  {% for post in site.posts limit: 3 %}
  <li><a href="{{ post.url }}" class="post-preview">{{ post.title }}</a></li>
  {% endfor %}
</ul>


Latest gallery

<ul class="gallerylist">
    {% for art in site.data.artfiles limit:2 %}
      <li>
        <a href="{{ art.url }}"><img src="{{ art.thumbnail }}" class="galleryimg" alt="{{ art.alttext }} class="></a>
      </li>
    {% endfor %}
    </ul>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae odio finibus, gravida lectus vel, vestibulum neque. Nam quis elit vel ante semper tempus. Fusce aliquet porttitor ligula, eu egestas mauris. Maecenas suscipit eros id ante imperdiet, et porta mauris placerat. Donec est ex, finibus non sapien et, rutrum auctor ex. Aenean quis massa nibh. Curabitur pretium, mauris eget molestie lobortis, ex elit tempus metus, et varius nulla nulla sit amet lacus. Nunc non scelerisque leo, vel finibus urna. Morbi tempus varius tortor. Sed in tortor euismod, cursus turpis id, consectetur lorem. Integer eget placerat nisi. Suspendisse quis finibus velit, nec iaculis mi. Fusce sagittis diam at nisl egestas, ac venenatis magna molestie. Suspendisse porta sagittis lobortis. Maecenas consectetur convallis ligula, id pellentesque tortor maximus ut. Nullam vel eros sed ipsum varius gravida a sed turpis.  


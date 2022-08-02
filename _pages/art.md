---
title: Art
permalink: /art

---

# Art

<ul class="gallerylist">
  {% for art in site.data.artfiles reversed %}
    <li>
      <a href="{{ art.title | datapage_url: 'gallery' }}"><img src="{{ art.thumbnail }}" alt="{{ art.alttext }} class="></a>
    </li>
   {% endfor %}
</ul>
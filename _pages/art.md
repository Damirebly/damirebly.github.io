---
title: Art
permalink: /art

---

# Art

<ul class="gallerylist">
    {% for art in site.data.artfiles %}
      <li>
        <a href="{{ art.url }}"><img src="{{ art.thumbnail }}" class="galleryimg" alt="{{ art.alttext }} class="></a>
      </li>
    {% endfor %}
    </ul>

    


---
title: Art
permalink: /art

---

# Art

<ul class="gallerylist">
    {% for art in site.data.artfiles reversed %}
      <li>
        <a href="{{ art.url }}"><img src="{{ art.thumbnail }}" class="diamondshape" alt="{{ art.alttext }} class="></a>
      </li>
    {% endfor %}
    </ul>

    


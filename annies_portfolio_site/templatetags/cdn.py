from django import template
from django.conf import settings
import json, os
register = template.Library()

@register.simple_tag
def cdn_url(cdn):
    cdn_url_map = {
        "skeleton": "//cdnjs.cloudflare.com/ajax/libs/skeleton/{}/skeleton.min.css",
        "normalize": "//cdnjs.cloudflare.com/ajax/libs/normalize/{}/normalize.min.css",
    }
    package_json_path = os.path.join(settings.BASE_DIR, "package.json")
    with open(package_json_path) as package_json_file:
        package_json = json.load(package_json_file)
    return cdn_url_map[cdn].format(package_json['cdnDependencies'][cdn][1:])

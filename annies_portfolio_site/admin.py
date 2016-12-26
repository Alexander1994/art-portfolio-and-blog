from django.contrib import admin
from annies_portfolio_site.models import Category, Picture, PicturePost, BlogPost
# Register your models here.
admin.site.register(Category)
admin.site.register(Picture)
admin.site.register(BlogPost)
admin.site.register(PicturePost)

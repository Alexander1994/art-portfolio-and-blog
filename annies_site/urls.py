from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from annies_portfolio_site import views

urlpatterns = [
    url(r'^$', views.home, name="home"),
    url(r'^about/$', views.about, name="about"),
    url(r'^blog/$', views.blog_stream_page, name="blog_stream"),
    url(r'^picture/$', views.picture_stream_page, name="picture_stream"),
    url(r'^admin/', admin.site.urls),
    url(r'^tinymce/', include('tinymce.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

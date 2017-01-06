from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from annies_portfolio_site import views

urlpatterns = [
    url(r'^$', views.home, name="home"),
    url(r'^about/$', views.about, name="about"),
    url(r'^blog/(?P<pk>[0-9]+)/$', views.blog_page, name="blog"),
    url(r'^blog/$', views.blog_stream_page, name="blog_stream"),
    url(r'^picture/(?P<pk>[0-9]+)/$', views.picture_page, name="picture"),
    url(r'^picture/$', views.picture_stream_page, name="picture_stream"),
    url(r'^admin/', admin.site.urls),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

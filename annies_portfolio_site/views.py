from django.shortcuts import render
from django.http import Http404

from annies_portfolio_site.model_views import PicturePostStreamPage, PicturePostPage, BlogPostPage, BlogPostStreamPage

def home(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def picture_stream_page(request):
    page = PicturePostStreamPage()
    return render(request, 'pages/picture_stream.html', {
        'page': page
    })

def blog_stream_page(request):
    page = BlogPostStreamPage()
    return render(request, 'pages/blog_stream.html', {
        'page': page
    })

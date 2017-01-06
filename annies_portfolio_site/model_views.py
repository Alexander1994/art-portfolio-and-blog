from annies_portfolio_site.models import Medium, Picture, PicturePost, BlogPost

class BlogPostPage(object):
    def __init__(self, pk):
        self.blog_post = BlogPost.objects.filter(pk=pk).first()

    @property
    def exists(self):
        return True if self.blog_post else False

    @property
    def title(self):
        return self.blog_post.title

    @property
    def body(self):
        return self.blog_post.body

    @property
    def date(self):
        return self.blog_post.date

    @property
    def has_picture(self):
        return True if self.blog_post.picture else False

    @property
    def picture_url(self):
        return self.blog_post.picture.image.url

class BlogPostStreamPage(object):
    def __init__(self):
        self.blog_posts = BlogPost.objects.all().order_by('date')

    @property
    def all_blog_posts(self):
        return [BlogPostPage(blog_post.pk)
                for blog_post in self.blog_posts]

class PicturePostPage(object):
    def __init__(self, pk):
        self.picture_post = PicturePost.objects.filter(pk=pk).first()

    @property
    def exists(self):
        return True if self.picture_post else False

    @property
    def picture_url(self):
        return self.picture_post.picture.image.url

    @property
    def minurl(self):
        pass

    @property
    def title(self):
        return self.picture_post.title

    @property
    def medium(self):
        return self.picture_post.medium

    @property
    def has_price(self):
        return True if self.picture_post.price else False

    @property
    def price(self):
        if self.picture_post.price == 0:
            return 'Free'
        elif self.picture_post.price:
            return '{} $'.format(self.picture_post.price)
        return ''

    @property
    def has_dimensions(self):
        return True if self.picture_post.height and self.picture_post.width else False

    @property
    def dimensions(self):
        return "{} x {}".format(self.picture_post.height, self.picture_post.width)

    @property
    def description(self):
        return self.picture_post.description


class PicturePostStreamPage(object):
    def __init__(self):
        self.picture_posts = PicturePost.objects.all().order_by('date')

    @property
    def all_picture_posts(self):
        return [PicturePostPage(picture_post.pk)
                for picture_post in self.picture_posts]

from annies_portfolio_site.models import Medium, Picture, PicturePost, BlogPost

class BlogPostPage(object):
    def __init__(self, pk, index):
        self.blog_post = BlogPost.objects.filter(pk=pk).first()
        self.index = index

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
    def thumbnail_size(self):
        return self.blog_post.thumbnail_size

    @property
    def has_picture(self):
        return True if self.blog_post.picture else False

    @property
    def picture_url(self):
        return self.blog_post.picture.image.url

def get_blog_post_list():
    blog_posts = BlogPost.objects.all().order_by('date')
    return [BlogPostPage(blog_post.pk, index)
            for (index, blog_post) in enumerate(blog_posts)]

class BlogPostStreamPage(object):
    def __init__(self):
        self.blog_post_list = get_blog_post_list()

    @property
    def upper_stream_blog_posts(self):
        return self.blog_post_list[0:][::2] # even

    @property
    def lower_stream_blog_posts(self):
        return self.blog_post_list[1:][::2] # odd

    @property
    def all_picture_posts(self):
        return self.blog_post_list

class PicturePostPage(object):
    def __init__(self, pk, index):
        self.picture_post = PicturePost.objects.filter(pk=pk).first()
        self.index = index

    @property
    def exists(self):
        return True if self.picture_post else False

    @property
    def picture_url(self):
        return self.picture_post.picture.image.url

    @property
    def thumbnail_size(self):
        return self.picture_post.thumbnail_size

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

    @property
    def has_dimensions(self):
        return True if self.picture_post.height and self.picture_post.width else False

    @property
    def dimensions(self):
        return "{} x {}".format(self.picture_post.height, self.picture_post.width)

    @property
    def description(self):
        return self.picture_post.description


def get_picture_post_list():
    picture_posts = PicturePost.objects.all().order_by('date')
    return [PicturePostPage(picture_post.pk, index)
            for (index, picture_post) in enumerate(picture_posts)]

class PicturePostStreamPage(object):
    def __init__(self):
        self.picture_post_list = get_picture_post_list()

    @property
    def upper_stream_picture_posts(self):
        return self.picture_post_list[0:][::2] # even

    @property
    def lower_stream_picture_posts(self):
        return self.picture_post_list[1:][::2] # odd

    @property
    def all_picture_posts(self):
        return self.picture_post_list

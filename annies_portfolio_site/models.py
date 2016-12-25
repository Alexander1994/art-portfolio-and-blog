from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Picture(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='/')

    def __str__(self):
        return self.title

class PicturePost(models.Model):
    title = models.CharField(max_length=255)
    picture = models.ForeignKey(Picture)
    category = models.ForeignKey(Category)
    price = models.IntegerField(default=0)
    date = models.DateField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return self.picture.title

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)
    picture = models.ForeignKey(Picture, null=True)

    def __str__(self):
        return "{}, {}".format(self.picture.title, self.date)

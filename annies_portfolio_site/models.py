from django.db import models
from django.core.exceptions import ValidationError

class Medium(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

def rename_upload(instance, filename):
    return 'img/{}.{}'.format(instance.name, filename.split('.')[-1])

class Picture(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to=rename_upload)

    def __str__(self):
        return self.name

class PicturePost(models.Model):
    title = models.CharField(max_length=255)
    picture = models.ForeignKey(Picture)
    description = models.TextField()
    medium = models.ForeignKey(Medium)
    price = models.FloatField(null=True, blank=True)
    date = models.DateField(auto_now_add=True)
    height = models.PositiveSmallIntegerField(null=True, blank=True)
    width = models.PositiveSmallIntegerField(null=True, blank=True)

    def clean(self):
        if self.height == 0 or self.width == 0:
            raise ValidationError('Please enter a value greater then 0 as a dimension')

        if bool(self.height) != bool(self.width):
            raise ValidationError('Please complete both height and width fields')

    def __str__(self):
        return "{}, {}".format(self.title, self.date)

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    date = models.DateField(auto_now_add=True)
    picture = models.ForeignKey(Picture, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return "{}, {}".format(self.title, self.date)

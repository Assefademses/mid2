from django.db import models

# Create your models here.


class teach(models.Model):
    fullName = models.CharField(max_length=100)

    def __str__(self):
        return self.fName

from django.db import models

# Create your models here.

class Items(models.Model):
    product_img = models.ImageField(upload_to="prod")
    product_name = models.CharField(max_length=30)
    product_price =models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    product_description = models.CharField(max_length=30)

